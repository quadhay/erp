import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { UI_Actions } from '../../actions'

export const useTitle = (title, docTitle = false) => {
	const dispatch = useDispatch()
	
	useEffect( () => {
		dispatch(UI_Actions.setPageTitle(title))

		if (docTitle) {
			document.title = `${title} - ${document.title}`
		}
    }, [dispatch, title, docTitle] )
}
