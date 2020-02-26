import React, { useEffect, useState } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Customers from './Customers'
import Create from './Create'
import './customer.scss'

const Customer = ({ match }) => (
    <>
        <Route exact path={match.path} render={ props => <Customers {...props} /> } />
        <Route path={`${match.path}/:id`} render={ props => <Create type={1} {...props} /> } />
    </>
)

export default Customer
