import axios from 'axios'

const options = { 'Content-Type': 'application/json' }

const create = ( input ) => axios.post( '/accounts', input, options ).then( response => response , error => Promise.reject(error) )

const getAll = () => axios.get('/accounts').then( response => response , error => Promise.reject(error) )

const getOne = id => axios.get(`/accounts/${id}`).then( response => response , error => Promise.reject(error) )

const update = (id, input) => axios.put( `/accounts/${id}`, input ).then( response => response , error => Promise.reject(error) )

const _delete = id => axios.delete(`/accounts/${id}`).then( response => response , error => Promise.reject(error) )

export const AccountService = {
    create,
    getAll,
    getOne,
    update,
    delete: _delete
}
