import React from 'react'
import PropTypes from 'prop-types'
import { schemes, images } from '../../config/theme'

const Schemes = ({ theme, event }) => {
    const schemeELements = schemes.map( (scheme) => <span key={scheme} data-theme={scheme} className={`theme ${scheme}${theme === scheme ? ' selected' : ''}`} title={scheme} onClick={theme !== scheme ? () => event(scheme) : null} /> )

    return (
        <div className="row">
            <div className="form-group col-md-12">
                <h3>Themes</h3>
                <p className="mb-3">Here are more themes that you can use</p>
                <div className="schemes">{schemeELements}</div>
            </div>
        </div>       
    )
}

const BgImg = ({ image, event }) => {
    const background = images.map( img => <span key={img} data-bg={img} className={`theme theme-bg ${image === img ? 'selected' : ''}`} onClick={image !== img ? () => event(img) : null} /> )

    return (
        <div className="row">
            <div className="form-group col-md-12">
                <p className="mb-3">You can also use background image </p>
                <div className="background-images">{background}</div>
            </div>
        </div>       
    )
}

Schemes.propTypes = {
    theme: PropTypes.string,
    event: PropTypes.func.isRequired
}

BgImg.propTypes = {
    image: PropTypes.string,
    event: PropTypes.func.isRequired
}

export { Schemes, BgImg }
