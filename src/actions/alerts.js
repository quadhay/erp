import { alertConstants } from '../constants'

export const alertActions = {
    success: (message) => ({ type: alertConstants.SUCCESS, message }),
    error: (message) => ({ type: alertConstants.ERROR, message }),
    info: (message) => ({ type: alertConstants.INFO, message }),
    clear: () => ({ type: alertConstants.CLEAR })
}
