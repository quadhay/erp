import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from './Nav'
import classNames from 'classnames'

const NavItem = ({ id, path, icon, label, badge, children, subMenuVisible, isChild, ...props }) => {
    if ( props.header ) {
        return (
            <li className="header-menu">
                <span>{label}</span>
            </li>
        )
    } else {
        const iconEl = isChild ? <FontAwesomeIcon icon={icon} /> : <i><FontAwesomeIcon icon={icon} /></i>
        const labelEl = isChild ? label : <span className="menu-text">{label}</span>
        const badgeEl = badge ? <span className={`badge badge-pill badge-${badge.bgColor}`}>{badge.text}</span> : null
              
        if ( children ) {
            children.map( child => child.isChild = true )

            return (
                <li className={classNames('sidebar-dropdown', { expand: subMenuVisible })}>
                    <Link to={path} onClick={ e => props.toggleSubMenu(id, e) }>  
                        {iconEl}
                        {labelEl}
                        {badgeEl}
                        <FontAwesomeIcon icon="angle-right" className="toggler" />
                    </Link>

                    <div className={"sidebar-submenu " + (subMenuVisible ? 'expanded' : 'collapsed')}>
                        <Nav data={children} />
                    </div>
                </li>
            )                
        } else {
            return (
                <li>
                    <Link to={path} className={classNames({ active: props.activeItem === id })} onClick={ () => props.activateMe(id) }>    
                        {iconEl}
                        {labelEl}
                        {badgeEl}
                    </Link>
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
}

export default NavItem
