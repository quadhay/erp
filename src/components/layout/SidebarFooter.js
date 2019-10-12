import React from 'react'
import { Notification, Message, Settings, Logout, PinFooter } from './index'

const SidebarFooter = () => (
    <div className="sidebar-footer">
        <Notification />
        <Message />
        <Settings />
        <Logout />
        <PinFooter />        
    </div>
)

export default SidebarFooter
                