import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

export const CheckNotice = ({ checked, setSelected }) => (
    <div className={classNames('check-notice toolbar d-flex align-items-center justify-content-between position-absolute px-4 w-100', {show: checked.length})}>
        <div className="d-flex align-items-center">
            <i className="text-secondary mr-3 pointer" onClick={() => setSelected([])}><FontAwesomeIcon icon="times" /></i>
            <label className="font-weight-bold">{checked.length} item{checked.length > 1 ? 's' : null} selected</label>
        </div>

        <button className="btn btn-sm text-danger" onClick={ () => console.log('non') }><FontAwesomeIcon icon="trash" /> DELETE</button>
    </div>
)

CheckNotice.propTypes = {
    checked: PropTypes.array.isRequired,
    setSelected: PropTypes.func.isRequired
}
