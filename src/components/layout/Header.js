import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { NavDropdown, Dropdown, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ toggleSidebar, user, signOut }) => {

    return (
        <nav className="main-header navbar navbar-expand ">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <span className="nav-link" data-widget="pushmenu" onClick={toggleSidebar}>
                        <FontAwesomeIcon icon="bars" />
                    </span>
                </li>      
            </ul>

            <form className="form-inline mr-5">
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
                    <Dropdown.Item to="/documentation"><FontAwesomeIcon icon="book" /> Documentation</Dropdown.Item>
                    <Dropdown.Item to="/settings"><FontAwesomeIcon icon="cog" /> Settings</Dropdown.Item>
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
