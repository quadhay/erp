import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import { NavDropdown, Dropdown, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ toggleSidebar, user, signOut, title }) => {

    return (
        <nav className="main-header navbar navbar-expand ">
            <span data-widget="pushmenu" onClick={toggleSidebar}>
                <FontAwesomeIcon icon="bars" />
            </span>

            <span className="pagetitle h6 text-uppercase my-0 ml-4 mr-auto">{title}</span>

            <form className="form-inline mr-5 d-none d-md-block">
                <div className="input-group input-group-sm">
                    <input type="search" className="form-control search-content" placeholder="Search..."/>

                    <div className="input-group-append">
                        <button type="submit" className="btn input-group-text">
                            <FontAwesomeIcon icon="search" />
                        </button>  
                    </div>
                </div>
            </form>

            <Dropdown>
                <Dropdown.Toggle variant="secondary" bsPrefix="d-none"><FontAwesomeIcon icon="user-alt" /> <span className="d-none d-sm-inline-block">{user.email}</span></Dropdown.Toggle>

                <Dropdown.Toggle as="a" bsPrefix="profile" id="profileDropdown" title="Profile" data-toggle="tooltip" data-placement="bottom">
                    <FontAwesomeIcon icon="user-alt" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Link to="/about" className="dropdown-item"><FontAwesomeIcon icon="desktop" /> About</Link>

                    <Link to="/documentation" className="dropdown-item"><FontAwesomeIcon icon="book" /> Documentation</Link>

                    <Link to="/settings" className="dropdown-item"><FontAwesomeIcon icon="cog" /> Settings</Link>
                    
                    <Dropdown.Item as="button" onClick={signOut}><FontAwesomeIcon icon="power-off" /> Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </nav>  
    )

}

Header.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
}

export default Header
