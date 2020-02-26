import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './login.scss'

const Login = ({ signIn }) => {

    const [ email, setEmail ] = useState('')
    const emailHandler = e => setEmail(e.target.value)
    
    const [ password, setPassword ] = useState('')
    const passwordHandler = e => setPassword(e.target.value)

    return (
        <main role="main" className="app-login default">
            <div className="container">
                <div className="row">            
                    <div className="app-login-container col-lg-4 col-md-6 col-sm-8 col-xs-12">
                        <div className="app-login-content">
                            <div className="app-login-body">
                                <form name="signin" onSubmit={ event => signIn(email, password, event) }>
                                    <div className="form-group ">
                                        <div className="position-relative">
                                            <input id="form-username" type="email" name="form-username" placeholder="Email" className="form-username form-control" value={email} onChange={emailHandler} autoComplete="off" required />
                                            <i><FontAwesomeIcon icon="envelope" /></i>
                                            <span></span>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="position-relative">                                    
                                            <input id="form-password" type="password" name="form-password" placeholder="Password" className="form-password form-control" value={password} onChange={passwordHandler} required />
                                            <i><FontAwesomeIcon icon="lock" /></i>
                                            <span></span>    
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="checkbox" />
                                                Remember me
                                            </label>
                                        </div>
                                    </div>

                                    <div className="form-group text-right">     
                                        <Link to="/resetpassword" className="bold"> Forgot password?</Link>
                                    </div>   

                                    <div className="form-group">     
                                        <button type="submit" className="btn font-weight-bold nunito">Login</button>  
                                    </div>                                         
                                </form>
                            </div>                    
                        </div>
                    </div>
                </div>                
            </div>
        </main>
    )

}

Login.propTypes = {
    signIn: PropTypes.func.isRequired,
}

export default Login
