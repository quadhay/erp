import { authHeader } from '../helpers'
import storeAPI from 'store'
import axios from 'axios'

const login = ( user, password ) => {
    const url = 'http://api.inventory.ng/user/login',
          data = { email: user, password },
          options = { 'Content-Type': 'application/json' }

    return axios.post( url, data, options )
                .then ( response => {
                    storeAPI.set('user', response.data.success)
                    return response
                }, error => {
                    return Promise.reject(error)
                } )     
}

const logout = () => storeAPI.remove('user')

const register = ( input ) => {
    const url = 'http://api.inventory.ng/user/register',
          data = input, // object
          options = { 'Content-Type': 'application/json' }

    return axios.post( url, data, options ).then( response => response , error => Promise.reject(error) )
}

const getAll = () => {
    const url = 'http://api.inventory.ng/users'

    return axios.get( url, authHeader() ).then( response => response , error => Promise.reject(error) )
}

const getById = id => {
    const url = `http://api.inventory.ng/users/${id}`

    return axios.get( url, authHeader() ).then( response => response , error => Promise.reject(error) )
}

const update = input => {
    const url = `http://api.inventory.ng/users`,
          data = input // object

    return axios.put( url, data, authHeader() ).then( response => response , error => Promise.reject(error) )
}

const _delete = id => {
    const url = `http://api.inventory.ng/users/${id}`

    return axios.delete( url, authHeader() ).then( response => response , error => Promise.reject(error) )
}

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
}
/*
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text)
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout()
                window.location.reload(true)
            }

            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
        }

        return data
    })
}
*/