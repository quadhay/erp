import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Search from './Search'
import CloseSidebar from './CloseSidebar'
import SidebarMenu from '../../containers/layout/Menu'
import SidebarFooter from './SidebarFooter'
import { sidebar as list } from '../../config'

const Sidebar = ({ toggleSidebar, hoverEvent }) => {

    return (
        <nav id="sidebar" className="sidebar-wrapper" onMouseEnter={hoverEvent} onMouseLeave={hoverEvent}>
            <div className="sidebar-content">
                <div className="sidebar-item sidebar-brand">
                    <Link to="/">guard inventory</Link>
                    <CloseSidebar hide={toggleSidebar} />
                </div>
                <Search />
                <SidebarMenu list={list} />
            </div>

            <SidebarFooter />
        </nav>
    )

}

Sidebar.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
    hoverEvent: PropTypes.func.isRequired,
}

export default Sidebar
