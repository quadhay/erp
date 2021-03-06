import { userConstants } from '../constants'

let user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? { loggedIn: true, user } : { loggedIn: false, user: {} }

const authentication = ( state = initialState, action ) => {
	switch (action.type) {
		case userConstants.LOGIN_REQUEST:
            return { loggingIn: true, user: { ...state.user, ...{ email: action.email } } }
            
		case userConstants.LOGIN_SUCCESS:
            return { loggedIn: true, user: action.user }
            
		case userConstants.LOGIN_FAILURE:
            return { loggedIn: false, user: {} }
            
		case userConstants.LOGOUT:
            return { loggedIn: false, user: {} }
            
		default:
			return state
	}
}

export default authentication
