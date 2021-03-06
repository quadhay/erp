import React, { useEffect, useState } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Show from './Show'
import AddCashFlow from './AddCashFlow'
import Account from './Account'
import './cashflow.scss'

const CashFlow = ({ match }) => (
    <>
        <Route exact path={match.path} render={ props => <Show {...props} /> } />
        <Switch>
            <Route path={`${match.path}/add`} render={ () => <AddCashFlow type={0} /> } />
            <Route path={`${match.path}/accounts`} render={ props => <Account {...props} />  } />
            <Route path={`${match.path}/:id`} render={ props => <AddCashFlow type={1} {...props} /> } />              
        </Switch>
    </>  
)

export default CashFlow
