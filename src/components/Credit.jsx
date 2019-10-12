import React from 'react'
import PropTypes from 'prop-types'

const Credit = ({ styles }) => (
    <div className='credit' style={styles}>
        Software powered by
        <a href="http://inventory.ng" target="guard"> Guard Systems</a>
    </div>
)

Credit.defaultProps = {
    styles: {},
}

Credit.propTypes = {
    styles: PropTypes.object,
}

export default Credit
