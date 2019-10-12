import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'

const Settings = () => (
    <Dropdown>
        <Dropdown.Toggle as="a" id="settingsDropdown" bsPrefix="no-toggle">
            <i><FontAwesomeIcon icon="cog" /></i>
            <span className="badge-sonar"></span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Link to="/myprofile" className="dropdown-item">My profile</Link>
            <Link to="help" className="dropdown-item">Help</Link>
            <Link to="/settings" className="dropdown-item">Setting</Link>
        </Dropdown.Menu>
    </Dropdown>
)

export default Settings
