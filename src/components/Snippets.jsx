import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, name, className, id, placeholder, value, onchange, required }) => (
    <input type={type} name={name} className={className} id={id} placeholder={placeholder} value={value} onChange={onchange} required={required} />
)

Input.defaultProps = {
    value: null,
    required: false,
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.any,
    className: PropTypes.string,
    id: PropTypes.any,
    placeholder: PropTypes.any,
    value: PropTypes.any,
    onchange: PropTypes.func.isRequired,
    required: PropTypes.bolean,
}

export default { Input }
// let merged = {...obj1, ...obj2};