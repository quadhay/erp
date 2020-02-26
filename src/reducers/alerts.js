import { alertConstants } from '../constants'

export function alert (state = {}, action) {
	switch (action.type) {
		case alertConstants.SUCCESS:
			return { type: 'alert-success', typeAlias: 'success', message: action.message }
		
		case alertConstants.ERROR:
			return { type: 'alert-danger', typeAlias: 'error', message: action.message }

		case alertConstants.INFO:
			return { type: 'alert-info', typeAlias: 'info', message: action.message }		
			
		case alertConstants.CLEAR:
			return {}
		
		default:
			return state
	}
}