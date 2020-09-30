import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import truncate from 'lodash/truncate'
import fakeReviews from './reviews.service'
import { alertActions } from '../../actions'
import { _object, csv, dateFormatter } from '../../helpers'
import DersureTable from '../fragment/Table'
import { Rating } from '../fragment'

const Reviews = ({ dispatch, setTitle }) => {
    setTitle('Product Reviews')

    const [ data, setData ] = useState([])
    const [ loaded, setLoaded ] = useState(false)
    const translateStatus = ['pending', 'accepted', 'rejected']

    useEffect(() => {
        let faker = require('faker'), fake = [], _date = new dateFormatter()

        for ( let counter = 1; counter <= 60; counter++ ) {
            let obj = {
                id: counter,
                date: _date.getTime(faker.date.recent()),
                customer: faker.name.findName(),
                product: faker.commerce.productName(),
                rating: faker.random.number({ min: 1, max: 5 }),
                comment: faker.lorem.words(20),
                status: translateStatus[faker.random.number(2)],
            }

            let arr = [
                _date.getTime(faker.date.recent()),
                faker.name.findName(),
                faker.commerce.productName(),
                faker.random.number({ min: 1, max: 5 }),
                faker.lorem.words(20),
                translateStatus[faker.random.number(2)],
            ]

            fake.push(arr)
        }
        
        setData(fake)
        setLoaded(true)

        fakeReviews()
            .then(
                response => {
                    //setData(response.data)
                    //setLoaded(true)
                },
                error => {
                    let msg
                    if ( error.response ) {
                        msg = error.response.status !== 500 ? error.response.data : 'Oops, something went wrong'
                    } else {
                        msg = error.toString()
                    }
                    dispatch(alertActions.error(msg))
                }
            )  
    }, [])

    if ( loaded ) {    
        if ( data.length > 0 ) {
            const columns = ['Date', 'Customer', 'Product', 'Rating', 'Comment', 'Status']
            const options = {
                sortOrder: {
                    name: 'date',
                    direction: 'desc',
                }
            }
            const columns2 = [
                { name: 'date', label: 'Date', options: { filterable: false, sortable: true, } },
                { name: 'customer', label: 'Customer', options: { filterable: true, sortable: true, } },
                { name: 'product', label: 'Product', options: { filterable: true, sortable: true, } },
                { name: 'rating', label: 'Rating', options: { filterable: false, sortable: true, } },
                { name: 'comment', label: 'Comment', options: { filterable: false, sortable: false, } },
                { name: 'status', label: 'Status', options: { filterable: true, sortable: true, } },
            ]

            const columnDefs = [
                {
                    render: (data) => <Rating rate={data} />,
                    targets: [3]
                },                
                {
                    render: text => truncate( text, { length: 50, separator: /,? +/ } ),
                    targets: [4]
                },
                {
                    sortable: false,
                    targets: [0, 4]
                },
                {
                    visible: false,
                    targets: 5
                },          
            ]

            return <DersureTable
                title="Product Reviews"
                columns={columns}
                data={data}
                options={options}
                columnDefs={columnDefs}
            />                                   
        } else {
            return <p className="h5">No results found</p>
        }
    }

    return null
}

export default connect()(Reviews)
