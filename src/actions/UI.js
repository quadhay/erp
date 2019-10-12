import { getStorage } from '../helpers'
import { UI_Constants as UI } from '../constants'

const activateMe = id => ({ type: UI.LINK_CLICK, id })

const toggleSubMenu = ( id, parentID ) => ({ type: UI.TOGGLE_SUBMENU, id, parentID })

const changeFontSize = size => ({ type: UI.CHANGE_FONTSIZE, size })

const toggleSidebar = () => ({ type: UI.TOGGLE_SIDEBAR })

const togglePinSidebar = () => ({ type: UI.TOGGLE_PIN_SIDEBAR })

const sidebarHover = () => ({ type: UI.SIDEBAR_HOVER })

const SidebarConfig = () => {
	try {
		const settings = getStorage('state').settings
		return { sidebarVisible: settings.sidebar, pinSidebar: settings.pinSidebar }
	} catch (err) {
		return {}
	}
}

export const UI_Actions = {
    activateMe,
    toggleSubMenu,
    changeFontSize,
    toggleSidebar,
    togglePinSidebar,
    sidebarHover,
    SidebarConfig
}