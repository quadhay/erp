import React from 'react'
import startCase from 'lodash/startCase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dropdown, ButtonGroup } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const AddFilter = ({ columns, displayedFilters, setDisplayedFilters, filterHandler }) => {
    const handler = filter => {
        setDisplayedFilters(displayedFilters.concat(filter))
        filterHandler(filter)
    }
    
    const filterableColumns = columns.filter( item => item.options.filterable )

    if ( filterableColumns.every( field => displayedFilters.includes(field.name) ) ) return null

    return (
        <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle as="a" id="filter-dropdown" bsPrefix="btn btn-sm anchor mr-2">
                <FontAwesomeIcon icon="filter" /><span className="d-none d-sm-inline-block ml-1">Add Filter</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    filterableColumns.map( ({label, name}, i) => displayedFilters.includes(name) ? null : (
                        <Dropdown.Item as="button" key={i}onClick={ () => handler(name) }>
                            {startCase(label)}
                        </Dropdown.Item>                          
                    ) )
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}

AddFilter.propTypes = { 
    columns: PropTypes.array,
    displayedFilters: PropTypes.array.isRequired,
    setDisplayedFilters: PropTypes.func.isRequired,
    filterHandler: PropTypes.func.isRequired
}
