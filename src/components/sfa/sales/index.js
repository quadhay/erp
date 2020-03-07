import React, { useEffect, useState } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Service } from './service'
import Sales from './Sales'
import Order from './Order'
import { alertActions } from '../../actions'
import './sales.scss'
import sample from './fake'

const _Sales = ({ match, dispatch }) => {
    const [ data, setData ] = useState({ loaded: false, data: [], error: false })

    useEffect(() => {
        Service.getAll()
            .then(
                response => {
                    if (typeof(response.data) === 'object') {
                        const items = sample.map( item => {
                            const total = item.invoice.map( item => item.price * item.quantity )
                            item.orderCount = item.invoice.length
                            item.amount = total.reduce((a, b) => a + b, 0)

                            return item
                        } )
                        setData({ ...data, ...{loaded: true, data: items} })
                    } else {
                        setData({ ...data, ...{loaded: true} })
                    }
                },
                error => {
                    let msg
                    if ( error.response ) {
                        msg = error.response.status !== 500 ? error.response.data : 'Oops, something went wrong'
                    } else {
                        msg = error.toString()
                    }
                    setData({ ...data, ...{loaded: true, error: true} })
                    dispatch(alertActions.error(msg))
                }
            )
    }, [])

    return (
        <>
            <Route exact path={match.path} render={ props => <Sales response={data} update={setData} {...props} /> } />
            <Route path={`${match.path}/:id`} render={ props => <Order response={data} update={setData} {...props} /> } />
        </>
    )
}

export default connect()(_Sales)
