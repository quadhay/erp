import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import Checker from '../checker'

export const TableHead = ({columns, checkHandler, query, sortHandler, options, check}) => {
    const arrow = field => (field.toLowerCase() === query.sort) ?
    <FontAwesomeIcon
        className="small"
        icon={query.order === 'asc' ? 'arrow-up' : 'arrow-down'}
    /> : null

    return (
        <thead>
            <tr>
                { options.select ? (
                    <th>
                        <Checker circle={true} value="all" check={check} handleChange={checkHandler} />
                    </th>                    
                ) : null }

                {
                    columns.map( (item, index) => {
                        const s = item.options.sortable === undefined ? true : item.options.sortable

                        return (
                            <th key={index}>
                                <span
                                    className={classNames({ pointer: options.sort && s })}
                                    onClick={ () => options.sort && s ? sortHandler(item.name) : null }
                                >{item.label} {arrow(item.name)}</span>
                            </th>                                
                        )
                    } )
                }
            </tr>
        </thead>        
    )
}

TableHead.propTypes = {
    columns: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    checkHandler: PropTypes.func.isRequired,
    query: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired,
    sortHandler: PropTypes.func.isRequired,
    check: PropTypes.bool
}
