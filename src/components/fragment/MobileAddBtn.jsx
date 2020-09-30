import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const inlineCSS = {
    position: 'fixed',
    right: '50px',
    bottom: '50px',
    zIndex: 500,
}

export const MobileAddBtn = ({to}) => (
    <a className="MobileButton btn btn-primary rounded-circle" role="button" aria-label="Create" href={to} style={inlineCSS}>
        <span className="MobileButton-label">
            <FontAwesomeIcon icon="plus" />
        </span>
    </a>
)

MobileAddBtn.defaultProps = { to: '#' }
MobileAddBtn.propTypes = { to: PropTypes.string }
