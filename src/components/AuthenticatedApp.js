import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import * as Layout from '../containers/layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faKey, faTimes, faBars, faCircle as faCircleSolid, faSearch, faTachometerAlt, faShoppingCart, faChartLine, faGlobe, faBook, faCalendar, faFolder, faBell, faCog, faPowerOff, faGem, faAngleRight, faCheck, faExclamation, faExclamationTriangle, faEllipsisH, faHome, faArrowUp, faExpand, faCompress, faTextHeight, faThumbtack, faUserAlt } from '@fortawesome/free-solid-svg-icons'

import { faCircle } from '@fortawesome/free-regular-svg-icons'

library.add( faEnvelope, faKey, faTimes, faBars, faCircle, faCircleSolid, faSearch, faTachometerAlt, faShoppingCart, faChartLine, faGlobe, faBook, faCalendar, faFolder, faBell, faCog, faPowerOff, faGem, faAngleRight, faCheck, faExclamation, faExclamationTriangle, faEllipsisH, faHome, faArrowUp, faExpand, faCompress, faTextHeight, faThumbtack, faUserAlt )

const AuthenticatedApp = ({ sidebarVisible, pinSidebar, mainHeader, sidebarBg, sidebarBgImg, sidebarMouseEnter, displayRightPane, borderRadius, theme }) => {

    let classes = classNames (
        'page-wrapper', theme, sidebarBgImg,
        { 'page-header': mainHeader },
        { toggled: sidebarVisible },
        { rightbar: displayRightPane },
        { pinned: pinSidebar },
        { 'sidebar-bg': sidebarBg },
        { 'border-radius-on': borderRadius },
        { 'sidebar-hovered': sidebarMouseEnter }
    )

    return (
        <div className={classes}>
            <Layout.ShowSidebar />
            <Layout.Sidebar />
            <Layout.Header />
            <Layout.Content />
            <Layout.RightPane />
        </div>
    )

}

AuthenticatedApp.defaultProps = {
    sidebarVisible: true,
    pinSidebar: false,
    mainHeader: true,
    sidebarBg: true,
    sidebarBgImg: 'bg1',
    sidebarMouseEnter: false,
    displayRightPane: true,
    borderRadius: false,
    theme: 'default-theme',
}

AuthenticatedApp.propTypes = {
    sidebarVisible: PropTypes.bool,
    pinSidebar: PropTypes.bool,
    mainHeader: PropTypes.bool,
    sidebarBg: PropTypes.bool,
    sidebarBgImg: PropTypes.string,
    sidebarMouseEnter: PropTypes.bool,
    displayRightPane: PropTypes.bool,
    borderRadius: PropTypes.bool,
    theme: PropTypes.string,
}

export default AuthenticatedApp