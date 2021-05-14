import React from 'react'
import { Route } from 'react-router-dom'

const Route = route => <Route exact={route.exact} path={route.path} render={props => <route.component {...props} routes={route.routes} />} />

export default Route