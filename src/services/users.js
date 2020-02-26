import axios from 'axios'

const options = { 'Content-Type': 'application/json' }

const login = input => {
    return axios.post( '/users/login', input, options )
                .then ( response => {
                    localStorage.setItem( 'user', JSON.stringify(response.data) )
                    return response
                }, error => {
                    return Promise.reject(error)
                } )     
}

const logout = () => localStorage.removeItem('user')

const register = ( input ) => axios.post( '/users/register', input, options ).then( response => response , error => Promise.reject(error) )

const getAll = () => axios.get('/users').then( response => response , error => Promise.reject(error) )

const getById = id => axios.get(`/users/${id}`).then( response => response , error => Promise.reject(error) )

const update = (id, input) => axios.put( `/users/${id}`, input ).then( response => response , error => Promise.reject(error) )

const _delete = id => axios.delete(`/users/${id}`).then( response => response , error => Promise.reject(error) )

const refresh = () => {
    return axios.get('/refresh_token')
                .then ( response => {
                    let user = JSON.parse(localStorage.getItem('user')),
                        cloneUser = { ...user, ...{ token: response.data.token } }
                    localStorage.setItem( 'user', JSON.stringify(cloneUser) )
                    return Promise.resolve(cloneUser)
                }, error => {
                    logout()
                    return Promise.reject(error)
                } )     
}

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete,
    refresh
}
