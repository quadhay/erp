import { aboutConstants } from '../constants'

export function about ( state = {}, action ) {
    switch (action.type) {
        case aboutConstants.FETCH_REQUEST:
            return { loading: true }

        case aboutConstants.FETCH_SUCCESS:
            return { data: action.data }

        case aboutConstants.FETCH_FAILURE:
            return { error: action.error }

        default:
            return state
      }
}
