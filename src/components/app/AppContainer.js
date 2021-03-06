import { connect } from 'react-redux'
import App from './App'
import { userActions, alertActions } from '../../actions'
import { userService } from '../../services'

const mapState = state => ({
    auth: state.auth,
    alert: state.alert,
    sidebarVisible: state.UI.sidebarVisible,
    pinSidebar: state.UI.pinSidebar,
    sidebarMouseEnter: state.UI.sidebarMouseEnter,
    mainHeader: state.settings.mainHeader,
    sidebarBg: state.settings.sidebarBg,
    sidebarBgImg: state.settings.sidebarBgImg,
    displayRightPane: state.settings.rightPanel,
    borderRadius: state.settings.borderRadius,
    theme: state.settings.theme    
})

const actions = dispatch => ({
	signIn: (email, password, e) => {
        dispatch(userActions.loginRequest(email))
        dispatch(alertActions.info(`Authenticating ${String.fromCharCode(8594)} ${email}`))
        
        userService
            .login({ email, password })
                .then(
                    response => { 
                        dispatch(userActions.loginSuccess(response.data))
                    },
                    error => {
                        let msg
                        if ( error.response ) {
                            msg = error.response.status !== 500 ? error.response.data : 'Oops, something went wrong'
                        } else {
                            msg = error.toString()
                        }                        
                        
                        dispatch(userActions.loginFailure())
                        dispatch(alertActions.error(msg))
                    }
                )

		e.preventDefault()
    },

    clearAlert: () => dispatch(alertActions.clear())
})

export default connect( mapState, actions )(App)
