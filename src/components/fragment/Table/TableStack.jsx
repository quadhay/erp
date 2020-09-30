import React from 'react'
import PropTypes from 'prop-types'

export const TableStack = ({columns, data, options, query, setSelected}) => {
    const checkHandler = e => setSelected([1])

    return (
        <div className="stacked card-columns">
            { data.map( (item, index) => {
                if ( typeof(options.customStackRender) !== 'undefined' ) {
                    return React.createElement( options.customStackRender, {
                        key: index,
                        data,
                        dataIndex: index,
                        rowIndex: index
                    } )
                }

                return (
                    <ul key={index} className="card p-2">
                        { columns.map( ({label, name, options}, i) => (
                            <li key={i}>
                                <label className="mr-1">{label}:</label>
                                <span>
                                    {
                                        'render' in options ? options.render(item[name], item, index)
                                        : item[name]
                                    }                                    
                                </span>
                            </li>
                        ) ) }
                    </ul>                    
                )
            } ) }
        </div>  
    )
}

TableStack.propTypes = {
    columns: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    data: PropTypes.array.isRequired,
    options: PropTypes.object.isRequired,  
    query: PropTypes.object.isRequired,
    setSelected: PropTypes.func.isRequired,
}
