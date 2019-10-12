import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Credit from '../Credit'
import { Link } from 'react-router-dom'
import '../../sass/login.scss'

const Login = ({ className, signIn, icon }) => {

    const [ user, setUser ] = useState('')
    const userHandler = e => setUser(e.target.value)
    
    const [ password, setPassword ] = useState('')
    const passwordHandler = e => setPassword(e.target.value)

    return (
        <main role="main" className={className}>
            <div className="container">
                <div className="row">            
                    <div className="app-login-container col-lg-4 col-md-6 col-sm-8 col-xs-12">
                        <div className="app-login-title mb-4 text-center">
                            <img className="img-fluid mr-3" src={icon} alt="Guard" />
                        </div>

                        <div className="app-login-content">
                            <div className="app-login-body">
                                <form name="signin" onSubmit={ event => signIn(user, password, event) }>
                                    <div className="form-group ">
                                        <div className="position-relative">
                                            <input id="form-username" type="text" name="form-username" placeholder="Username..." className="form-username form-control" value={user} onChange={userHandler} required />
                                            <i><FontAwesomeIcon icon="user" /></i>
                                            <span></span>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="position-relative">                                    
                                            <input id="form-password" type="password" name="form-password" placeholder="Password..." className="form-password form-control" value={password} onChange={passwordHandler} required />
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
                                        <button type="submit" className="btn font-weight-bold">Login</button>  
                                    </div>   
                                                                                
                                </form>
                            </div>                    
                        </div>

                        <div className="app-login-footer text-center template">
                            <p>
                                Don't have an account?
                                <Link to="/register"> Sign up</Link>
                            </p>
                            <Credit />                   
                        </div>
                    </div>
                </div>                
            </div>
        </main>
    )

}

export default Login
