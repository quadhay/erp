import React from 'react'
import { Route } from 'react-router-dom'
import Customer from './customer'
import Sales from './sales'

const SFA = ({ match }) => (
    <>
        <Route exact path={match.url} render={ () => (
            <>
                <h3>Sales Force Automation</h3>
                <p className="h5 mt-4">This will be your dashboard that will contain all your activity on the application.</p>
            </>
        ) } />
        <Route path={`${match.url}/customers`} render={ props => <Customer {...props} /> } />
        <Route path={`${match.url}/sales`} render={ props => <Sales {...props} /> } />
    </>
)

export default SFA
