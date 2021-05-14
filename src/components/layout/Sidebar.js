import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Search from './Search'
import CloseSidebar from './CloseSidebar'
import SidebarFooter from './SidebarFooter'
import { menu_items } from '../../config'
import { app } from '../../config'
import Nav from './Nav'

const Sidebar = ({ toggleSidebar, hover }) => (
    <nav id="sidebar" className="sidebar-wrapper" onMouseEnter={hover} onMouseLeave={hover}>
        <div className="sidebar-content">
            <div className="sidebar-item sidebar-brand">
                <Link to="/">{app.name}</Link>
                <CloseSidebar hide={toggleSidebar} />
            </div>

            <Search />

            <div className="sidebar-item sidebar-menu">
                <Nav data={menu_items} />
            </div>
        </div>

        <SidebarFooter />
    </nav>
)

Sidebar.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
    hover: PropTypes.func.isRequired,
}

export default Sidebar
