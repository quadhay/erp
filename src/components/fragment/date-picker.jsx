import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

export const DateTime = ({ name, label, value, required, handleChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <DatePicker name={name} className="form-control" autoComplete="off" id={name} selected={value} onChange={handleChange} maxDate={new Date()} showTimeSelect />
        </div>        
    )
} 

DateTime.defaultProps = { value: null, required: false }
DateTime.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.object,
    required: PropTypes.bool,
    handleChange: PropTypes.func.isRequired
}
