import React from 'react'
import PropTypes from 'prop-types'

import 'react-datepicker/dist/react-datepicker.css'

const ProcessError = ({ errors }) => {
    let err = []
    try {
        Object.entries(errors).forEach( ([key, value]) => value.map( value => err.push(value) ) )
    } catch (error) {
        err.push('Oops, something went wrong')
    }

    return (
        <ul>
            { err.map( (error, i) => <li key={i}>{error}</li> ) }
        </ul>
    )
} 

ProcessError.propTypes = { errors: PropTypes.any.isRequired }

export default ProcessError
