import { app } from '../config'
import axios from 'axios'

export const workshopService = (query = '') => {
      return axios.get( `${app.apiUrl}/workshops${query}`, { 'Content-Type': 'application/json' } )
            .then( response => response, error => Promise.reject(error) )     
}
