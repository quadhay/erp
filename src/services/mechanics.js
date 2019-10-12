import { app } from '../config'
import axios from 'axios'

export const mechanicsService = () => {
      return axios.get( `${app.apiUrl}/mechanics`, { 'Content-Type': 'application/json' } )
          .then( response => response, error => Promise.reject(error) )    
}
