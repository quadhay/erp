import { connect } from 'react-redux'
import { settingActions as S, UI_Actions as UI }  from '../../actions'
import Settings from './Settings'

const mapStateToProps = state => ({
	fontSize: state.settings.fontSize,
    sidebar: state.settings.sidebar,
	pinSidebar: state.settings.pinSidebar,
	mainHeader: state.settings.mainHeader,
	rightPanel: state.settings.rightPanel,
	theme: state.settings.theme,
	sidebarBgImg: state.settings.sidebarBgImg,
	sidebarBg: state.settings.sidebarBg,
	borderRadius: state.settings.borderRadius,
})

const mapDispatchToProps = dispatch => ({
	setFontSize: size => dispatch(S.setFontSize(size)),
	sidebarVisibility: () => {
		dispatch(S.sidebarVisibility())
		dispatch(UI.toggleSidebar())
	},
	setPinSidebar: () => {
		dispatch(S.setPinSidebar())
		dispatch(UI.togglePinSidebar())
	},
	setMainHeader: () => { dispatch(S.setMainHeader()) },
	rightPanelVisibility: () => dispatch(S.rightPanelVisibility()),
	setTheme: theme => dispatch(S.setTheme(theme)),
	setSidebarBgImg: image => dispatch(S.setSidebarBgImg(image)),
	sidebarBgImgVisibility: () => dispatch(S.sidebarBgImgVisibility()),
	borderRadiusVisibility: () => dispatch(S.borderRadiusVisibility())
})

export default connect( mapStateToProps, mapDispatchToProps )(Settings)