import { app } from '../config'
import axios from 'axios'

export const careerService = () => {
    return axios.get( `${app.apiUrl}/careers`, { 'Content-Type': 'application/json' } )
                .then( response => response, error => Promise.reject(error) )     
}

export const careerForm = (data = {}) => {
    return axios.post( `${app.apiUrl}/careers`, data, { 'Content-Type': 'multipart/form-data' } )
                .then( response => response, error => Promise.reject(error) )     
}