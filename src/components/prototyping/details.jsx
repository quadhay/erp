import React from 'react'
import PropTypes from 'prop-types'
import { Field } from '../fragment'

const Details = ({inputs, handleChange}) => (
    <div className="p-3" style={{maxWidth: '600px'}}>
        <div className="form-row">
            <div className="form-group col-md-6">
                <Field field={{ name: 'name', type: 'text', label: 'Name', required: true }} value={inputs.name} handleChange={handleChange} />
            </div>

            <div className="form-group col-md-6">
                <Field field={{ name: 'phone', type: 'text', label: 'Phone Number' }} value={inputs.phone} handleChange={handleChange} />
            </div>
        </div>

        <div className="form-group">
            <Field field={{ name: 'email', type: 'email', label: 'Email' }} value={inputs.email} handleChange={handleChange} />
        </div>

        <h4 className="mb-3 mt-5 sub-heading">Address</h4>

        <div className="form-group">
            <Field field={{ name: 'address', type: 'textarea', label: 'Address', required: true }} value={inputs.address} handleChange={handleChange} />
        </div>

        <div className="form-row">
            <div className="form-group col-md-6">
                <Field field={{ name: 'zip', type: 'text', label: 'Zipcode' }} value={inputs.zip} handleChange={handleChange} />
            </div>

            <div className="form-group col-md-6">
                <Field field={{ name: 'city', type: 'text', label: 'City', required: true }} value={inputs.city} handleChange={handleChange} />
            </div>
        </div>
    </div>
)

Details.propTypes = { inputs: PropTypes.object.isRequired, handleChange: PropTypes.func.isRequired }

export default Details
