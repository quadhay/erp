import { connect } from 'react-redux'
import { userService } from '../_services'
import { userActions, alertActions } from '../_actions'
import { users } from '~components/users'

const mapDispatch = dispatch => ({
    retrieve: () => {
        dispatch(userActions.getAllRequest())
        
        userService.getAll()
            .then(
                response => dispatch(userActions.getAllSuccess(response.data.success)),
                error => dispatch(userActions.getAllFailure(error.toString()))
            )
    },

    delete: id => {
        dispatch(userActions.deleteRequest(id))
        
        userService.delete(id)
            .then(
                () => dispatch(userActions.deleteSuccess(id)),
                error => dispatch(userActions.deleteFailure(id, error.toString()))
            )
    }
})

export default connect( null, mapDispatch )(users)
