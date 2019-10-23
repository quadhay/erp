import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Dropdown, Button, ButtonGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../images/logo_white.png'

const AdminNavbar = ({ location }) => {
    const path = location.pathname.split('/')[2]
    
    return (
        <Navbar expand="md" variant="dark" bg="dark" fixed="top">
            <NavLink to="/dashboard" className="navbar-brand">
                <img src={logo} alt="BEL" width="70" />
            </NavLink>
            
            <Navbar.Toggle aria-controls="admin-navbar" />

            <Navbar.Collapse id="admin-navbar">
                <Nav className="mr-auto">
                    <NavLink to="/dashboard/vehicles" className="nav-link">Vehicles</NavLink>

                    <NavLink to="/dashboard/survey" className="nav-link">Survey</NavLink>
                    
                    <NavDropdown title="After Sales" className={path === 'aftersales' ? 'active' : null} id="admin-nav-dropdown">
                        <NavLink to="/dashboard/aftersales/motorcycle" className="dropdown-item">Motorcycles</NavLink>
                        <NavLink to="/dashboard/aftersales/obm" className="dropdown-item">Outboard Engines</NavLink>
                        <NavDropdown.Divider />
                        <NavLink to="/dashboard/aftersales/mechanics" className="dropdown-item">Mechanics</NavLink>
                        <NavLink to="/dashboard/aftersales/dealers" className="dropdown-item">Dealers</NavLink>
                    </NavDropdown>
                </Nav>

                <div className="my-1">
                    <Dropdown as={ButtonGroup}>
                        <Button variant="secondary"><i><FontAwesomeIcon icon="user" /></i> g.jacob@boulos.ng</Button>

                        <Dropdown.Toggle split variant="secondary" id="admin-dropdown-split" />

                        <Dropdown.Menu>
                            <NavLink to="/dashboard/logout" className="dropdown-item">Logout</NavLink>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Navbar.Collapse>
        </Navbar> 
    )

}

export default AdminNavbar
