import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cashFlowService } from '../../services'
import { alertActions } from '../../actions'
import { chunk, truncate, orderBy } from 'lodash'
import queryString from 'query-string'
import { Dropdown, ButtonGroup } from 'react-bootstrap'
import { Select } from '../fragment/form-elements'
import startCase from 'lodash/startCase'
import { _object, csv } from '../../helpers'

const Show = ({ match, location, history, dispatch }) => {
    const search = location.search ? queryString.parse(location.search) : {
        filter: JSON.stringify({}), sort: 'id', order: 'asc', page: 1, perPage: 10
    }
    
    const [ data, setData ] = useState([])
    const [ loaded, setLoaded ] = useState(false)
    const [ filters, setFilters ] = useState({})
    //const [ filterValue, setFilterValue ] = useState({})
    const path = location.pathname

    useEffect(() => {
        cashFlowService.getAll()
            .then(
                response => {
                    setData(response.data)
                    setLoaded(true)
                },
                error => {
                    let msg
                    if ( error.response ) {
                        msg = error.response.status !== 500 ? error.response.data : 'Oops, something went wrong'
                    } else {
                        msg = error.toString()
                    }
                    dispatch(alertActions.error(msg))
                }
            )        
    }, [])

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
                Date: res.date,
                "Payment Method": res.payment_method,
                Account: `${res.account} (${res.currency})`,
                Amount: res.symbol + res.amount.toFixed(2),
                Comments: res.comments
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
                .filter( row => filter.payment_method ? row.payment_method === filter.payment_method : true )
                .filter( row => filter.currency ? row.currency === filter.currency : true )
                .filter( row => filter.account ? row.account === filter.account : true )

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
                        <Dropdown.Toggle as="a" id="filter-dropdown" bsPrefix="btn btn-sm mr-2">
                            <FontAwesomeIcon icon="filter" /> ADD FILTER
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            { list.map( (filter, i) => filter in filters ? null : <Dropdown.Item as="button" key={i} onClick={ () => addFilter(filter) }>{startCase(filter)}</Dropdown.Item> ) }
                        </Dropdown.Menu>
                    </Dropdown>
                )
            }
            
            return (
                <>
                    <div className="toolbar-root d-flex justify-content-between mb-4">
                        <div className="d-flex">
                            <div className="_search d-none">
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
                            <Link to={`${match.path}/add`} className="btn btn-sm mr-2"><FontAwesomeIcon icon="plus" /> Add Cash Flow</Link>
                            <FilterList list={[ 'payment_method', 'account', 'currency']} /> 
                            <button className="btn btn-sm" onClick={ () => csv(csvData(filtered), 'Cash Flow') }><FontAwesomeIcon icon="file-export" /> EXPORT</button>                               
                        </div>
                    </div>

                    <div className="content-body">
                        <table className="table table-sm">
                            <thead>
                                <tr>
                                    <th><span className="pointer" onClick={() => sortHandler('id')}>Id {arrow('id')}</span></th>
                                    <th><span className="pointer" onClick={() => sortHandler('date')}>Date {arrow('date')}</span></th>
                                    <th><span className="pointer" onClick={() => sortHandler('payment_method')}>Payment Method {arrow('payment_method')}</span></th>
                                    <th><span className="pointer" onClick={() => sortHandler('account')}>Account {arrow('account')}</span></th>
                                    <th><span className="pointer" onClick={() => sortHandler('amount')}>Amount {arrow('amount')}</span></th>
                                    <th><span className="pointer" onClick={() => sortHandler('comments')}>Comments {arrow('comments')}</span></th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                { current.map( ({ id, amount, comments, date, symbol, account, payment_method }) => (
                                    <tr key={id} className={ amount < 0 ? 'debit' : 'credit' }>
                                        <td>{id}</td>
                                        <td>{date}</td>
                                        <td>{payment_method}</td>
                                        <td>{account}</td>
                                        <td>{symbol}{amount.toFixed(2)}</td>
                                        <td>{truncate(comments, {length: 50, separator: /,? +/})}</td>
                                        <td>
                                            <Link to={`${match.url}/${id}`} className="btn btn-sm">
                                                <FontAwesomeIcon icon="link" />
                                            </Link>
                                        </td>
                                    </tr>                                        
                                ) ) }
                            </tbody>
                        </table>
                    </div> 

                    <div className="d-flex justify-content-between">
                        <div className="account-link">      
                            <Link to={`${match.path}/accounts`} className="btn btn-sm mr-2"><FontAwesomeIcon icon="coins" /> Account</Link>
                        </div>

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
                </>                
            )
        } else {
            return <Link to={`${match.path}/add`} className="btn btn-sm mr-2"><FontAwesomeIcon icon="plus" /> Add Cash Flow</Link>
        }
    }

    return null
}

export default connect()(Show)
