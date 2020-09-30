import React from 'react'
import PropTypes from 'prop-types'
import { TableHead } from './TableHead'
import { TableBody } from './TableBody'

export const TableStandard = ({columns, data, options, query, selected, setSelected, sortHandler}) => (
    <table className={`table table-md mb-0 border-normal ${options.shadow ? 'edge-pad' : 'border'}`}>
        <TableHead
            columns={columns}
            checkHandler={setSelected}
            query={query}
            options={options}
            sortHandler={sortHandler}
            check={data.length === selected.length}
        />
        
        <TableBody
            columns={columns}
            data={data}
            selected={selected}
            checkHandler={setSelected}
            options={options}                    
        />
    </table>    
)

TableStandard.propTypes = {
    columns: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    data: PropTypes.array.isRequired,
    options: PropTypes.object.isRequired,  
    query: PropTypes.object.isRequired,
    selected: PropTypes.array.isRequired,
    setSelected: PropTypes.func.isRequired,
    sortHandler: PropTypes.func.isRequired    
}
