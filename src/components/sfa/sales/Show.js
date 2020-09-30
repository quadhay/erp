import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { chunk, truncate, orderBy } from 'lodash'
import queryString from 'query-string'
import { Dropdown, ButtonGroup } from 'react-bootstrap'
import { Select } from '../../fragment/form-elements'
import startCase from 'lodash/startCase'
import { _object, csv } from '../../../helpers'

const Show = ({ match, location, history, response, update }) => {
    const { loaded, data } = response
    const search = location.search ? queryString.parse(location.search) : {
        filter: JSON.stringify({}), sort: 'date', order: 'asc', page: 1, perPage: 10
    }

    const [ selected, setSelected ] = useState([])
    const [ filters, setFilters ] = useState({})
    const path = location.pathname

    useEffect( () => updateFilters(JSON.parse(search.filter)), [loaded, search.filter] )

    const updateFilters = (data = {}, filters = {}) => {
        Object.keys(data).map( k => filters[k] = filterComponent(k, data[k]) )
        setFilters(filters)
    }

    const pageHandler = page => pushSearch({page})

    const perPageHandler = e => pushSearch({perPage: e.currentTarget.value})

    const searchHandler = e => {
        let q = e.target.value
        if (q) console.log(q)
    }

    const checkHandler = e => setSelected([1])

    const filterComponent = (filter, value = '') => <Select key={filter} name={filter} label={startCase(filter)} value={value} values={[...new Set(data.map(item => item[filter]))]} handleChange={filterHandler} />

    const addFilter = filter => {
        let queryFilters = JSON.parse(search.filter)
        setFilters({ ...filters, ...{ [filter]: filterComponent(filter, queryFilters[filter]) } })
    }

    const removeFilter = filter => {
        delete filters[filter]
        setFilters({ ...filters })

        let query_filter = JSON.parse(search.filter)
        delete query_filter[filter]

        pushSearch({ page: 1, filter: JSON.stringify(query_filter) })
    }

    const filterHandler = (e, filter) => {
        let parse_filter = JSON.parse(search.filter),
            input = e.target.value,
            nFilter = { ...parse_filter, ...{ [filter]: input } }

        pushSearch({ page: 1, filter: JSON.stringify(nFilter) })
    }

    const sortHandler = text => {
        const order = (search.sort === text) ? search.order === 'asc' ? 'desc' : 'asc' : 'asc'
        pushSearch({ sort: text, page: 1, order })
    }

    const pushSearch = obj => history.push(`${path}?${queryString.stringify({ ...search, ...obj })}`)

    const openOrder = id => history.push(`${path}/${id}`)

    const csvData = data => {
        let csv = []
        for (let res of data) {
            csv.push({
                Date: res.date,
                Reference: res.reference,
                Customer: res.customer,
                "No. Items": res.orderCount,
                Total: res.amount
            })
        }
        return csv
    }

    const navigationInfo = (current, perPage, batchLen, totalLen) => {
        let i = current - 1,
            to = current === batchLen ? totalLen : current * perPage

        return `${i * perPage + 1} - ${to} of ${totalLen}`
    }

    if ( loaded ) {
        if ( data.length > 0 ) {
            const { sort, order } = search
            const perPage = parseInt(search.perPage)
            const page = parseInt(search.page)
            const filter = _object.clean(JSON.parse(search.filter))

            // filter data
            const filtered = data
                .filter( row => filter.amount ? row.amount === filter.amount : true )
                .filter( row => filter.orderCount ? row.orderCount === filter.orderCount : true )
                .filter( row => filter.customer ? row.customer === filter.customer : true )

            const orderData = orderBy(filtered, [sort], [order])

            let chunkData = chunk(orderData, perPage),
                current = chunkData[page-1] ? chunkData[page-1] : []

            const arrow = column => {
                if (column === sort)
                    return <FontAwesomeIcon className="small" icon={order === 'asc' ? 'arrow-up' : 'arrow-down'} />

                return null
            }

            const FilterList = ({list = []}) => {
                const added = list.every(filter => filter in filters)

                return added ? null : (
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle as="a" id="filter-dropdown" bsPrefix="btn btn-sm anchor mr-2">
                            <FontAwesomeIcon icon="filter" /> ADD FILTER
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            { list.map( (filter, i) => filter in filters ? null : <Dropdown.Item as="button" key={i} onClick={ () => addFilter(filter) }>{startCase(filter)}</Dropdown.Item> ) }
                        </Dropdown.Menu>
                    </Dropdown>
                )
            }

            return (
                <div className="shadow-box">
                    <div className="toolbar-root d-flex justify-content-between p-3 position-relative">
                        <div className={classNames('bulk-actions-toolbar toolbar d-flex align-items-center justify-content-between position-absolute px-4 w-100 h-100', {show: selected.length})}>
                            <label className="font-weight-bold">{selected.length} item{selected.length > 1 ? 's' : null} selected</label>

                            <button className="btn btn-sm text-danger" onClick={ () => console.log('non') }><FontAwesomeIcon icon="trash" /> DELETE</button>
                        </div>

                        <div className="d-flex">
                            <div className="_search">
                                <input type="search" className="form-control form-control-sm" placeholder="Search" onKeyUp={searchHandler} />
                            </div>

                            {  Object.keys(filters).map( filter => (
                                <div key={filter} className="d-flex align-items-center ml-3">
                                    <span className="mr-2" onClick={() => removeFilter(filter)}><FontAwesomeIcon icon="times" /></span>
                                    {filters[filter]}
                                </div>
                            ) ) }
                        </div>

                        <div className="_action">
                            <Link to={`${match.path}/new`} className="btn btn-sm anchor mr-2"><FontAwesomeIcon icon="plus" /> New</Link>
                            <FilterList list={[ 'payment_method', 'account', 'currency']} />
                            <button className="btn btn-sm" onClick={ () => csv(csvData(filtered), 'Cash Flow') }><FontAwesomeIcon icon="file-export" /> EXPORT</button>
                        </div>
                    </div>

                    <div className="content-body">
                        <table className="table table-md vertical-top edge-pad">
                            <thead>
                                <tr>
                                    <th>
                                        <input type="checkbox" className="fancy-input" value="all" onChange={checkHandler} />
                                    </th>
                                    <th><span className="pointer" onClick={() => sortHandler('date')}>Date {arrow('date')}</span></th>
                                    <th><span className="pointer" onClick={() => sortHandler('reference')}>Reference {arrow('reference')}</span></th>
                                    <th><span className="pointer" onClick={() => sortHandler('customer')}>Customer {arrow('customer')}</span></th>
                                    <th className="text-right"><span className="pointer" onClick={() => sortHandler('orderCount')}>No. Items {arrow('orderCount')}</span></th>
                                    <th className="text-right"><span className="pointer" onClick={() => sortHandler('amount')}>Total {arrow('amount')}</span></th>
                                </tr>
                            </thead>

                            <tbody>
                                { current.map( ({ id, date, reference, customer, orderCount, amount }) => (
                                    <tr key={id} className="pointer bg-hover" onClick={() => openOrder(id)}>
                                        <td>
                                            <input type="checkbox" className="fancy-input" value={id} onChange={checkHandler} />
                                        </td>
                                        <td>{date}</td>
                                        <td>{reference}</td>
                                        <td>{customer}</td>
                                        <td className="text-right">{orderCount}</td>
                                        <td className="text-right">{amount.toFixed(2)}</td>
                                    </tr>
                                ) ) }
                            </tbody>
                        </table>
                    </div>

                    <div className="d-flex justify-content-end pb-2 px-3">
                        <div className="_action">
                            <label>Rows per page:</label>

                            <select className="border-0 mr-4 pl-1 font-weight-bold" value={perPage} onChange={perPageHandler}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                            </select>

                            { chunkData.length > 1 ? <span className="mr-4">{navigationInfo(page, perPage, chunkData.length, filtered.length)}</span> : null }

                            <span className="navigation">
                                <button className="btn" disabled={page === 1} onClick={() => pageHandler(page - 1)}><FontAwesomeIcon icon="chevron-left" /></button>
                                <label>{page} of {chunkData.length}</label>
                                <button className="btn" disabled={page === chunkData.length} onClick={() => pageHandler(page + 1)}><FontAwesomeIcon icon="chevron-right" /></button>
                            </span>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <Link to={`${match.path}/new`} className="btn btn-sm anchor m-5"><FontAwesomeIcon icon="plus" /> New Order</Link>
        }
    }

    return null
}

export default Show
