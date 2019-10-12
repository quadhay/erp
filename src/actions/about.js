import { aboutConstants } from '../constants'

const { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } = aboutConstants

const fetchRequest = () => ({ type: FETCH_REQUEST })

const fetchSuccess = data => ({ type: FETCH_SUCCESS, data })

const fetchFailure = error => ({ type: FETCH_FAILURE, error })

export const aboutActions = {
    fetchRequest,
    fetchSuccess,
    fetchFailure,     
}
