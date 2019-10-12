import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const closeSidebar = ({ hide }) => (
    <div id="close-sidebar" onClick={hide}>
        <i><FontAwesomeIcon icon="times" /></i>
    </div>    
)

closeSidebar.propTypes = {
    hide: PropTypes.func.isRequired,    
}

export default closeSidebar
