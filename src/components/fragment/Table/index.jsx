import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'
import { options as defs } from './defaults'
import { structuredData, structuredColumns } from './manipulator'
import { CheckNotice, Filter, Table, Pagination } from './components'
import classNames from 'classnames'
import { withDevice } from '../../../components/hoc' 

import './table.scss'

const DersureTable = ({ location, ...props }) => {
    const options = { ...defs, ...props.options, ...props.device }
    const query = location.search
    ? queryString.parse(location.search)
    : { filter: JSON.stringify({}), sort: options.sortOrder.name, order: options.sortOrder.direction, page: options.page, perPage: options.rowsPerPage }

    const columns = structuredColumns(props.columns, props.columnDefs)
    const { filterable, filtered, chunked, batch } = structuredData(columns, props.data, options, query)
    const path = location.pathname
    const query_filters = JSON.parse(query.filter)

    const [ displayedFilters, setDisplayedFilters ] = useState(Object.keys(query_filters).filter(item => item !== 'q'))
    
    const [ selected, setSelected ] = useState([])
    
    const sortHandler = text => {
        const txt = text.toLowerCase()
        const order = (query.sort === txt) ? query.order === 'asc' ? 'desc' : 'asc' : 'asc'
        _push({ sort: txt, page: 1, order })
    }
    
    const checkHandler = e => {
        const val = e.currentTarget.value
        
        if ( val === 'all' ) {
            setSelected( (selected.length === batch.length) ? [] : batch.map(item => item.id) )
            return false
        } 
        
        setSelected( selected.includes(val) ? selected.filter(item => item !== val) : selected.concat(val) )
    }

    const _push = options => props.history.push(`${path}?${queryString.stringify({ ...query, ...options })}`)

    if (options.isMobile) options.responsive = 'stacked'

    return (
        <div className={classNames('dersure-table', {'shadow-box': (options.shadow && options.isBrowser)})}>
            { options.select ? <CheckNotice checked={selected} setSelected={setSelected} /> : null }

            <Filter
                title={props.title}
                columns={columns}
                data={filterable}
                filteredData={filtered}
                displayedFilters={displayedFilters}
                setDisplayedFilters={setDisplayedFilters}
                sortHandler={sortHandler}
                query={query}
                options={options}
                path={props.match.path}
                _push={_push}            
            />
            
            { (batch.length > 0) ? (
                <>
                    { ( Table[options.responsive] === undefined ) ? null :
                        React.createElement( Table[options.responsive], {
                            columns,
                            data: batch,
                            options,   
                            query,
                            selected,
                            setSelected: checkHandler,
                            sortHandler,                        
                        } )
                    }
                    
                    <Pagination
                        page={parseInt(query.page)}
                        perPage={parseInt(query.perPage)}
                        total={filtered.length}
                        part={chunked.length}   
                        options={options}                         
                        _push={_push}                    
                    />
                </>
            ) : (
                <div className="alert alert-primary" role="alert">
                    No results found!
                </div>
            ) }                                
        </div>                
    )
}

DersureTable.defaultProps = {
    title: '',
    options: {},
    columnDefs: []
}

DersureTable.propTypes = {
    title: PropTypes.string,  
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    options: PropTypes.object,
    columnDefs: PropTypes.array
}

export default withRouter(withDevice(DersureTable))
