import { connect } from 'react-redux'
import { UI_Actions } from '../../actions'
import Menu from '../../components/layout/Menu'

const { activateMe, toggleSubMenu } = UI_Actions

const mapStateToProps = state => ({
  	activeItem: state.UI.activeItem,
	  expandedItem: state.UI.expandedItem,
	  expandedItemParent: state.UI.expandedItemParent
})

const mapDispatchToProps = dispatch => ({
	  activateMe: id => {
		  //console.log('generate header menu')
		  dispatch(activateMe(id))
	  },
	  
  	toggleSubMenu: (id, parentID, event) => {
		if ( event !== undefined ) event.preventDefault()
		dispatch(toggleSubMenu(id, parentID))
	}
})

export default connect(
  	mapStateToProps,
  	mapDispatchToProps
)(Menu)