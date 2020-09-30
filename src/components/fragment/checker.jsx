import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Checker = ({ circle = false, value = '', check = false, handleChange }) => (
    <span className="d-flex">
        <input type="checkbox" className={classNames('fancy-input ', { round: circle })} value={value} checked={check} onChange={handleChange} />
    </span>
)

Checker.propTypes = { check: PropTypes.bool, handleChange: PropTypes.func.isRequired }

export default Checker
