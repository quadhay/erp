import React, { Component } from 'react'
import Error from './Error'

export default class ErrorBoundary extends Component {

	state = { hasError: false }


	componentDidCatch ( error, info ) {
		this.setState({ hasError: true })
		//logErrorToMyService(error, info)
	}

	render() {
		// You can render any custom fallback UI
		return (this.state.hasError) ? <Error /> : this.props.children
	}

}
