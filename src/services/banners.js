import { app } from '../config'
import axios from 'axios'

export const bannerService = () => {
    return axios.get( `${app.apiUrl}/banners`, { 'Content-Type': 'application/json' } )
                .then( response => response, error => Promise.reject(error) )     
}
