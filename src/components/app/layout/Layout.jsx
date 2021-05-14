import React from 'react'
import PropTypes from 'prop-types'
import { ShowSidebar, Sidebar, Header, Content, RightPane } from '../../layout'

const Layout = ({ toggleSidebar, ...props }) => (
    <div className={props.classes}>
        <ShowSidebar show={toggleSidebar} />
        <Sidebar toggleSidebar={toggleSidebar} hover={props.hoverEvent} />
        <Header title={props.title} toggleSidebar={toggleSidebar} user={props.user} signOut={props.signOut} />
        <Content fontSize={props.fontSize} contentBox={props.contentBox} hideSidebar={toggleSidebar} />
        <RightPane togglePinSidebar={props.togglePinSidebar} changeFontSize={props.changeFontSize} />
    </div>
)

Layout.propTypes = {
    classes: PropTypes.string,
    fontSize: PropTypes.string.isRequired,
    contentBox: PropTypes.bool,
    toggleSidebar: PropTypes.func.isRequired,
    hoverEvent: PropTypes.func.isRequired,
    togglePinSidebar: PropTypes.func.isRequired,
    changeFontSize: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired   
}

export default Layout
