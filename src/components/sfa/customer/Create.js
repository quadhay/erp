import React, { useState, useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, DateTime, ProcessError } from '../fragment'
import { Service } from './service'
import { alertActions } from '../../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Create = ({ dispatch, match, history, response, update }) => {
    const { loaded, data, error } = response

    const [ inputs, setInputs ] = useState({})
    const [ currency, setCurrency ] = useState([])
    const [ method, setMethod ] = useState([])
    const [ account, setAccount ] = useState([])

    const id = match.params.id

    useLayoutEffect( () => {
        if ( id !== 'create' && loaded ) {
            const user = data.find(item => item.id === id)
            setInputs(user)
        }
    }, [loaded] )

    const submitHandler = (e) => {
        Service.create(inputs, inputs.id).then(
            success => {
                if ( id === 'create' ) {
                    //resp.address = JSON.parse(resp.address)
                    data.push(success.data)
                    dispatch(alertActions.success('Customer added'))
                    history.push('/customers/'+success.data.id)
                } else {
                    let itemIndex = data.findIndex(item => item.id === id)
                    data[itemIndex] = inputs

                    dispatch(alertActions.success(success.data))
                    history.push('/customers')
                }
            },
            error => {
                let msg = error.response ? <ProcessError errors={error.response.data} /> : error.toString()
                dispatch(alertActions.error(msg))
            }
        )

        e.preventDefault()
    }

    const _handleChange = (e) => setInputs({ ...inputs, ...{ [e.target.name]: e.target.value } })

    const handleDelete = () => {
        Service.delete([inputs.id]).then(
            success => {
                dispatch(alertActions.success(<div>{success.data} <button className="btn btn-sm text-info" onClick={handleUndo}>UNDO</button></div>))
                const nData = data.filter( item => item.id !== inputs.id )
                update({ ...response, ...{data: nData} })
                history.push('/customers')
            },
            error => dispatch(alertActions.error( error.response && error.response.status !== 500 ? error.response.data : error.toString() ))
        )
    }

    const handleUndo = () => {
        console.log(inputs.id)
    }

    /*
    if ( type && error ) {
        return <p className="text-danger">{error}</p>
    }*/

    if (loaded && !error) {
        if (id !== 'create' && !inputs) {
            dispatch(alertActions.error('Customer does not exist'))
            history.push('/customers')
            return null
        }

        return (
            <div className="row">
                <div className="col-lg-8 form2">
                    <form name="customer" className="content pre-disabled" onSubmit={submitHandler}>
                        <div className="content-body p-3" style={{maxWidth: '600px'}}>
                            <h4 className="mb-3 sub-heading">Identity</h4>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <Field field={{ name: 'name', type: 'text', label: 'Name', required: true }} value={inputs.name} handleChange={_handleChange} />
                                </div>

                                <div className="form-group col-md-6">
                                    <Field field={{ name: 'phone', type: 'text', label: 'Phone Number' }} value={inputs.phone} handleChange={_handleChange} />
                                </div>
                            </div>

                            <div className="form-group">
                                <Field field={{ name: 'email', type: 'email', label: 'Email' }} value={inputs.email} handleChange={_handleChange} />
                            </div>

                            <h4 className="mb-3 mt-5 sub-heading">Address</h4>

                            <div className="form-group">
                                <Field field={{ name: 'address', type: 'textarea', label: 'Address', required: true }} value={inputs.address} handleChange={_handleChange} />
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <Field field={{ name: 'zip', type: 'text', label: 'Zipcode' }} value={inputs.zip} handleChange={_handleChange} />
                                </div>

                                <div className="form-group col-md-6">
                                    <Field field={{ name: 'city', type: 'text', label: 'City', required: true }} value={inputs.city} handleChange={_handleChange} />
                                </div>
                            </div>
                        </div>

                        <div className="content-foot d-flex d-flex align-items-center justify-content-between p-3 toobar">
                            <button type="submit" className="btn" id="submit"><FontAwesomeIcon icon="save" /> Save</button>

                            { id !== 'create' ? <button type="button" className="btn btn-sm text-danger" onClick={handleDelete}><FontAwesomeIcon icon="trash" /> DELETE</button> : null }
                        </div>
                    </form>
                </div>

                { id !== 'create' ?
                    <div className="col-lg-4 d-md-none d-lg-block">
                        <div className="content p-3">
                            <h4 className="mb-3 sub-heading">History</h4>
                            <div className="row">
                                <div className="col-lg-6">
                                    <i className="float-left mr-3"><FontAwesomeIcon icon={['far', 'clock']} /></i>
                                    <div className="float-left font-weight-bold">
                                        <label>First Seen</label> <br />
                                        <span>8/28/2019</span>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <i className="float-left mr-3"><FontAwesomeIcon icon={['far', 'clock']} /></i>
                                    <div className="float-left font-weight-bold">
                                        <label>Last Seen</label> <br />
                                        <span>2/22/2020</span>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <i className="mr-3"><FontAwesomeIcon icon="coins" /></i>
                                    <label className="font-weight-bold">10 Orders</label>
                                </div>
                            </div>
                        </div>

                        <div className="content p-3 clearfix">
                            <i className="float-left mr-3"><FontAwesomeIcon icon="coins" /></i>
                            <div className="float-left">
                                <label className="font-weight-bold">Order #F6DQM0</label> <br />
                                <span>2016-10-04T09:24:22.941Z</span> <br />
                                <span>1 item - $63.13</span>
                            </div>
                            <Link to={`${match.path}/order`} className="float-right"><FontAwesomeIcon icon={['far', 'edit']} /></Link>
                        </div>
                    </div>
                : null }
            </div>
        )
    }

    return null

}

export default connect()(Create)
