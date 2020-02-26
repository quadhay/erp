import axios from 'axios'

const getIP = () => axios.get( 'https://ipapi.co/json/', { 'Content-Type': 'application/json' } ).then( response => response, error => Promise.reject(error) )

const networkService = {
    getIP
}

export default networkService