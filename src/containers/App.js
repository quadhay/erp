import { connect } from 'react-redux'
import App from '../components/App'
import { alertActions } from '../actions'

const mapState = state => ({
    user: state.auth,
    alert: state.alert
})

// Why is this action working without dispatch which I specified in the others
const actionCreators = {
    clearAlert: alertActions.clear
}

export default connect( mapState, actionCreators )(App)
