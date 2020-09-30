import React, { useState, useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, DateTime, ProcessError } from '../../fragment'
import { Service } from './service'
import { alertActions } from '../../../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Truck from './Truck'

const AddOrder = ({ dispatch, match, history, response, update }) => {
    const { loaded, data, error } = response

    const [ inputs, setInputs ] = useState({})
    const [ loading, setLoading ] = useState([])
    const [ currency, setCurrency ] = useState([])
    const [ method, setMethod ] = useState([])
    const [ account, setAccount ] = useState([])

    const id = match.params.id

    useLayoutEffect( () => {
        if ( id !== 'new' && loaded ) {
            const order = data.find(item => parseInt(item.id) === parseInt(id))
            setInputs(order)
        }
    }, [loaded] )

    const submitHandler = (e) => {
        Service.create(inputs, inputs.id).then(
            success => {
                if ( id === 'new' ) {
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

    const showLoading = () => {
        if (inputs.loading) {
            console.log("Show loading...", inputs.loading)
        } else {
            dispatch(alertActions.info('Unable to retrieve loading'))
        }
    }

    /*
    if ( type && error ) {
        return <p className="text-danger">{error}</p>
    }*/

    if (loaded && !error) {
        if (id !== 'new' && !inputs) {
            dispatch(alertActions.error('Order does not exist'))
            history.push('/sales')
            return null
        }

        return (
            <>
                <div className="row">
                    <div className="col-lg-6 form2">
                        <form name="customer" className="shadow-box pre-disabled" onSubmit={submitHandler}>
                            <div className="content-body p-3" style={{maxWidth: '400px'}}>
                                <div className="form-group">
                                    <Field field={{ name: 'date', type: 'text', label: 'Date', required: true }} value={inputs.date} handleChange={_handleChange} />
                                </div>

                                <div className="form-group">
                                    <Field field={{ name: 'customer', type: 'text', label: 'Customer', required: true }} value={inputs.customer} handleChange={_handleChange} />
                                </div>

                                <div className="form-group">
                                    <i className="position-bottom-right pointer" onClick={showLoading}><FontAwesomeIcon icon="truck-moving" /></i>
                                    <Field field={{ name: 'loading', type: 'text', label: 'Loading Reference', required: true }} value={inputs.loading} handleChange={_handleChange} />
                                </div>
                            </div>

                            <div className="d-flex d-flex align-items-center justify-content-between p-3 toolbar">
                                <button type="submit" className="btn" id="submit"><FontAwesomeIcon icon="save" /> Save</button>

                                { id !== 'new' ? <button type="button" className="btn btn-sm text-danger" onClick={handleDelete}><FontAwesomeIcon icon="trash" /> DELETE</button> : null }
                            </div>
                        </form>
                    </div>

                    { id !== 'new' ?
                        <div className="col-lg-6">
                            <div className="shadow-box">
                                <table className="table table-md edge-pad">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th className="text-center">Unit Price</th>
                                            <th className="text-right">Quantity</th>
                                            <th className="text-right">Total</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        { inputs.invoice ? inputs.invoice.map( ({ product, price, quantity }, i) => (
                                            <tr key={i}>
                                                <td>{product}</td>
                                                <td className="text-center">&#x20A6;{price}</td>
                                                <td className="text-right">{quantity}</td>
                                                <td className="text-right">&#8358;{price * quantity}</td>
                                            </tr>
                                        ) ) : null }
                                        <tr>
                                            <td colSpan="2" />
                                            <td>Total</td>
                                            <td className="text-right">&#x20A6;{inputs.amount}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    : null }
                </div>

                <Truck data={loading} />
            </>
        )
    }

    return null

}

export default connect()(AddOrder)
