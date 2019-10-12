import { getStorage } from '../helpers'
import { sidebar as list } from '../config'

const persistentState = () => {
    let expandId = null,
    activeId = null,
    path = `/${window.location.pathname.split('/')[1]}`

    for ( let item of list )
        if ( item.children )
            for ( let child of item.children )
                if ( child.path === path ) {
                    expandId = item.id
                    activeId = child.id
                }

	try {
		const settings = getStorage('state').settings
		return { 
            sidebarVisible: settings.sidebar,
            pinSidebar: settings.pinSidebar,
            expandedItem: expandId,
            activeItem: activeId
        }
	} catch (err) {
		return {}
	}
}

export {
    persistentState
}