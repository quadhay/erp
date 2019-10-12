import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from 'react-bootstrap/Dropdown'

const Notification = props => {
    return (
        <Dropdown>
            <Dropdown.Toggle as="a" id="notificationsDropdown" bsPrefix="no-toggle">
                <i><FontAwesomeIcon icon="bell" /></i>
                <span className="badge badge-pill badge-warning notification">3</span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="notifications">
                <div className="notifications-header">
                    <i className="mr-1"><FontAwesomeIcon icon="bell" /></i>
                    Notifications
                </div>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                    <div className="notification-content">
                        <div className="icon">
                            <i className="text-success border border-success"><FontAwesomeIcon icon="check" /></i>
                        </div>
                        <div className="content">
                            <div className="notification-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. In totam explicabo</div>
                            <div className="notification-time">
                                6 minutes ago
                            </div>
                        </div>
                    </div>
                </a>
                <a className="dropdown-item" href="/">
                    <div className="notification-content">
                        <div className="icon">
                            <i className="text-info border border-info"><FontAwesomeIcon icon="exclamation" /></i>
                        </div>
                        <div className="content">
                            <div className="notification-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. In totam explicabo</div>
                            <div className="notification-time">
                                Today
                            </div>
                        </div>
                    </div>
                </a>
                <a className="dropdown-item" href="/">
                    <div className="notification-content">
                        <div className="icon">
                            <i className="text-warning border border-warning"><FontAwesomeIcon icon="exclamation-triangle" /></i>
                        </div>
                        <div className="content">
                            <div className="notification-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. In totam explicabo</div>
                            <div className="notification-time">
                                Yesterday
                            </div>
                        </div>
                    </div>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-center" href="/">View all notifications</a>
            </Dropdown.Menu>
        </Dropdown>   
    )
}

export default Notification
