import React from 'react'
import { useTitle } from '../hooks'

const withTitle = Component => {
    return (props) => {
        return <Component setTitle={useTitle} {...props} />
    }
}

export default withTitle