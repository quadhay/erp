import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './login.scss'

const ResetPassword = ({ reset }) => {
    const [ email, setEmail ] = useState('')
    const emailHandler = e => setEmail(e.target.value)

    return (
        <main role="main" className="app-login theme1">
            <div className="container">
                <div className="row">            
                    <div className="app-login-container col-lg-4 col-md-6 col-sm-8 col-xs-12">
                        <div className="app-login-content">
                            <div className="app-login-body">
                                <form name="signin" onSubmit={ event => signIn(reset, event) }>
                                    <div className="position-relative">
                                        <input id="form-username" type="email" name="form-username" placeholder="Email" className="form-username form-control" value={email} onChange={emailHandler} autoComplete="off" required />
                                        <i><FontAwesomeIcon icon="envelope" /></i>
                                        <span></span>
                                    </div>
                    
                                    <button type="submit" className="btn font-weight-bold">Login</button>
                                </form>
                            </div>                    
                        </div>
                    </div>
                </div>                
            </div>
        </main>
    )

}

ResetPassword.propTypes = {
    reset: PropTypes.func.isRequired,
}

export default ResetPassword
