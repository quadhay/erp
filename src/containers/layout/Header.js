import { connect } from 'react-redux'
import { UI_Actions } from '../../actions'
import Header from '../../components/layout/Header'

const mapStateToPrps = state => ({
    id: {
        expanded: state.UI.expandedItem,
        active: state.UI.activeItem
    }
})

const mapDispatchToProps = dispatch => ({ toggleSidebar: () => dispatch(UI_Actions.toggleSidebar()) })

export default connect( mapStateToPrps, mapDispatchToProps )(Header)