import { app } from '../config'
import axios from 'axios'

export const aboutService = () => {
    return axios.get( `${app.apiUrl}/about`, { 'Content-Type': 'application/json' } )
                .then( response => response, error => Promise.reject(error) )     
}
