import React from 'react'
import '../sass/page-not-found.scss'

const NotFound = () => {
    
    return (
        <div className="page-not-found flex-center position-ref" style={{ height: '100%' }}>
            <div className="code">404</div>
            <div className="message" style={{ padding: '10px' }}>Not Found</div>
        </div>
    )

}

export default NotFound
