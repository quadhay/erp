import React from 'react'
import PropTypes from 'prop-types'
import Checker from '../checker'

export const TableBody = ({columns, data, selected, checkHandler, options}) => (
    <tbody>
        {
            data.map( (item, dataIndex) => {
                if ( typeof(options.customRowRender) !== 'undefined' ) {
                    return React.createElement( options.customRowRender, {
                        data,
                        dataIndex,
                        rowIndex: dataIndex
                    } )
                }

                let rowProps = {key: dataIndex}
                
                if (options.onRowClick) rowProps = { ...rowProps, ...{
                    className: 'pointer',
                    onClick: (e) => {
                        if ( e.target.nodeName === 'INPUT' || e.target.nodeName === 'A' ) return null

                        return options.onRowClick({
                            rowData: item,
                            rowMeta: { dataIndex, rowIndex: dataIndex }
                        })
                    }
                } }

                return (
                    <tr {...rowProps}>
                        { options.select ? (
                            <td>
                                <Checker circle={true} value={item.id} check={selected.includes(item.id)} handleChange={checkHandler} />
                            </td>                
                        ) : null }

                        { columns.map( (col, index) => <td key={index}>{'render' in col.options ? col.options.render(item[col.name], item, dataIndex) : item[col.name]}</td> ) }
                    </tr>                    
                )
            } )
        }
    </tbody>    
)

TableBody.propTypes = {
    columns: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    data: PropTypes.array.isRequired,
    selected: PropTypes.array.isRequired,
    checkHandler: PropTypes.func.isRequired,
    options: PropTypes.object.isRequired,  
}
