import { jwtToken } from '../helpers/jwt-token'

const app = {
    apiUrl: 'https://ladyofrosary.ng/backend/api',
    jwt: jwtToken(),
    name: 'Guard Technologies',
}

export default app
