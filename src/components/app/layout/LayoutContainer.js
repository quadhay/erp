import { connect } from 'react-redux'
import { UI_Actions, userActions } from '../../../actions'
import { userService } from '../../../services'
import Layout from './Layout'
//import { getUserData } from '../../selectors'

const { toggleSidebar, sidebarHover, togglePinSidebar, changeFontSize } = UI_Actions

const mapStateToProps = state => ({
    fontSize: state.UI.fontSize,
    contentBox: state.UI.contentBox,    
    title: state.UI.pageTitle,
    user: state.auth.user    
})

const mapDispatch = dispatch => ({
    toggleSidebar: () => dispatch(toggleSidebar()),
    hoverEvent: () => dispatch(sidebarHover()),
	togglePinSidebar: () => dispatch(togglePinSidebar()),
    changeFontSize: size => dispatch(changeFontSize(size)),
    signOut: () => {
        userService.logout()
        dispatch(userActions.logout())
    }        
})

export default connect( mapStateToProps, mapDispatch )(Layout)
