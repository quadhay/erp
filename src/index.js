import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import store from './store'
import * as serviceWorker from './serviceWorker'
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
import App from './components/app'
import axios from 'axios'
import { app } from './config'

import './sass/app.scss'

loadProgressBar()

axios.defaults.baseURL = app.apiUrl
axios.interceptors.request.use( (config) => config, (error) => Promise.reject(error) )

axios.interceptors.response.use( (response) => {
    return response
}, (error) => {
	return Promise.reject(error)
} )

const EVENTS_TO_MODIFY = ['touchstart', 'touchmove', 'touchend', 'touchcancel', 'wheel']

const originalAddEventListener = document.addEventListener.bind()
document.addEventListener = (type, listener, options, wantsUntrusted) => {
	let modOptions = options
	if (EVENTS_TO_MODIFY.includes(type)) {
		if (typeof options === 'boolean') {
			modOptions = {
				capture: options,
				passive: false,
			}
		} else if (typeof options === 'object') {
			modOptions = {
				passive: false,
				...options,
			}
		}
	}

	return originalAddEventListener(type, listener, modOptions, wantsUntrusted)
}

const originalRemoveEventListener = document.removeEventListener.bind()
document.removeEventListener = (type, listener, options) => {
	let modOptions = options
	if (EVENTS_TO_MODIFY.includes(type)) {
		if (typeof options === 'boolean') {
			modOptions = {
				capture: options,
				passive: false,
			}
		} else if (typeof options === 'object') {
			modOptions = {
				passive: false,
				...options,
			}
		}
	}
	return originalRemoveEventListener(type, listener, modOptions)
}

const options = {
	position: positions.BOTTOM_CENTER,
	timeout: 5000,
	offset: '5px', // margin of alert
	transition: transitions.SCALE
	//template: AlertTemplate --- Commentted since we're setting it independently on the component
}

const DOM = document.getElementById('root')
if (DOM) {
    ReactDOM.render(
    	<Provider store={store}>
			<AlertProvider template={AlertTemplate} {...options}>
				<App />
			</AlertProvider>
    	</Provider>,
    	DOM
	)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
