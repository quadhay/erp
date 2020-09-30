import { getStorage } from '../helpers'

const persistentState = () => {
	try {
		const settings = getStorage('state').settings
		return { 
            sidebarVisible: settings.sidebar,
            pinSidebar: settings.pinSidebar
        }
	} catch (err) {
		return {}
	}
}

export {
    persistentState
}
