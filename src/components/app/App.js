import React, { lazy, Suspense, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { ErrorBoundary } from '../error'
import Loader from '../layout/Loader'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { BrowserRouter as Router } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faEnvelope, faKey, faTimes, faBars, faCircle as faCircleSolid, faSearch, faTachometerAlt, faShoppingCart, faChartLine, faGlobe, faBook, faCalendar, faFolder, faBell, faCog, faPowerOff, faGem, faAngleRight, faCheck, faExclamation, faExclamationTriangle, faEllipsisH, faHome, faExpand, faCompress, faTextHeight, faThumbtack, faUserAlt, faUser, faLock, faPlus, faFilter, faReply, faReplyAll, faPrint, faTrash, faLink, faArrowUp, faArrowDown, faSave, faCaretLeft, faCaretRight, faChevronUp, faChevronDown, faChevronRight, faChevronLeft, faFileAlt, faFileExport, faSyncAlt, faMapMarkerAlt, faTools, faAddressCard, faStoreAlt, faTimesCircle, faPoll, faCoins, faShoppingBag, faStore, faMoneyBill, faUsers, faTruckMoving, faStar, faDownload, faSort, faDesktop, faPen } from '@fortawesome/free-solid-svg-icons'
import { faCircle, faClock, faEdit } from '@fortawesome/free-regular-svg-icons'
import { faSalesforce } from '@fortawesome/free-brands-svg-icons'

library.add( faEnvelope, faKey, faTimes, faBars, faCircle, faCircleSolid, faSearch, faTachometerAlt, faShoppingCart, faChartLine, faGlobe, faBook, faCalendar, faFolder, faBell, faCog, faPowerOff, faGem, faAngleRight, faCheck, faExclamation, faExclamationTriangle, faEllipsisH, faHome, faExpand, faCompress, faTextHeight, faThumbtack, faUserAlt, faUser, faLock, faPlus, faFilter, faReply, faReplyAll, faPrint, faTrash, faLink, faArrowUp, faArrowDown, faSave, faTimesCircle, faCaretLeft, faCaretRight, faChevronUp, faChevronDown, faChevronRight, faChevronLeft, faFileAlt, faFileExport, faSyncAlt, faMapMarkerAlt, faTools, faAddressCard, faStoreAlt, faPoll, faCoins, faShoppingBag, faStore, faMoneyBill, faUsers, faSalesforce, faClock, faEdit, faTruckMoving, faStar, faDownload, faSort, faDesktop, faPen )

const Layout = lazy(() => import('./layout'))
const Login = lazy(() => import('../user/Login'))

const App = ({ auth, alert, clearAlert, signIn, sidebarVisible, pinSidebar, mainHeader, sidebarBg, sidebarBgImg, sidebarMouseEnter, displayRightPane, borderRadius, theme }) => {

    const classes = classNames (
        'page-wrapper', theme, sidebarBgImg,
        { 'page-header': mainHeader },
        { toggled: sidebarVisible },
        { rightbar: displayRightPane },
        { pinned: pinSidebar },
        { 'sidebar-bg': sidebarBg },
        { 'border-radius-on': borderRadius },
        { 'sidebar-hovered': sidebarMouseEnter }
    )
    const myAlert = useAlert()
    
    useEffect(() => {
        if ( 'message' in alert ) {
            myAlert.show( alert.message, {
                type: alert.typeAlias,
                onOpen: () => clearAlert()
            } )
        }
    }, [ alert, myAlert, clearAlert ])

    return (
        <ErrorBoundary>
            <Suspense fallback={<Loader />}>
                <Router basename={process.env.NODE_ENV === 'development' ? null : '/erp'}>
                    { auth.loggedIn ? <Layout classes={classes} /> : <Login signIn={signIn} /> }
                </Router>
            </Suspense>
        </ErrorBoundary>
    )
    
}

App.defaultProps = {
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

App.propTypes = {
    auth: PropTypes.object.isRequired,
    alert: PropTypes.object.isRequired,
    clearAlert: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
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

export default App
