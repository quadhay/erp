import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Field, DateTime, ProcessError } from '../fragment'
import { cashFlowService, AccountService, PaymentService } from '../../services'
import { alertActions } from '../../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddCashFlow = ({ dispatch, type, match, history }) => {
    const [ inputs, setInputs ] = useState({})
    const [ currency, setCurrency ] = useState([])
    const [ method, setMethod ] = useState([])
    const [ account, setAccount ] = useState([])
    const [ error, setError ] = useState(null)

    useEffect( () => {
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
    }, [inputs.account_id] )

    const _handleChange = (e) => {
        setInputs({ ...inputs, ...{ [e.target.name]: e.target.value } })
        //e.persist()
    }

    const handleAccount = (e) => {
        const acc = account.find( ({id}) => id === parseInt(e.target.value) )
        _handleChange(e)
        setCurrency(acc ? acc.currency : [])
    }

    const handleDate = date => setInputs({ ...inputs, ...{ date } })

    const submitHandler = (e) => {
        cashFlowService.create(inputs).then(
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
        )

        e.preventDefault()
    }

    const handleUndo = () => {
        console.log(inputs.id)
    }

    const handleDelete = () => {
        cashFlowService.delete(inputs.id).then(
            (response) => {
                dispatch(alertActions.success(<div>{response.data} <button className="btn btn-sm text-info" onClick={handleUndo}>UNDO</button></div>))
                history.push('/cashflow')
            },
            error => dispatch(alertActions.error( error.response && error.response.status !== 500 ? error.response.data : error.toString() ))
        )
    }

    const fields = [
        { name: 'account_id', type: 'select', label: 'Account', options: account, required: true },
        { name: 'currency_id', type: 'radio', label: 'Currency', values: currency, required: true },
        { name: 'payment_method_id', type: 'select', label: 'Payment Method', options: method, required: true },
        { name: 'amount', type: 'text', label: 'Amount', required: true },
        { name: 'date', type: 'text', label: 'Date', required: true },
        { name: 'comments', type: 'textarea', label: 'Comments' },
    ]

    if ( type && error ) {
        return <p className="text-danger">{error}</p>
    }

    return (
        <div className="form-wrapper mx-auto py-4 px-3">
            <h4 className="heading mb-3">{ type === 0 ? 'Add' : 'Update' } Cash flow</h4>

            <form name="cashflow" className="pre-disabled" onSubmit={submitHandler}>
                <select name="type" className="custom-select custom-select-sm d-inline" value={inputs['type']} onChange={_handleChange} required>
                    { ! type ? <option value="">Type</option> : null }
                    <option value="1">CREDIT</option>
                    <option value="0">DEBIT</option>
                </select>

                <hr />

                { fields.map (
                    (field) => field.name === 'date'
                    ? <DateTime key={field.name} name={field.name} label={field.label} value={inputs[field.name]} handleChange={handleDate} />
                    : <Field key={field.name} field={field} value={inputs[field.name]} handleChange={field.name === 'account_id' ? handleAccount : _handleChange} />
                ) }

                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn" id="submit"><FontAwesomeIcon icon="save" /> Save</button>
                    { type ? <button type="button" className="btn" onClick={handleDelete}><FontAwesomeIcon icon="trash" /> Delete</button> : null }                    
                </div>
            </form>
        </div>
    )

}

export default connect()(AddCashFlow)
