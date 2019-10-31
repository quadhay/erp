import { connect } from 'react-redux'
import AuthenticatedApp from '../components/AuthenticatedApp'

const mapState = state => ({
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

export default connect( mapState )(AuthenticatedApp)