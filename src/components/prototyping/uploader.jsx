import React from 'react'
import PropTypes from 'prop-types'

const Uploader = ({image, setImage}) => {
    return (
        <div className="p-3">
            <img src={image} alt="Product Image" class="img-thumbnail"></img>
            
            <div className="input-group uploader mt-2" style={{maxWidth: '600px'}}>
                <input type="text" className="form-control filename" placeholder="Click on browse to upload image" disabled />
                <span className="input-group-append">
                    <button type="button" className="btn text-danger clear" style={{ display: 'none' }}>Clear</button>
                    
                    <div className="btn input">
                        <i className="fa fa-folder-open"></i>
                        <span className="input-title">Browse</span>
                        <input type="file" accept="image/*, .docx, .doc, .pdf" required />
                    </div>
                </span>
            </div>            
        </div>        
    )
}

// Uploader.propTypes = { inputs: PropTypes.object.isRequired, handleChange: PropTypes.func.isRequired }

export default Uploader
