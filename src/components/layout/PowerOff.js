import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PowerOff = ({ signOut }) => (
    <div>
        <i onClick={signOut} className="icon text-danger">
            <FontAwesomeIcon icon="power-off" />
        </i>
    </div>
)

PowerOff.propTypes = {
    signOut: PropTypes.func.isRequired,   
}

export default PowerOff
