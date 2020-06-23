import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cashFlowService } from '../../services'
import { _sum } from '../../helpers/variable'

const Account = ({ match, location, history }) => {
    const [ data, setData ] = useState([])
    const [ loaded, setLoaded ] = useState(false)

    useEffect(() => {
        cashFlowService.getAll()
            .then(
                response => {
                    response.data.map( data => ['comments', 'id'].forEach( k => delete data[k] ) )
                    setData(response.data)
                    setLoaded(true)
                }
            )        
    }, [])

    if ( loaded ) {
        const acc = [...new Set(data.map( item => `${item.currency}|${item.symbol}|${item.account}|${item.number}` ))]
    
        return (
            <div className="content-body container">
                <div className="row bottom-margin">
                    { acc.map( (v, i) => {
                        const _account = v.split('|')
                        const singleAcc = data.filter( ({ currency, account }, i, arr) => {
                            ['date', 'symbol', 'payment_method', 'number'].forEach( k => delete arr[i][k] )
                            return currency === _account[0] && account === _account[2]
                        } )
                        const total = _sum(singleAcc, 'amount').toFixed(2)
                        
                        return (
                            <div key={i} className="col-sm-12 col-md-4 col-lg-3">
                                <div className="card p-3 flex-row align-items-center">
                                    <i className="icon h3 mr-2"><FontAwesomeIcon icon="coins" /></i>
                                    <div>
                                        <label className="small">{_account[2]}</label>
                                        <p className="h5">{_account[1]}{total}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    } ) }                    
                </div>
            </div>
        )
    }

    return null
}

export default Account
