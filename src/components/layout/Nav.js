import React from 'react'
import PropTypes from 'prop-types'
import NavItem from './NavItem' 

const Nav = ({ data, activeItem, activateMe, expandedItem, expandedItemParent, toggleSubMenu, parentID, location }) => {

    return data.length > 0 ? data.map(
        ({ id, path, icon, label, badge, children, isChild, header }) =>
            <NavItem
                key={id}
                id={id}
                header={header}
                label={label}
                path={path}
                icon={icon}
                badge={badge}
                children={children}
                isChild={isChild}
                active={path === location.pathname}
                activateMe={activateMe}
                hasSubMenu={children !== undefined}
                subMenuVisible={expandedItem === id || expandedItemParent === id}
                expandedItem={expandedItem}
                expandedItemParent={expandedItemParent}
                toggleSubMenu={toggleSubMenu}
                activeItem={activeItem}
                parentID={parentID}
                location={location}
            />
    ) : null

}

Nav.defaultProps = {
    parentID: null,
}

Nav.propTypes = {
    data: PropTypes.array.isRequired,
    parentID: PropTypes.any,
    activeItem: PropTypes.any,
    activateMe: PropTypes.func.isRequired,
    expandedItem: PropTypes.any,
    expandedItemParent: PropTypes.any,
    toggleSubMenu: PropTypes.func,
    location: PropTypes.object.isRequired, 
}

export default Nav
