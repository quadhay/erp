import { connect } from 'react-redux'
import { UI_Actions }  from '../../actions'
import ShowSidebarBtn from '../../components/layout/ShowSidebar'

const mapDispatchToProps = dispatch => ({ show: () => dispatch(UI_Actions.toggleSidebar()) })

export default connect( null, mapDispatchToProps )(ShowSidebarBtn)
