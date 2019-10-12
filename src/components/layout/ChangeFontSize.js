import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import Dropdown from 'react-bootstrap/Dropdown'

const ChangeFontSize = props => {
    const size = ['150%', '125%', '100%'],
          fontSize = size.map( s => <Dropdown.Item as="button" key={s} onClick={() => props.event(s)}>{s}</Dropdown.Item> )

    return (
        <Dropdown>
            <Dropdown.Toggle as="a" id="changeFontSizeDropdown" bsPrefix="cb0001">
                <FontAwesomeIcon icon="text-height" />
            </Dropdown.Toggle>

            <Dropdown.Menu>{fontSize}</Dropdown.Menu>
        </Dropdown>        
    )
}

ChangeFontSize.propTypes = {
    event: PropTypes.func.isRequired
}

export default ChangeFontSize
