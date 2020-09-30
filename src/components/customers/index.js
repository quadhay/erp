import React, { useEffect, useState } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Service } from './service'
import ShowCustomers from './Show'
import Create from './Create'
import { alertActions } from '../../actions'
import './customer.scss'

const Customers = ({ match, dispatch, setTitle }) => {
    setTitle('Customers')

    const [ data, setData ] = useState({ loaded: false, data: [], error: false })

    useEffect(() => {
        Service.getAll()
            .then(
                response => setData({ ...data, ...{loaded: true, data: response.data} }),
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
            <Route exact path={match.path} render={ props => <ShowCustomers response={data} update={setData} {...props} /> } />

            <Switch>
                <Route path={`${match.path}/segments`} component={() => (
                    <>
                        <h5>Customer Segmentations!</h5>
                        <p>This is the practice of dividing a customer base into groups of individuals that are similar in specific ways relevant to marketing, such as age, gender, interests and spending habits.</p>
                    </>
                )} />
                
                <Route path={`${match.path}/:id`} render={ props => <Create response={data} update={setData} {...props} /> } />                
            </Switch>
        </>
    )
}

export default connect()(Customers)
