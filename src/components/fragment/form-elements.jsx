import React from 'react'
import PropTypes from 'prop-types'

export const Input = ({ name, type, label, placeholder, value, required, handleChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} className="form-control" autoComplete="off" placeholder={placeholder} id={name} value={value} onChange={handleChange} required={required} />
        </div>        
    )
} 

Input.defaultProps = { value: '', placeholder: '', required: false }
Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    required: PropTypes.bool,
    handleChange: PropTypes.func.isRequired
}

export const TextArea = ({ name, label, value, placeholder, required, handleChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <textarea name={name} className="form-control" rows="2" placeholder={placeholder} id={name} value={value} onChange={handleChange} required={required}></textarea>
        </div>       
    )
} 

TextArea.defaultProps = { value: '', placeholder: '', required: false }
TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    required: PropTypes.bool,
    handleChange: PropTypes.func.isRequired
}

export const Dropdown = ({ name, label, required, value, options, handleChange }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <select name={name} className="custom-select" id={name} value={value} onChange={handleChange} required={required}>
                <option value="">Choose</option>
                { options.map( ({id, name}) => <option key={id} value={id}>{name}</option> ) }
            </select>
        </div>      
    )
} 

Dropdown.defaultProps = { value: '', options: [], required: false }
Dropdown.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    required: PropTypes.bool,
    options: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired
}

export const Radio = ({ name, type, label, values, required, value, handleChange }) => {
    return (
        <div className="form-group radio">
            <label>{label}</label>

            <div className="d-flex mt-2">
                { values.map( ({ id, code }) => (
                    <div key={id} className="d-flex radio-wrap">
                        <label>{code}</label>
                        <input type={type} name={name} className="fancy-input round ml-2" id={name} value={id} onChange={handleChange} required={required} checked={id == value} />
                    </div>
                ) ) }
            </div>
        </div>     
    )
} 

Radio.defaultProps = { required: false }
Radio.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    values: PropTypes.array.isRequired,
    required: PropTypes.bool,
    handleChange: PropTypes.func.isRequired
}

export const Field = ({ field, value = '', handleChange }) => {
    field['handleChange'] = handleChange
    let res
    switch (field.type) {
        case "text":
        case "email":
        case "number":
            res = <Input value={value} {...field} />
            break

        case "textarea":
            res = <TextArea value={value} {...field} />
            break

        case "select":
            res = <Dropdown value={value} {...field} />
            break

        case "radio":
            res = <Radio value={value} {...field} /> 
            break

        default:
            res = null
    }

    return res
} 

Field.defaultProps = { handleChange: () => null }

Field.propTypes = {
    field: PropTypes.object.isRequired,
    handleChange: PropTypes.func
}

export const DataList = ({ name, values, handleChange }) => (
    <>
        <input list={name} className="form-control form-control-sm" placeholder={name} onChange={handleChange} />
        <datalist id={name}>
            { values.map( value => <option key={value} value={value}>{value}</option> ) }
        </datalist>
    </>     
)

DataList.propTypes = {
    name: PropTypes.string.isRequired,
    values: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired
}

export const Select = ({ name, label, value, values, handleChange }) => (
    <select name={name} className="custom-select custom-select-sm" id={name} value={value} onChange={e => handleChange(e, name)}>
        <option value="">{label}</option>
        { values.map( value => <option key={value} value={value}>{value}</option> ) }
    </select>      
)

Select.defaultProps = { value: '' }
Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    values: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired
}