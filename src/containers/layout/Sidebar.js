import { connect } from 'react-redux'
import { UI_Actions } from '../../actions'
import Sidebar from '../../components/layout/Sidebar'
//import { getUserData } from '../../selectors'

const { toggleSidebar, sidebarHover } = UI_Actions

const mapDispatch = dispatch => ({
    toggleSidebar: () => dispatch(toggleSidebar()),
    hoverEvent: () => dispatch(sidebarHover())
})

export default connect( null, mapDispatch )(Sidebar)