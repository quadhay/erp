import { connect } from 'react-redux'
import { userService } from '../_services'
import { userActions, alertActions } from '../_actions'
import { register } from '~components/register'

const mapDispatch = dispatch => ({
    register: ( input ) => {
        dispatch(userActions.registerRequest(input))
        
        userService
            .register(input)
                .then(
                    response => { 
                        dispatch(userActions.registerSuccess(input))
                        // May I will push to login page...
                        dispatch(alertActions.success(response.data.success))
                    },
                    error => {
                        dispatch(userActions.registerFailure(error.toString()))
                        dispatch(alertActions.error(error.toString()))
                    }
                )

        event.preventDefault()
    }
})

export default connect( null, mapDispatch )(register)
