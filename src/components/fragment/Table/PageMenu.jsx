import React from 'react'
import PropTypes from 'prop-types'

export const PageMenu = ({ perPage, rowsPerPageOptions, _push }) => (
    <>
        <label>Rows per page:</label>

        <select
            className="border-0 mr-4 pl-1 font-weight-bold"
            value={perPage}
            onChange={e => _push({
                page: 1,
                perPage: e.currentTarget.value
            })}
        >
            {rowsPerPageOptions.map( (len, i) => <option key={i} value={len}>{len}</option> )}
        </select>
    </>
)

PageMenu.propTypes = {
    perPage: PropTypes.number.isRequired,
    rowsPerPageOptions: PropTypes.array.isRequired,
    _push: PropTypes.func.isRequired
}
