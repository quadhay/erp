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

const Show = ({ match, location, history, dispatch }) => {
    const search = location.search ? queryString.parse(location.search) : {
        filter: JSON.stringify({}), sort: 'id', order: 'asc', page: 1, perPage: 10
    }
    
    const [ data, setData ] = useState([])
    const [ loaded, setLoaded ] = useState(false)
    const [ filters, setFilters ] = useState({})
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

    useEffect( () => {
        let data = JSON.parse(search.filter),
            filters = {}

        /*for ( let k of Object.keys(data) ) {
            filters[k] = filterComponent(k, data[k])
        }*/
        
        Object.keys(data).map( k => filters[k] = filterComponent(k, data[k]) )

        setFilters(filters)
    }, [loaded] )
    
    const pageHandler = page => history.push(`${path}?${queryString.stringify({ ...search, ...{page} })}`)

    const perPageHandler = e => history.push(`${path}?${queryString.stringify({ ...search, ...{perPage: e.currentTarget.value} })}`)

    const searchHandler = e => {
        let q = e.target.value
        if (q) console.log(q)
    }

    const filterComponent = (filter, value = '', key = 0) => {
        switch (filter) {
            case 'payment_method':
                key = filter              
                break;

            case 'account':
                key = 'bank'              
                break;
                
            case 'currency':
                key = 'code'              
                break;

            default:
                break;
        }

        return <Select key={filter} name={filter} label={startCase(filter)} value={value} values={[...new Set(data.map(item => item[key]))]} handleChange={filterHandler} />
    }

    const addFilter = filter => {
        setFilters({ ...filters, ...{ [filter]: filterComponent(filter) } })
    }

    const removeFilter = filter => {
        delete filters[filter]
        setFilters({ ...filters })
    }

    const filterHandler = (e, filter) => {
        let filters = JSON.parse(search.filter),
            input = e.target.value,
            nFilter = { ...filters, ...{ [filter]: input } }

        history.push(`${path}?${queryString.stringify({ ...search, ...{ filter: JSON.stringify(nFilter) } })}`)
    }

    const sortHandler = text => {
        const order = (search.sort === text) ? search.order === 'asc' ? 'desc' : 'asc' : 'asc'
        const query = queryString.stringify({ ...search, ...{ sort: text, page: 1, order } })

        history.push(`${path}?${query}`)
    }

    if ( loaded ) {    
        if ( data.length > 0 ) {
            const { filter, sort, order } = search
            const perPage = parseInt(search.perPage)
            const page = parseInt(search.page)

            const orderData = orderBy(data, [sort], [order])

            let chunkData = chunk(orderData, perPage),
                current = chunkData[page-1] ? chunkData[page-1] : []

            const arrow = column => {
                if (column === sort)
                    return <FontAwesomeIcon className="small" icon={order === 'asc' ? 'arrow-up' : 'arrow-down'} />

                return null
            }

            const filterList = [ 'payment_method', 'account', 'currency']
            
            return (
                <>
                    <div className="content-head d-flex justify-content-between mb-4">
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
                            
                            <Dropdown as={ButtonGroup}>
                                <Dropdown.Toggle as="a" id="filter-dropdown" bsPrefix="btn btn-sm mr-2">
                                    <FontAwesomeIcon icon="filter" /> ADD FILTER
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    { filterList.map( (filter, i) => filter in filters ? null : <Dropdown.Item as="button" key={i} onClick={ () => addFilter(filter) }>{startCase(filter)}</Dropdown.Item> ) }
                                </Dropdown.Menu>
                            </Dropdown> 

                            <button className="btn btn-sm"><FontAwesomeIcon icon="file-export" /> EXPORT</button>                               
                        </div>
                    </div>

                    <div className="content-body">
                        <table className="table">
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
                                { current.map( ({ id, amount, comments, date, symbol, bank, payment_method }) => (
                                    <tr key={id} className={ amount < 0 ? 'debit' : 'credit' }>
                                        <td>{id}</td>
                                        <td>{date}</td>
                                        <td>{payment_method}</td>
                                        <td>{bank}</td>
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

                    <div className="content-foot d-flex justify-content-end">
                        <div className="_action">
                            <label>Rows per page:</label>

                            <select className="border-0 pl-1 mr-3 font-weight-bold" value={perPage} onChange={perPageHandler}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                            </select>

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
