import React from 'react'
import startCase from 'lodash/startCase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dropdown, ButtonGroup } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const Sorter = ({ columns, query, sortHandler }) => {
    const { order, sort } = query
    const orders = { asc: 'ascending', desc: 'descending' }
    const sorting = sort ? `Sort by ${sort} ${orders[order]}` : 'Sort'
    const sortableColumns = columns.filter( item => item.options.sortable ).map( item => item.name )

    if ( sortableColumns.length === 0 ) return null

    return (
        <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle as="a" id="filter-dropdown" bsPrefix="btn btn-sm anchor mr-2">
                <FontAwesomeIcon icon="sort" /> {sorting.toUpperCase()}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    sortableColumns.map( (field, i) => <Dropdown.Item as="button" key={i} onClick={() => sortHandler(field)}>
                        {startCase(field)} { (field === sort && order === 'asc') ? orders['desc'] : orders['asc'] }
                    </Dropdown.Item> )
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}

Sorter.propTypes = { 
    columns: PropTypes.array,
    query: PropTypes.object.isRequired,
    sortHandler: PropTypes.func.isRequired
}
