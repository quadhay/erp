import { combineReducers } from 'redux'
import app from './app'
import settings from './settings'
import sidebar from './sidebar'
import menu from './menu'
import content from './content'

export default combineReducers({
	app,
	settings,
	sidebar,
	menu,
	content
})
