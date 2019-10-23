
import { settingConstants } from '../constants'

const initialState = {
	fontSize: '100%',
    sidebar: true,
	pinSidebar: false,
	mainHeader: true,
	rightPanel: false,
	theme: 'default-theme',
	sidebarBgImg: 'bg1',
	sidebarBg: true,
    borderRadius: false	
}

const settings = ( state = initialState, action ) => {
    switch (action.type) {
		case settingConstants.FONT_SIZE:
			return { ...state, ...{ fontSize: action.size } }
		case settingConstants.SIDEBAR:
			return { ...state, ...{ sidebar: !state.sidebar } }	
		case settingConstants.PIN_SIDEBAR:
			return { ...state, ...{ pinSidebar: !state.pinSidebar } }
		case settingConstants.MAIN_HEADER:
			return { ...state, ...{ mainHeader: !state.mainHeader } }
		case settingConstants.RIGHT_PANEL:
			return { ...state, ...{ rightPanel: !state.rightPanel } }		
		case settingConstants.THEME:
			return { ...state, ...{ theme: action.theme } }
		case settingConstants.SIDEBAR_BG_IMG:
			return { ...state, ...{ sidebarBgImg: action.img } }
		case settingConstants.SIDEBAR_BG_IMG_VISIBILITY:
			return { ...state, ...{ sidebarBg: !state.sidebarBg } }
		case settingConstants.BORDER_RADIUS:
			return { ...state, ...{ borderRadius: !state.borderRadius } }
        default:
            return state
    }
}

export default settings
