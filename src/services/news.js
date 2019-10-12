import { app } from '../config'
import axios from 'axios'

export const newsService = () => {
    return axios.get( `${app.apiUrl}/news`, { 'Content-Type': 'application/json' } )
                .then( response => response, error => Promise.reject(error) )     
}
