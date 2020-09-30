import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import NavItem from './NavItem' 
import { withRouter } from 'react-router-dom'

const Nav = ({ data, location }) => {
    const [ activeItem, setActiveItem ] = useState(null)
    const [ expandedItem, setExpandedItem ] = useState(null)
    // setState({ ...state, ...{activeItem: id} })
    // setState({ ...state, ...{expandedItem: state.expandedItem === id ? null : id} })
    const activateMe = id => setActiveItem(id)
    const toggleSubMenu = id => setExpandedItem(expandedItem === id ? null : id)

    useEffect( () => {
        for ( let res of data ) {
            if (res.children) {
                if ( res.children.find( item => item.path === location.pathname ) ) {
                    toggleSubMenu(res.id)
                }
            } else {
                if ( res.path === location.pathname ) {
                    activateMe(res.id)
                }
            }
        }
    }, [] )
    
    if ( data.length < 1 ) return null

    return <ul>
        {data.map( item =>
            <NavItem
                key={item.id}
                activateMe={activateMe}
                subMenuVisible={expandedItem === item.id}
                expandedItem={expandedItem}
                toggleSubMenu={toggleSubMenu}
                activeItem={activeItem}
                {...item}
            />            
        )}
    </ul>
}

Nav.propTypes = { data: PropTypes.array.isRequired, location: PropTypes.object.isRequired, }

export default withRouter(Nav)
