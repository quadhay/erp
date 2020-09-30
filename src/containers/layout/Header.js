import { connect } from 'react-redux'
import { UI_Actions, userActions } from '../../actions'
import { userService } from '../../services'
import Header from '../../components/layout/Header'

const mapStateToProps = state => ({
    id: {
        expanded: state.UI.expandedItem,
        active: state.UI.activeItem
    },
    title: state.UI.pageTitle,
    user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
    toggleSidebar: () => dispatch(UI_Actions.toggleSidebar()),
    signOut: () => {
        userService.logout()
        dispatch(userActions.logout())
    }    
})

export default connect( mapStateToProps, mapDispatchToProps )(Header)