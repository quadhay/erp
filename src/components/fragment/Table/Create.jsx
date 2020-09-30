import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { MobileAddBtn } from '../MobileAddBtn'

export const Create = ({to = '/', isMobile = false}) => {
    if (isMobile) return <MobileAddBtn to={to} />
    
    return (
        <Link to={to} className="btn btn-sm anchor mr-2">
            <FontAwesomeIcon icon="plus" /> Create
        </Link>
    )
}

Create.propTypes = { 
    to: PropTypes.string,
    isMobile: PropTypes.bool
}
