import axios from 'axios'

const fakeReviews = () => axios.get('/cashflows').then( response => response , error => Promise.reject(error) )

export default fakeReviews
