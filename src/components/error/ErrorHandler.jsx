import React, { Component } from 'react'
import Error from './Error'

export default class ErrorHandler extends Component {

	constructor(props) {
		super(props)
		this.state = { errorOccurred: false }
	}

	componentDidCatch(error, info) {
		this.setState({ errorOccurred: true })
		// logErrorToMyService(error, info)
	}

	render() {
		return this.state.errorOccurred ? <Error /> : this.props.children
	}

}