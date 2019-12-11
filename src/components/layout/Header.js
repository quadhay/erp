import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { NavDropdown, Dropdown, Button, ButtonGroup } from 'react-bootstrap'
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

                <li className="nav-item d-none d-md-inline-block">
                    <NavLink to="/purchase_orders" className="nav-link">Purchase</NavLink>
                </li>

                <li className="nav-item d-none d-md-inline-block">
                    <NavLink to="/sales_orders" className="nav-link">Sales</NavLink>
                </li>

                <NavDropdown title="Stock" className="d-none d-md-inline-block" id="app-nav-dropdown">
                    <NavLink to="/stock_receive" className="dropdown-item">Item Receive</NavLink>
                    <NavLink to="/stock_transfer" className="dropdown-item">Stock Transfer</NavLink>
                    <NavDropdown.Divider />
                    <NavLink to="/stock" className="dropdown-item">Current Stock</NavLink>
                    <NavLink to="/stock_adjustment" className="dropdown-item">Stock Adjustment</NavLink>
                </NavDropdown>             
            </ul>

            <form className="form-inline mr-3">
                <div className="input-group input-group-sm">
                    <input type="search" className="form-control search-content" placeholder="Search..."/>

                    <div className="input-group-append">
                        <button type="submit" className="btn input-group-text">
                            <FontAwesomeIcon icon="search" />
                        </button>  
                    </div>
                </div>
            </form>

            <Dropdown as={ButtonGroup}>
                <Button variant="secondary"><FontAwesomeIcon icon="user-alt" /> <span className="d-none d-sm-inline-block">{user.email}</span></Button>

                <Dropdown.Toggle split variant="secondary" id="app-dropdown-split" />

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
