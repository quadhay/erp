import { connect } from 'react-redux'
import { UI_Actions as UI }  from '../../actions'
import RightPane from '../../components/layout/RightPane'

const mapDispatchToProps = dispatch => ({
	togglePinSidebar: () => dispatch(UI.togglePinSidebar()),
    changeFontSize: size => dispatch(UI.changeFontSize(size)),
})

export default connect( null, mapDispatchToProps )(RightPane)