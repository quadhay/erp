import { getStorage } from '../helpers'
import { UI_Constants as UI } from '../constants'

const changeFontSize = size => ({ type: UI.CHANGE_FONTSIZE, size })

const setPageTitle = title => ({ type: UI.PAGE_TITLE, title })

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
	changeFontSize,
	setPageTitle,
    toggleSidebar,
    togglePinSidebar,
    sidebarHover,
    SidebarConfig
}