import React, { useState } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withDevice } from '../hoc'
import Details from './details'
import { Route } from 'react-router-dom'
import Navs from '../fragment/Navs'
import Uploader from './uploader'
import DersureEditor from './DersureEditor'

const Sample = props => <h4 className="text-info">{props.name}</h4>

const Prototyping = ({ match, setTitle }) => {
    setTitle('Prototype for Single Product View')

    const [ inputs, setInputs ] = useState({})

    const id = match.params.id

    const submitHandler = (e) => {
        e.preventDefault()
    }

    const _handleChange = (e) => setInputs({ ...inputs, ...{ [e.target.name]: e.target.value } })

    const handleDelete = () => {}

    return (            
        <div className="form2">
            <form className="shadow-box" onSubmit={submitHandler}>
                <div className="border-bottom">
                    <Navs data={[
                        { id: 1, label: 'Details', uri: '' },
                        { id: 2, label: 'Image', uri: 'image' },
                        { id: 3, label: 'Description', uri: 'description' },
                        { id: 4, label: 'Reviews', uri: 'reviews' }
                    ]} />
                </div>

                <Route exact path={match.url} render={ () => <Details inputs={inputs} handleChange={_handleChange} /> } />

                <Route path={`${match.url}/image`} render={ () => <Uploader /> } />

                <Route path={`${match.url}/description`} render={ () => <DersureEditor /> } />

                <Route path={`${match.url}/reviews`} render={ () => <Sample name="Review" /> } />

                <div className="d-flex d-flex align-items-center justify-content-between p-3 toolbar" style={{backgroundColor: '#f5f5f5'}}>
                    <button type="submit" className="btn" id="submit"><FontAwesomeIcon icon="save" /> Save</button>

                    { id !== 'create' ? <button type="button" className="btn btn-sm text-danger" onClick={handleDelete}><FontAwesomeIcon icon="trash" /> DELETE</button> : null }
                </div>
            </form>
        </div>
    )
}

export default connect()(withDevice(Prototyping))
