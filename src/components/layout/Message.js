import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from 'react-bootstrap/Dropdown'

const Message = props => {
    return (
        <Dropdown>
            <Dropdown.Toggle as="a" id="messageDropdown" bsPrefix="no-toggle">
                <i><FontAwesomeIcon icon="envelope" /></i>
                <span className="badge badge-pill badge-success notification">7</span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="messages">
                <div className="messages-header">
                    <i className="mr-1"><FontAwesomeIcon icon="envelope" /></i>
                    Messages
                </div>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                    <div className="message-content">
                        <div className="pic">
                            <img src="images/user.jpg" alt="" />
                        </div>
                        <div className="content">
                            <div className="message-title">
                                <strong> Jhon doe</strong>
                            </div>
                            <div className="message-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. In totam explicabo</div>
                        </div>
                    </div>

                </a>
                <a className="dropdown-item" href="/">
                    <div className="message-content">
                        <div className="pic">
                            <img src="images/user.jpg" alt="" />
                        </div>
                        <div className="content">
                            <div className="message-title">
                                <strong> Jhon doe</strong>
                            </div>
                            <div className="message-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. In totam explicabo</div>
                        </div>
                    </div>

                </a>
                <a className="dropdown-item" href="/">
                    <div className="message-content">
                        <div className="pic">
                            <img src="images/user.jpg" alt="" />
                        </div>
                        <div className="content">
                            <div className="message-title">
                                <strong> Jhon doe</strong>
                            </div>
                            <div className="message-detail">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. In totam explicabo</div>
                        </div>
                    </div>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-center" href="/">View all messages</a>
            </Dropdown.Menu>
        </Dropdown>   
    )
}

export default Message
