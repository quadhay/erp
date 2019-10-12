import { _replace } from "."
import camelCase from 'lodash/camelCase'
import trim from 'lodash/trim'

  
/**
 * Given a table, generate an objects.
 * each key corresponds to a row in the table.
 * each object's key/value pairs correspond to a cells's first and second value for that row
 * 
 * @param  {HTMLTableElement} table the table to convert
 * @return {Object} objects representing each row in the table
 */
const _object = table => {
    let obj = {}
    const body = table.tBodies[0],
          rows = body.rows
    
    for ( let row of rows )
        obj[camelCase(row.cells[0].innerText)] = trim(row.cells[1].innerText)
    
    return obj
}

const dom = ( params = {} ) => {
    const domparser = new DOMParser(),
          { string, mimeType } = { ...{ string: '', mimeType: 'text/html' }, ...params }
          
    return domparser.parseFromString(string, mimeType)
}

export const parser = {
    tableToObject: _object,
    stringToDom: dom
}