import React from 'react'
import { deviceDetect, BrowserView, MobileView } from 'react-device-detect'

const withDevice = Component => {
    return (props) => {
        return <Component BrowserView={BrowserView} MobileView={MobileView} device={deviceDetect()} {...props} />
    }
}

export default withDevice