import React, { lazy, Suspense, useEffect } from 'react'
import { useAlert } from 'react-alert'
import ErrorBoundary from './ErrorBoundary'
import Loader from './layout/Loader'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faKey, faTimes, faBars, faCircle as faCircleSolid, faSearch, faTachometerAlt, faShoppingCart, faChartLine, faGlobe, faBook, faCalendar, faFolder, faBell, faCog, faPowerOff, faGem, faAngleRight, faCheck, faExclamation, faExclamationTriangle, faEllipsisH, faHome, faExpand, faCompress, faTextHeight, faThumbtack, faUserAlt, faUser, faLock, faPlus, faFilter, faReply, faReplyAll, faPrint, faTrash, faLink, faArrowUp, faArrowDown, faSave, faCaretLeft, faCaretRight, faChevronUp, faChevronDown, faChevronRight, faChevronLeft, faFileAlt, faFileExport, faSyncAlt, faMapMarkerAlt, faTools, faAddressCard, faStoreAlt, faTimesCircle, faPoll, faCoins, faShoppingBag, faStore, faMoneyBill, faUsers, faTruckMoving, faStar, faDownload, faSort, faDesktop, faPen } from '@fortawesome/free-solid-svg-icons'
import { faCircle, faClock, faEdit } from '@fortawesome/free-regular-svg-icons'
import { faSalesforce } from '@fortawesome/free-brands-svg-icons'

library.add( faEnvelope, faKey, faTimes, faBars, faCircle, faCircleSolid, faSearch, faTachometerAlt, faShoppingCart, faChartLine, faGlobe, faBook, faCalendar, faFolder, faBell, faCog, faPowerOff, faGem, faAngleRight, faCheck, faExclamation, faExclamationTriangle, faEllipsisH, faHome, faExpand, faCompress, faTextHeight, faThumbtack, faUserAlt, faUser, faLock, faPlus, faFilter, faReply, faReplyAll, faPrint, faTrash, faLink, faArrowUp, faArrowDown, faSave, faTimesCircle, faCaretLeft, faCaretRight, faChevronUp, faChevronDown, faChevronRight, faChevronLeft, faFileAlt, faFileExport, faSyncAlt, faMapMarkerAlt, faTools, faAddressCard, faStoreAlt, faPoll, faCoins, faShoppingBag, faStore, faMoneyBill, faUsers, faSalesforce, faClock, faEdit, faTruckMoving, faStar, faDownload, faSort, faDesktop, faPen )

const Dashboard = lazy(() => import('../containers/Dashboard'))
const Login = lazy(() => import('./user/Login'))

const App = ({ auth, alert, clearAlert, signIn }) => {
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
                    { auth.loggedIn ? <Dashboard /> : <Login signIn={signIn} /> }
                </Router>
            </Suspense>
        </ErrorBoundary>
    )
}

App.propTypes = {
    auth: PropTypes.object.isRequired,
    alert: PropTypes.object.isRequired,
    clearAlert: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired
}

export default App
