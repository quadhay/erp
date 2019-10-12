import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ id, toggleSidebar }) => {
    /*const {expanded, active} = id

    if ( expanded && active ) {
        console.log('have children')
    } else if ( !expanded  )*/

    return (
        <nav className="main-header navbar navbar-expand justify-content-between">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <span className="nav-link" data-widget="pushmenu" onClick={toggleSidebar}>
                        <FontAwesomeIcon icon="bars" />
                    </span>
                </li>

                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/" className="nav-link">Home</Link>
                </li>

                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/about" className="nav-link">About App</Link>
                </li>

                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/logout" className="nav-link">Logout</Link>
                </li>                
            </ul>

            <form className="form-inline">
                <div className="input-group input-group-sm">
                    <input type="search" className="form-control search-content" placeholder="Search..."/>

                    <div className="input-group-append">
                        <button type="submit" className="btn input-group-text">
                            <FontAwesomeIcon icon="search" />
                        </button>  
                    </div>
                </div>
            </form>
        </nav>  
    )

}

Header.propTypes = {
    id: PropTypes.object.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
}

export default Header
