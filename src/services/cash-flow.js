import axios from 'axios'

const options = { 'Content-Type': 'application/json' }

const create = ( input ) => axios.post( '/cashflows', input, options ).then( response => response , error => Promise.reject(error) )

const getAll = () => axios.get('/cashflows').then( response => response , error => Promise.reject(error) )

const getOne = id => axios.get(`/cashflows/${id}`).then( response => response , error => Promise.reject(error) )

const update = (id, input) => axios.put( `/cashflows/${id}`, input ).then( response => response , error => Promise.reject(error) )

const _delete = id => axios.delete(`/cashflows/${id}`).then( response => response , error => Promise.reject(error) )

export const cashFlowService = {
    create,
    getAll,
    getOne,
    update,
    delete: _delete
}
