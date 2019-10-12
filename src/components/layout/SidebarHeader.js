import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SidebarHeader = props => (
    <div className="sidebar-item sidebar-header d-flex flex-nowrap">
        <div className="user-pic">
            <img className="img-responsive img-rounded" src={props.userImg} alt="User" />
        </div>
        
        <div className="user-info">
            <span className="user-name">Andre <strong>Marin</strong></span>
            <span className="user-role">{props.userRole}</span>
            <span className="user-status">
                <i><FontAwesomeIcon icon={['fas', 'circle']} /></i>
                <span>Online</span>
            </span>
        </div>
    </div>
)

export default SidebarHeader
                