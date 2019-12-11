import React from 'react'
import { Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Users = ({ match }) => {
    return (
        <>
            <Route exact path={match.path} render={ () => (
                <>
                    <div className="d-flex justify-content-between mb-4">
                        <div className="_search">
                            <div className="input-group input-group-sm">
                                <input type="search" className="form-control search-content" placeholder="Search"/>

                                <div className="input-group-append">
                                    <button type="submit" className="btn input-group-text">
                                        <FontAwesomeIcon icon="search" />
                                    </button>  
                                </div>
                            </div>            
                        </div>

                        <div className="_action">
                            <Link to={`${match.path}/create`} className="btn disabled"><FontAwesomeIcon icon="plus" /> CREATE</Link>
                        </div>
                    </div>

                    <div className="survey-response d-none">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Comments</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>2019/11/05</td>
                                    <td>25000</td>
                                    <td>Young you are doing critical things, please oo have alternative.</td>
                                    <td><Link to={`${match.path}/22/link`} className="btn"><FontAwesomeIcon icon="link" /> LINK</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>                
                </>                
            ) } /> 
        </>  
    )
}

export default Users
