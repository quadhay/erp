import React from 'react'
import PropTypes from 'prop-types'

const customSwitch = ({ label, check, event }) => (
    <div className="form-group col-md-12">
        <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id={label} checked={check} onChange={event} />
            <label className="custom-control-label" htmlFor={label}>{label}</label>
        </div>
    </div>
)

customSwitch.defaultProps = {
	check: false,
}

customSwitch.propTypes = {
    label: PropTypes.string.isRequired,
    check: PropTypes.bool,
    event: PropTypes.func.isRequired,
}

export default customSwitch
