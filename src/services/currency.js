import axios from 'axios'

const options = { 'Content-Type': 'application/json' }

const create = ( input ) => axios.post( '/currencies', input, options ).then( response => response , error => Promise.reject(error) )

const getAll = () => axios.get('/currencies').then( response => response , error => Promise.reject(error) )

const getOne = id => axios.get(`/currencies/${id}`).then( response => response , error => Promise.reject(error) )

const update = (id, input) => axios.put( `/currencies/${id}`, input ).then( response => response , error => Promise.reject(error) )

const _delete = id => axios.delete(`/currencies/${id}`).then( response => response , error => Promise.reject(error) )

export const currencyService = {
    create,
    getAll,
    getOne,
    update,
    delete: _delete
}
