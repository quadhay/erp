import axios from 'axios'

const options = { 'Content-Type': 'application/json' }

const create = ( input ) => axios.post( '/payment_methods', input, options ).then( response => response , error => Promise.reject(error) )

const getAll = () => axios.get('/payment_methods').then( response => response , error => Promise.reject(error) )

const getOne = id => axios.get(`/payment_methods/${id}`).then( response => response , error => Promise.reject(error) )

const update = (id, input) => axios.put( `/payment_methods/${id}`, input ).then( response => response , error => Promise.reject(error) )

const _delete = id => axios.delete(`/payment_methods/${id}`).then( response => response , error => Promise.reject(error) )

export const PaymentService = {
    create,
    getAll,
    getOne,
    update,
    delete: _delete
}
