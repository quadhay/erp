import React from 'react'
import PropTypes from 'prop-types'
import { PageMenu } from './PageMenu'
import { Navigation } from './Navigation'

export const Pagination = ({ page, perPage, total, part, options, _push }) => (
    <div className={`d-flex align-items-center justify-content-end py-2${options.shadow ? ' px-3' : ''}`}>
        { options.isMobile ? null : <PageMenu perPage={perPage} rowsPerPageOptions={options.rowsPerPageOptions} _push={_push} /> }

        <Navigation
            total={total}
            part={part}
            page={page}
            perPage={perPage}
            _push={_push}                    
        />
    </div>    
)

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    part: PropTypes.number.isRequired,
    options: PropTypes.object.isRequired,
    _push: PropTypes.func.isRequired
}