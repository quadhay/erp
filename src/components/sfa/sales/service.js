import axios from 'axios'

const api = 'http://localhost/bil/app'
const options = { 'Content-Type': 'application/json' }

const create = ( input, id ) => id ? _update(id, input) : _add(input)

const getAll = () => axios.get(api+'/customers').then( response => response , error => Promise.reject(error) )

const getOne = id => axios.get(`${api}/customer/${id}`).then( response => response , error => Promise.reject(error) )

const _add = ( input ) => axios.post( api+'/sales', input, options ).then( response => response , error => Promise.reject(error) )

const _update = (id, input) => axios.put( `${api}/sales/${id}`, input ).then( response => response , error => Promise.reject(error) )

const _delete = id => axios.delete(api+'/sales', {data: id}).then( response => response , error => Promise.reject(error) )

export const Service = {
    create,
    getAll,
    getOne,
    delete: _delete
}
