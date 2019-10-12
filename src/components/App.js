import React, { lazy, Suspense, useEffect } from 'react'
import { useAlert } from 'react-alert'
import ErrorBoundary from './ErrorBoundary'
import Loader from './layout/Loader'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'

const AuthenticatedApp = lazy(() => import('../containers/AuthApp'))
const UnauthenticatedApp = lazy(() => import('../containers/UnauthenticatedApp'))

const App = ({ user, alert, clearAlert }) => {
    const myAlert = useAlert()
    
    useEffect(() => {
        if ( 'message' in alert ) {
            myAlert.show( alert.message.toString(), {
                type: alert.typeAlias,
                onOpen: () => clearAlert()
            } )
        }
    }, [ alert, myAlert, clearAlert ])

    return (
        <ErrorBoundary>
            <Suspense fallback={<Loader />}>
                <Router>
                    { user.loggedIn ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
                </Router>
            </Suspense>
        </ErrorBoundary>
    )
}

App.propTypes = {
    user: PropTypes.object.isRequired,
    alert: PropTypes.object.isRequired,
    clearAlert: PropTypes.func.isRequired 
}

export default App
