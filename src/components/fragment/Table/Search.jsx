import React from 'react'
import PropTypes from 'prop-types'

export const Search = ({filters, _push}) => {
    const searchHandler = e => {
        let q = e.target.value

        if (q) {
            _push({ filter: JSON.stringify({ ...filters, ...{q} }) })
        } else {
            delete filters.q
            _push({ filter: JSON.stringify(filters) })
        }
    }

    return (
        <div className="_search">
            <input type="search" className="form-control form-control-sm" placeholder="Search" defaultValue={filters.q} onInput={searchHandler} />
        </div>        
    )
}

Search.propTypes = { 
    filters: PropTypes.object.isRequired,
    _push: PropTypes.func.isRequired
}
