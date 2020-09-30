import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { userService } from '../../services'
import { userActions } from '../../actions'

const mapDispatch = dispatch => ({
    signOut: () => {
        userService.logout()
        dispatch(userActions.logout())
    }    
})

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

export default connect( null, mapDispatch )(PowerOff)
