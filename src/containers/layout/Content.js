import { connect } from 'react-redux'
import { UI_Actions } from '../../actions'
import Content from '../../components/layout/Content'

const mapStateToProps = state => ({ fontSize: state.UI.fontSize })

const mapDispatchToProps = dispatch => ({ hideSidebar: () => dispatch(UI_Actions.toggleSidebar()) })

export default connect( mapStateToProps, mapDispatchToProps )(Content)