import { UI_Helpers as helper } from '../helpers'
import { UI_Constants } from '../constants'
import { isBrowser } from 'react-device-detect'

const initialState = {
    fontSize: '100%',
    pageTitle: '',
    sidebarVisible: isBrowser,
    pinSidebar: false,
    sidebarMouseEnter: false,
    contentBox: false
}

const { CHANGE_FONTSIZE, PAGE_TITLE, TOGGLE_SIDEBAR, SIDEBAR_HOVER, TOGGLE_PIN_SIDEBAR } = UI_Constants

const UI = ( state = {...initialState, ...helper.persistentState()}, action ) => {
    switch (action.type) {

        case CHANGE_FONTSIZE:
            return { ...state, ...{ fontSize: action.size } }

        case PAGE_TITLE:
            return { ...state, ...{ pageTitle: action.title } }

        case TOGGLE_SIDEBAR:
            return { ...state, ...{ sidebarVisible: !state.sidebarVisible } }

        case SIDEBAR_HOVER:
            return { ...state, ...{ sidebarMouseEnter: !state.sidebarMouseEnter } }

        case TOGGLE_PIN_SIDEBAR:
            return { ...state, ...{ pinSidebar: !state.pinSidebar } }

        default:
            return state

    }
}

export default UI
