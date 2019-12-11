import { connect } from 'react-redux'
import { UI_Actions, userActions } from '../../actions'
import { userService } from '../../services'
import Header from '../../components/layout/Header'

const mapStateToPrps = state => ({
    id: {
        expanded: state.UI.expandedItem,
        active: state.UI.activeItem
    },
    user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
    toggleSidebar: () => dispatch(UI_Actions.toggleSidebar()),
    signOut: () => {
        userService.logout()
        dispatch(userActions.logout())
    }    
})

export default connect( mapStateToPrps, mapDispatchToProps )(Header)