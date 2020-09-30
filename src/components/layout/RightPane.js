import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import ChangeFontSize from './ChangeFontSize'

const RightPane = ({ togglePinSidebar, changeFontSize }) => {

    const [ fullscreen, setFullscreen ] = useState(false)
   
    useEffect( () => {
        document.addEventListener('fullscreenchange', () => setFullscreen(!fullscreen) )
    } )

    const screenModeHandler = () => {
        if ( fullscreen )
            document.exitFullscreen()
        else
            document.getElementById('app').requestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
    }

    const scrollToTop = () => document.getElementsByClassName('page-content')[0].scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <div className="rightbar-wrapper">
            <div className="rightbar-content d-flex flex-column align-items-center h-100">
                <div className="h-50 d-flex flex-column  justify-content-start">
                    <div>
                        <button type="button" className="cb0001" data-toggle="tooltip" data-placement="left" title="Back to home">
                            <FontAwesomeIcon icon="home" />
                        </button>
                    </div>
                    
                    <div>
                        <button type="button" className="cb0001" data-toggle="tooltip" data-placement="left" title="Pin sidebar" onClick={togglePinSidebar}>
                            <FontAwesomeIcon icon="thumbtack" />
                        </button>
                    </div>

                    <KeyboardEventHandler handleKeys={[ 'ctrl+q', 'alt+b' ]} onKeyEvent={ (key, e) => togglePinSidebar() } />

                    <div>
                        <button type="button" className="cb0001" data-toggle="tooltip" data-placement="left" title="Search">
                            <FontAwesomeIcon icon="search" />
                        </button>
                    </div>
                </div>
                
                <div className="h-50 d-flex flex-column justify-content-end">
                    <ChangeFontSize event={changeFontSize} />

                    <div>
                        <button type="button" className="cb0001" data-toggle="tooltip" data-placement="left" title="Fullscreen mode" onClick={screenModeHandler}>
                            <FontAwesomeIcon icon={fullscreen ? 'compress' : 'expand'} />
                        </button>
                    </div>

                    <div>
                        <button type="button" className="cb0001" data-toggle="tooltip" data-placement="left" title="Scroll to top" onClick={scrollToTop}>
                            <FontAwesomeIcon icon="arrow-up" />
                        </button>
                    </div>
                </div>
            </div> 
        </div>
    )  
    
}

RightPane.propTypes = {
    togglePinSidebar: PropTypes.func.isRequired,
    changeFontSize: PropTypes.func.isRequired,  
}

export default RightPane
