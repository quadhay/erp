import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const showSidebar = ({ show }) => (
    <span id="show-sidebar" className="btn btn-sm btn-dark" onClick={show}>
        <i><FontAwesomeIcon icon="bars" /></i>
    </span>    
)

showSidebar.propTypes = {
    show: PropTypes.func.isRequired,    
}

export default showSidebar
