import { app } from '../config'
import axios from 'axios'

export const contactService = (data = {}) => {
    const url = `${app.apiUrl}/contactus`,
          options = { 'Content-Type': 'application/json' }
    
    //const config = { method: 'post', url, data, headers: options }

    return axios.post( url, data, options )
                .then( response => response, error => Promise.reject(error) )     
}
