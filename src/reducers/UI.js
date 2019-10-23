import { UI_Helpers as helper } from '../helpers'
import { UI_Constants } from '../constants'

const initialState = {
    fontSize: '100%',
    sidebarVisible: true,
    pinSidebar: false,
    sidebarMouseEnter: false,
    expandedItem: null,
    expandedItemParent: null,
    activeItem: null,
    contentBox: true
}

const { CHANGE_FONTSIZE, LINK_CLICK, TOGGLE_SUBMENU, TOGGLE_SIDEBAR, SIDEBAR_HOVER, TOGGLE_PIN_SIDEBAR } = UI_Constants

const UI = ( state = {...initialState, ...helper.persistentState()}, action ) => {
    switch (action.type) {

        case CHANGE_FONTSIZE:
            return { ...state, ...{ fontSize: action.size } }

        case TOGGLE_SIDEBAR:
            return { ...state, ...{ sidebarVisible: !state.sidebarVisible } }

        case SIDEBAR_HOVER:
            return { ...state, ...{ sidebarMouseEnter: !state.sidebarMouseEnter } }

        case TOGGLE_PIN_SIDEBAR:
            return { ...state, ...{ pinSidebar: !state.pinSidebar } }

        case LINK_CLICK:
            return { ...state, ...{ activeItem: action.id } }

        case TOGGLE_SUBMENU:
            return {
                ...state,
                ...{
                    expandedItem: state.expandedItem === action.id || state.expandedItemParent === action.id ? '' : action.id,
                    expandedItemParent: state.expandedItemParent === action.id ? '' : action.parentID
                }
            }

        default:
            return state

    }
}

export default UI
