import { combineReducers } from 'redux'
import { alert } from './alerts'
import settings from './settings'
import UI from './UI'
import authentication from './authentication'
import { registration } from './registration'
import { users } from './users'

export default combineReducers({
	alert,
	settings,
	UI,
	auth: authentication,
	registration,
	users
})
