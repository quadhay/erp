import { jwtToken } from '../helpers/jwt-token'

const app = {
    apiUrl: 'http://api.inventory.ng',
    jwt: jwtToken(),
    name: 'Guard Invenotory',
}

export default app
