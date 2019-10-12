import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Credit from '../Credit'
import { Link } from 'react-router-dom'

const Login = ({ signIn }) => {

    const [ email, setEmail ] = useState('')
    const emailHandler = e => setEmail(e.target.value)
    
    const [ password, setPassword ] = useState('')
    const passwordHandler = e => setPassword(e.target.value)

    let styles = {
        position: 'absolute',
        right: '12px',
        top: '8.5px',
        fontSize: '13px',
        color: '#227dc7',
        Otransition: 'all .5s',
        WebkitTransition: 'all .5s',
        transition: 'all .5s',
    }

    return (
        <main role="main" className="app-login bg-dark vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className="container">
                <div className="card card-login mx-auto" style={{ maxWidth: '350px' }}>
                    <div className="card-body">
                        <form name="signin" onSubmit={ (event) => signIn(email, password, event) }>
                            <div className="form-group">
                                <label className="label" htmlFor="email">Email Address:</label>
                                <div className="position-relative">
                                    <input type="email" name="email" className="form-control" id="email" placeholder="Email" value={email} onChange={emailHandler} required="required" />
                                    <i style={styles}><FontAwesomeIcon icon="envelope" /></i>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="label d-flex d-flex justify-content-between align-items-center" htmlFor="password">
                                    Password:
                                    <Link className="d-block small" to="/resetpassword">Forgot?</Link>
                                </label>
                                <div className="position-relative">
                                    <input type="password" name="password" className="form-control" id="password" placeholder="Password" value={password} onChange={passwordHandler} required="required" />
                                    <i style={styles}><FontAwesomeIcon icon="lock" /></i>
                                </div>
                            </div>        

                            <div className="form-group">
                                <div className="form-check">
                                    <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" /> Remember me</label>
                                </div>
                            </div>

                            <input type="submit" className="btn btn-primary btn-block" name="submit" value="Login" />
                        </form>
                    </div>

                    <div className="card-footer text-center">
                        Don't have an account?&nbsp;
                        <Link to="/register">Sign up</Link>
                    </div>                    
                </div>       
            </div>

            <Credit styles={{ position: 'absolute', bottom: 0, color: '#fff' }} />
        </main>
    )

}

Login.propTypes = {
    signIn: PropTypes.func.isRequired, 
}

export default Login
