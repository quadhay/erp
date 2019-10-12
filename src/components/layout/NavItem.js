import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from './Nav'
import classNames from 'classnames'

const NavItem = ({ id, path, icon, label, badge, children, hasSubMenu, subMenuVisible, ...props }) => {

    if ( props.header ) {
        return (
            <li className="header-menu">
                <span>{label}</span>
            </li>
        )
    } else {
        const iconEl = props.isChild && !hasSubMenu ? <FontAwesomeIcon icon={icon} /> : <i><FontAwesomeIcon icon={icon} /></i>,
              labelEl = props.isChild && !hasSubMenu ? label : <span className="menu-text">{label}</span>,
              badgeEl = badge ? <span className={"badge badge-pill " + badge.bgColor}>{badge.text}</span> : null

        if ( hasSubMenu ) {
            children.map( child => child.isChild = true )
            
            return (
                <li className={classNames('sidebar-dropdown', { expand: subMenuVisible })}>
                    <Link to={path} onClick={ event => props.toggleSubMenu(id, props.parentID, event) }>    
                        {iconEl}
                        {labelEl}
                        {badgeEl}
                        <FontAwesomeIcon icon="angle-right" />
                    </Link>

                    <div className={"sidebar-submenu " + (subMenuVisible ? 'expanded' : 'collapsed')}>
                        <ul>
                            <Nav
                                data={children}
                                parentID={id}
                                activateMe={props.activateMe}
                                activeItem={props.activeItem}
                                toggleSubMenu={props.toggleSubMenu}
                                expandedItem={props.expandedItem}
                                expandedItemParent={props.expandedItemParent}
                                location={props.location}
                            />
                        </ul>
                    </div>
                </li>
            )                
        } else {
            return (
                <li>
                    <NavLink to={path} onClick={() => {
                        //props.toggleSubMenu(null, props.parentID)
                        props.activateMe(id)
                    }}>    
                        {iconEl}
                        {labelEl}
                        {badgeEl}
                    </NavLink>
                </li>
            )
        }       
    }

}

NavItem.defaultProps = {
    path: '/',
    icon: ['far', 'circle'],
    toggleSubMenu: null,
}

NavItem.propTypes = {
    id: PropTypes.number.isRequired,
    path: PropTypes.string,
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    label: PropTypes.string.isRequired,
    badge: PropTypes.exact({
        bgColor: PropTypes.string,
        text: PropTypes.any
    }),
    header: PropTypes.bool,
    children: PropTypes.array,
    activeItem: PropTypes.any,
    activateMe: PropTypes.func.isRequired,
    toggleSubMenu: PropTypes.func,
    location: PropTypes.object.isRequired,
}

export default NavItem
