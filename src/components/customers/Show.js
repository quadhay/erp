import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DersureTable from '../fragment/Table'
import { _object } from '../../helpers'
import user from '../../images/user.jpg'

const ShowCustomers = ({ match, history, response }) => {
    const { loaded, data } = response

    if ( loaded ) {
        if ( data.length > 0 ) {
            const columns = [
                {
                    name: 'name',
                    label: 'Customer',
                    options: {
                        render: (cellData, data) => <Link to={`${match.url}/${data.id}`} className="d-flex align-items-center">
                            <img src={user} alt="IMG" className="img-fluid rounded-circle mr-2" style={{ width: '25px', height: '25px' }} />
                            {cellData}
                        </Link>
                    }
                },
                { name: 'city', label: 'Location', options: { filterable: true } },
                { name: 'order', label: 'Orders' },
                {
                    name: 'totalspent',
                    label: 'Total Spent',
                    options: { render: cellData => cellData.toFixed(2) } 
                },
                { name: 'lastseen', label: 'Last Seen' },
            ]

            const options = {
                create: true,
                select: true,
                shadow: true,
                onRowClick: ({rowData}) => history.push(`${match.path}/${rowData.id}`),
                customStackRender: props => {
                    const { id, lastseen, name, order, totalspent } = props.data[props.dataIndex]
                    
                    return (
                        <div className="card">
                            <div className="card-header flexer2 bg-white">
                                <div className="flexer">
                                    <img src={user} alt="IMG" className="img-fluid rounded-circle" style={{ width: '45px', height: '45px' }} />
                                    <h5 className="mx-3 mb-0 text-black">{name}</h5>                                    
                                </div>

                                <Link to={`${match.url}/${id}`}><FontAwesomeIcon icon="pen" /></Link>
                            </div>

                            <div className="card-body">
                                <p className="card-text">Visited Since {lastseen}</p>
                                <p className="card-text">Orders: {order}</p>
                                <p className="card-text">Total Spent: {totalspent.toFixed(2)}</p>
                            </div>

                            <div className="px-3 pb-3">
                                <span className="badge badge-pill badge-secondary p-2 mx-1">Regular</span>
                                <span className="badge badge-pill badge-secondary p-2 mx-1">Returns</span>
                                <span className="badge badge-pill badge-secondary p-2 mx-1">Reviewer</span>
                            </div>
                        </div>
                    )
                }
            }

            return <DersureTable title="Customers" columns={columns} data={data} options={options} />
        } else {
            return <Link to={`${match.path}/create`} className="btn btn-sm anchor m-5"><FontAwesomeIcon icon="plus" /> Create Customer</Link>
        }
    }

    return null
}

export default ShowCustomers
