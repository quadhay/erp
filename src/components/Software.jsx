import React from 'react'
import { useSelector } from 'react-redux'
import { isBoolean, startCase } from 'lodash'
import { withDevice } from './hoc'

const CustomList = props => (
    <ul className="custom-list">
        { props.data.map( ( {label, text}, index ) => isBoolean(text) ? null : (
            <li key={index} className="clearfix">
                <label>{label}</label>
                <span>{text}</span>
            </li>            
        ) ) }
    </ul>
)

const Software = ({device, setTitle}) => {
    setTitle('Inventory Management System (IMS)')
    
    const user = useSelector(state => state.auth.user)
    const specs = Object.keys(device).map( key => ({ label: startCase(key), text: device[key] }) )
    
    return (
        <>
            <div>
                <h4 className="mb-3">Account</h4>
                <CustomList data={[
                    { label: 'Name', text: user.name },
                    { label: 'Email', text: user.email },
                    { label: 'Role', text: 'Administrator' },
                    { label: 'Token', text: 'Available' }
                ]} />
            </div>

            <hr />

            <div>
                <h4 className="mb-3">Device specifications</h4>
                <CustomList data={specs} />
            </div>

            <hr />

            <div>
                <h4 className="mb-3">Support</h4>
                <CustomList data={[
                    { label: 'Manufacturer', text: 'Dersure Limited' },
                    { label: 'Website', text: <a href="https://dersure.com" target="_blank">Online support</a> }
                ]} />                
            </div>            
        </>    
    )
}

export default withDevice(Software)
