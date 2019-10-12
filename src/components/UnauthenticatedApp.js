import React from 'react'
import classNames from 'classnames'
import { Login2 as Login } from './login'
import icon from '../images/guard-logo.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'


library.add( faLock, faUser, faEnvelope )

const UnauthenticatedApp = ({ signIn }) => {
    return (
        <Login icon={icon} signIn={signIn} className={classNames( 'app-login', 'theme1' )} />
    )

}

UnauthenticatedApp.propTypes = {
    signIn: PropTypes.func.isRequired, 
}

export default UnauthenticatedApp
