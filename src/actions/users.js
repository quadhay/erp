import { userConstants } from '../constants'

const { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, GETALL_REQUEST, GETALL_SUCCESS, GETALL_FAILURE, DELETE_REQUEST, DELETE_SUCCESS, DELETE_FAILURE } = userConstants

const loginRequest = email => ({ type: LOGIN_REQUEST, email })

const loginSuccess = user => ({ type: LOGIN_SUCCESS, user })

const loginFailure = () => ({ type: LOGIN_FAILURE })

const logout = () => ({ type: LOGOUT })

const registerRequest = user => ({ type: REGISTER_REQUEST, user })

const registerSuccess = user => ({ type: REGISTER_SUCCESS, user })

const registerFailure = error => ({ type: REGISTER_FAILURE, error })

const getAllRequest = () => ({ type: GETALL_REQUEST })

const getAllSuccess = users => ({ type: GETALL_SUCCESS, users })

const getAllFailure = error => ({ type: GETALL_FAILURE, error })

const deleteRequest = id => ({ type: DELETE_REQUEST, id })

const deleteSuccess = id => ({ type: DELETE_SUCCESS, id })

const deleteFailure = (id, error) => ({ type: DELETE_FAILURE, id, error })

export const userActions = {
    loginRequest,
    loginSuccess,
    loginFailure,
    logout,
    registerRequest,
    registerSuccess,
    registerFailure,
    getAllRequest,
    getAllSuccess,
    getAllFailure,
    deleteRequest,
    deleteSuccess,
    deleteFailure,     
}
