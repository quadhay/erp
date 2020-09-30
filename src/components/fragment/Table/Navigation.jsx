import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

export const Navigation = ({ total, part, page, perPage, _push }) => {
    const pageHandler = page => _push({page})
    
    const info = (current, perPage, part, total) => {
        let i = current - 1,
            to = current === part ? total : current * perPage

        return `${i * perPage + 1} - ${to} of ${total}`
    }

    return (
        <>
            { part > 1 ? <span className="info mr-4">{info(page, perPage, part, total)}</span> : null }

            <span className="control">
                <button className="btn" disabled={page === 1} onClick={() => pageHandler(page - 1)}><FontAwesomeIcon icon="chevron-left" /></button>
                <label>{page} of {part}</label>
                <button className="btn" disabled={page === part} onClick={() => pageHandler(page + 1)}><FontAwesomeIcon icon="chevron-right" /></button>
            </span>
        </>
    )
}

Navigation.propTypes = { 
    total: PropTypes.number.isRequired,
    part: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    _push: PropTypes.func.isRequired
}
