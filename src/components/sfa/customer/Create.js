import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, DateTime, ProcessError } from '../fragment'
import { cashFlowService, AccountService, PaymentService } from '../../services'
import { alertActions } from '../../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Create = ({ dispatch, type, match, history }) => {
    console.log(match, type, history)
    const [ inputs, setInputs ] = useState({})
    const [ currency, setCurrency ] = useState([])
    const [ method, setMethod ] = useState([])
    const [ account, setAccount ] = useState([])
    const [ error, setError ] = useState(null)

    /*useEffect( () => {
        PaymentService.getAll().then( response => setMethod(response.data) )
        AccountService.getAll().then( response => {
            response.data.map( data => data.name = `${data.name} (${data.number})` )
            setAccount(response.data)
        } )

        if ( type ) {
            cashFlowService.getOne(match.params.id).then( ({ data }) => {
                data.type = ( data.amount > 0 ) ? 1 : 0
                data.amount = Math.abs(data.amount)
                data.date = new Date(data.date)
                setInputs(data)
            }, e => setError(e.response ? e.response.statusText : 'Oops, something went wrong') )
        }
    }, [] )

    useEffect( () => {
        if ( currency.length === 0 ) {
            if ( type && 'account_id' in inputs ) {
                const acc = account.find( ({id}) => id === inputs.account_id )
                setCurrency(acc ? acc.currency : [])
            }
        }
    }, [inputs.account_id] )*/

    const submitHandler = (e) => {
        console.log(inputs)
        /*cashFlowService.create(inputs).then(
            (response) => {
                if ( type === 0 ) {
                    setInputs({})
                }

                dispatch(alertActions.success(response.data))
            },
            error => {
                let msg = error.response ? <ProcessError errors={error.response.data} /> : error
                dispatch(alertActions.error(msg))
            }
        )*/

        e.preventDefault()
    }

    const _handleChange = (e) => setInputs({ ...inputs, ...{ [e.target.name]: e.target.value } })

    const handleDelete = () => {
        cashFlowService.delete(inputs.id).then(
            (response) => {
                dispatch(alertActions.success(<div>{response.data} <button className="btn btn-sm text-info" onClick={handleUndo}>UNDO</button></div>))
                history.push('/cashflow')
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

                        { 2 + 2 === 4 ? <button className="btn btn-sm text-danger" onClick={handleDelete}><FontAwesomeIcon icon="trash" /> DELETE</button> : null }
                    </div>
                </form>
            </div>

            { 2 + 2 === 4 ?
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
                            <span>1 item - $63.13 - delivered</span>
                        </div>
                        <Link to={`${match.path}/order`} className="float-right"><FontAwesomeIcon icon={['far', 'edit']} /></Link>
                    </div>
                </div>
            : null }
        </div>
    )

}

export default connect()(Create)
