import axios from 'axios'

const options = { 'Content-Type': 'application/json' }

const create = ( input, id ) => id ? _update(id, input) : _add(input)

const getAll = () => axios.get('/customers').then( response => response , error => Promise.reject(error) )

const getOne = id => axios.get(`/customer/${id}`).then( response => response , error => Promise.reject(error) )

const _add = ( input ) => axios.post( '/customers', input, options ).then( response => response , error => Promise.reject(error) )

const _update = (id, input) => axios.put( `/customers/${id}`, input ).then( response => response , error => Promise.reject(error) )

const _delete = id => axios.delete('/customers', {data: id}).then( response => response , error => Promise.reject(error) )

export const Service = {
    create,
    getAll,
    getOne,
    delete: _delete
}
