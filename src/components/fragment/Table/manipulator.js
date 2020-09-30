import { _object } from '../../../helpers'
import { chunk, orderBy } from 'lodash'

export const structuredColumns = (columns, columnDefs) => {
    /**
     * Transform data from array of Strings to array of Objects
     * 
     * Add property defined in columnDefs to columns options 
     * 
     * A property defines in columns options will take priority over
     * any value for that property defined in columnDefs
     * 
     * Properties which are higher in the columnDefs option array
     * will take priority over those below
     */
    try {
        columns = columns.map( field => {
            if ( typeof(field) === 'object' ) {
                if ( field.options === undefined ) field.options = {}
                return field
            }
            
            return { name: field.toLowerCase(), label: field, options: {} }
        } )

        for ( let defs of columnDefs ) {
            const targets = Array.isArray(defs.targets) ? defs.targets : [defs.targets]
            delete defs.targets
    
            for ( let target of targets ) {
                if ( columns[target] ) {
                    columns[target].options = {...defs, ...columns[target].options}
                }
            }
        }
    } catch (error) {
        throw new Error('Bad columns data: Must be either an array of simple strings or objects describing a column.')
    }

    return columns
}

export const structuredData = (columns, data, options, query) => {
    /**
     * Transform data of array Arrays to array Objects
     * 
     * structuredData data with different options available
     */
    const filter = _object.clean(JSON.parse(query.filter))

    const filterable = data.map( item => {
        if ( columns.length > item.length ) {
            throw new Error('Unmatch columns/data definitions: Columns definition must not be more that corresponding data definition.')
        }

        if ( ! Array.isArray(item) ) return item

        let obj = {}
        for ( const [i, v] of columns.entries() ) {
            obj[v.name] = item[i]
        }

        return obj
    } )

    let filtered = filterable

    for ( let key in filter ) {
        filtered = filtered.filter( item => (key === 'q') ? Object.values(item).join(' ').toUpperCase().indexOf(filter[key].toUpperCase()) > -1 : item[key] === filter[key] )
    }

    const orderData = options.sort ? orderBy(filtered, [query.sort], [query.order]) : filtered
    const chunkData = chunk(orderData, parseInt(query.perPage))
    const batchKey = parseInt(query.page) - 1

    return {
        filterable,
        filtered,
        chunked: chunkData,
        batch: chunkData[batchKey] ? chunkData[batchKey] : []
    }
}