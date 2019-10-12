import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import List from './Nav'

const Menu = ({ list, activeItem, activateMe, expandedItem, expandedItemParent, toggleSubMenu, location }) => (
    <div className="sidebar-item sidebar-menu">
        <ul>
            <List
                data={list}
                activeItem={activeItem}
                activateMe={activateMe}  
                expandedItem={expandedItem}
                expandedItemParent={expandedItemParent}       
                toggleSubMenu={toggleSubMenu}  
                location={location}         
            />
        </ul>
    </div>    
)

Menu.propTypes = {
    list: PropTypes.array.isRequired,
    activeItem: PropTypes.any,
    activateMe: PropTypes.func.isRequired,
    expandedItem: PropTypes.any,
    expandedItemParent: PropTypes.any,
    toggleSubMenu: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,  
}

export default withRouter(Menu)
