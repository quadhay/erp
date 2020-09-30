import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Truck = ({ data }) => {
    console.log(data)
    return (
        <div className="shadow-box truck">
            <table className="table table-md edge-pad">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th className="text-center">Unit Price</th>
                        <th className="text-right">Quantity</th>
                        <th className="text-right">Amount</th>
                    </tr>
                </thead>

                <tbody>
                    { data.map( ({ product, price, quantity }, i) => (
                        <tr key={i}>
                            <td>{product}</td>
                            <td className="text-center">&#x20A6;{price}</td>
                            <td className="text-right">{quantity}</td>
                            <td className="text-right">&#8358;{price * quantity}</td>
                        </tr>
                    ) ) }
                </tbody>
            </table>
        </div>
    )
}

export default Truck
