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

const Customers = ({ match, location, history, response, update }) => {
    const { loaded, data } = response
    const search = location.search ? queryString.parse(location.search) : {
        filter: JSON.stringify({}), sort: 'customer', order: 'asc', page: 1, perPage: 10
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

    const csvData = data => {
        let csv = []
        for (let res of data) {
            csv.push({
                Customer: res.name,
                Location: res.city,
                Orders: res.order,
                "Total Spent": res.totalspent.toFixed(2),
                "Last Seen": res.lastseen
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
                .filter( row => filter.city ? row.city === filter.city : true )
                .filter( row => filter.order ? row.order === filter.order : true )
                .filter( row => filter.lastseen ? row.lastseen === filter.lastseen : true )

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
                <div className="shadow-box mt-3">
                    <div className="toolbar-root position-relative">
                        <div className={classNames('bulk-actions-toolbar toolbar d-flex align-items-center justify-content-between position-absolute px-4 w-100', {show: selected.length})}>
                            <label className="font-weight-bold">{selected.length} item{selected.length > 1 ? 's' : null} selected</label>

                            <button className="btn btn-sm text-danger" onClick={ () => console.log('non') }><FontAwesomeIcon icon="trash" /> DELETE</button>
                        </div>

                        <div className="d-flex align-items-center justify-content-between px-3 filter-toolbar">
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
                                <Link to={`${match.path}/create`} className="btn btn-sm anchor mr-2"><FontAwesomeIcon icon="plus" /> Create</Link>
                                <FilterList list={[ 'payment_method', 'account', 'currency']} />
                                <button className="btn btn-sm" onClick={ () => csv(csvData(filtered), 'Cash Flow') }><FontAwesomeIcon icon="file-export" /> EXPORT</button>
                            </div>
                        </div>
                    </div>

                    <div className="content-body">
                        <table className="table table-md vertical-top edge-pad">
                            <thead>
                                <tr>
                                    <th>
                                        <input type="checkbox" className="fancy-input round" value="all" onChange={checkHandler} />
                                    </th>
                                    <th><span className="pointer" onClick={() => sortHandler('name')}>Customer {arrow('name')}</span></th>
                                    <th><span className="pointer" onClick={() => sortHandler('city')}>Location {arrow('city')}</span></th>
                                    <th><span className="pointer" onClick={() => sortHandler('order')}>Orders {arrow('order')}</span></th>
                                    <th><span className="pointer" onClick={() => sortHandler('totalspent')}>Total Spent {arrow('totalspent')}</span></th>
                                    <th><span className="pointer" onClick={() => sortHandler('lastseen')}>Last Seen {arrow('lastseen')}</span></th>
                                </tr>
                            </thead>

                            <tbody>
                                { current.map( ({ id, name, city, order, totalspent, lastseen }) => (
                                    <tr key={id}>
                                        <td>
                                            <input type="checkbox" className="fancy-input round" value={id} onChange={checkHandler} />
                                        </td>
                                        <td>
                                            <Link to={`${match.url}/${id}`}>{name}</Link>
                                        </td>
                                        <td>{city}</td>
                                        <td>{order}</td>
                                        <td>{totalspent.toFixed(2)}</td>
                                        <td>{lastseen}</td>
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
            return <Link to={`${match.path}/create`} className="btn btn-sm anchor m-5"><FontAwesomeIcon icon="plus" /> Create Customer</Link>
        }
    }

    return null
}

export default Customers
