import React from 'react'
import PropTypes from 'prop-types'
import { Search } from './Search'
import { Download } from './Download'
import { Create } from './Create'
import { AddFilter } from './AddFilter'
import { DisplayFilter } from './DisplayFilter'
import { Sorter } from './Sorter'

export const Filter = ({ title, columns, data, filteredData, displayedFilters, setDisplayedFilters, sortHandler, query, options, path, _push }) => {
    const qFilters = JSON.parse(query.filter)

    const filterHandler = (filter, input = '') => {
        _push({ page: 1, filter: JSON.stringify({ ...qFilters, ...{ [filter]: input } }) })
    }

    const removeFilter = filter => {
        delete qFilters[filter]
        
        setDisplayedFilters(displayedFilters.filter(item => item !== filter))
        _push({ page: 1, filter: JSON.stringify(qFilters) })
    }

    return (
        <div className={`d-flex flex-wrap align-items-center justify-content-between filter-toolbar${options.shadow ? ' px-3' : ''}`}>
            <div className="d-flex">
                { options.search ? <Search filters={qFilters} _push={_push} /> : null }
                
                <DisplayFilter
                    columns={columns}
                    data={data}
                    displayedFilters={displayedFilters}
                    qFilters={qFilters}
                    filterHandler={filterHandler}
                    removeFilter={removeFilter}
                />                     
            </div>

            <div>
                { options.create ? <Create to={`${path}/create`} isMobile={options.isMobile} /> : null }

                { (options.responsive === 'stacked') ? <Sorter columns={columns} query={query} sortHandler={sortHandler} /> : null }

                { options.filter ? <AddFilter
                    columns={columns}
                    displayedFilters={displayedFilters}
                    setDisplayedFilters={setDisplayedFilters}
                    filterHandler={filterHandler}
                /> : null }
                
                { options.download ? <Download title={title} data={filteredData} /> : null }                  
            </div>
        </div>    
    )
}

Filter.propTypes = { 
    columns: PropTypes.array,
    data: PropTypes.array.isRequired,
    filteredData: PropTypes.array.isRequired,
    displayedFilters: PropTypes.array.isRequired,
    setDisplayedFilters: PropTypes.func.isRequired,
    sortHandler: PropTypes.func.isRequired,
    query: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired,
    _push: PropTypes.func.isRequired
}
