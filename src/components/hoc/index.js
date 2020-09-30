/**
 * Higher Order Components (HOCs)
 * 
 * A higher-order component is an advanced technique in React for
 * resusing component logic.
 * 
 * Specifically, a hoc is a function that takes a component and returns
 * a new component. Whereas a component transforms props into UI, a hoc
 * tranforms a component into another component.
 */

import withDevice from './withDevice'
import withTitle from './withTitle'

export {
	withTitle,
	withDevice,
}