import React from 'react'
import startCase from 'lodash/startCase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { Select } from '../../fragment/form-elements'

export const DisplayFilter = ({ data, displayedFilters, qFilters, filterHandler, removeFilter, columns }) => {
    return displayedFilters.map( f => (
        <div key={f} className="d-flex align-items-center ml-3">
            <span className="mr-2" onClick={() => removeFilter(f)}><FontAwesomeIcon icon="times" /></span>
            <Select
                key={f}
                name={f}
                label={startCase(columns.find(item => item.name === f).label)}
                value={qFilters[f]}
                values={[...new Set(data.map(item => item[f.toLowerCase()]))]}
                handleChange={(e, filter) => filterHandler(filter, e.target.value)}
            />
        </div>
    ) )  
}

DisplayFilter.propTypes = { 
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    displayedFilters: PropTypes.array.isRequired,
    qFilters: PropTypes.object.isRequired,
    filterHandler: PropTypes.func.isRequired,
    removeFilter: PropTypes.func.isRequired
}
