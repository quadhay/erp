import { connect } from 'react-redux'
import { userService } from '../services'
import { userActions } from '../actions'
import PowerOff from '../components/layout/PowerOff'

const mapDispatchToProps = dispatch => ({ signOut: () => {
    userService.logout()
    dispatch(userActions.logout())
} })

export default connect( null, mapDispatchToProps )(PowerOff)
