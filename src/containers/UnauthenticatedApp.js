import { connect } from 'react-redux'
import { userService } from '../services'
import { userActions, alertActions } from '../actions'
import UnauthenticatedApp from '../components/UnauthenticatedApp'
import storeAPI from 'store'

const real = false
const fakeData = {
    id: 1,
    name: 'marin63',
    email: 'quadhay@gmail.com',
    token: 'PgGH12wUZP9DqLoQ582Nh7rTODMH5T4F'
}

const mapDispatch = dispatch => ({
    signIn: ( user, password, event ) => {
        dispatch(userActions.loginRequest(user))

        if (real) {
            userService
                .login(user, password)
                    .then(
                        response => { 
                            dispatch(userActions.loginSuccess(response.data.success))
                        },
                        error => {
                            dispatch(userActions.loginFailure(error))
                            dispatch(alertActions.error(error))
                        }
                    )
        } else {
            storeAPI.set('user', fakeData)
            dispatch(userActions.loginSuccess(fakeData))
        }

        event.preventDefault()
    }
})

export default connect( null, mapDispatch )(UnauthenticatedApp)
