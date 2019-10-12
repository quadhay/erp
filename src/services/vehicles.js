import { app } from '../config'
import axios from 'axios'

export const categories = () => {
    return axios.get( `${app.apiUrl}/vehicles/categories`, { 'Content-Type': 'application/json' } )
                .then( response => response, error => Promise.reject(error) )     
}

export const vehicles = (url = null) => {
    return axios.get( `${app.apiUrl}${url}`, { 'Content-Type': 'application/json' } )
                .then( response => response, error => Promise.reject(error) )     
}

export const all = (query) => {
    return axios.get(`${app.apiUrl}/vehicles/all`, { 'Content-Type': 'application/json' } )
                .then( response => response, error => Promise.reject(error) )     
}