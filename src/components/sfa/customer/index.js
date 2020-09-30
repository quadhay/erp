import React, { useEffect, useState } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Service } from './service'
import Customers from './Customers'
import Create from './Create'
import { alertActions } from '../../../actions'
import './customer.scss'

const Customer = ({ match, dispatch }) => {
    const [ data, setData ] = useState({ loaded: false, data: [], error: false })

    useEffect(() => {
        Service.getAll()
            .then(
                response => {
                    setData({ ...data, ...{loaded: true, data: response.data} })
                    /*if (typeof(response.data) === 'object') {
                        const items = response.data.map( item => {
                            const address = JSON.parse(item.address)
                            Object.assign(item, address)
                            return item
                        } )
                        setData({ ...data, ...{loaded: true, data: items} })
                    } else {
                        setData({ ...data, ...{loaded: true} })
                    }*/
                },
                error => {
                    let msg
                    if ( error.response ) {
                        msg = error.response.status !== 500 ? error.response.data : 'Oops, something went wrong'
                    } else {
                        msg = error.toString()
                    }
                    setData({ ...data, ...{loaded: true, error: true} })
                    dispatch(alertActions.error('Unable to retrieve data'))
                }
            )
    }, [])

    return (
        <>
            <Route exact path={match.path} render={ props => <Customers response={data} update={setData} {...props} /> } />
            <Route path={`${match.path}/:id`} render={ props => <Create response={data} update={setData} {...props} /> } />
        </>
    )
}

export default connect()(Customer)
