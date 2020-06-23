import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import routes from '../../config/routes'
import AppRoute from '../AppRoute'
import NotFound from '../NotFound'

const Content = ({ fontSize, contentBox, hideSidebar }) => {
    
    const box = {
        backgroundColor: "#fff",
        padding: "20px 10px",
        borderRadius: "1px",
        boxShadow: "rgba(156, 156, 156, 0.75) 3px 3px 10px 0",
        //minHeight: "calc(100vh - #{$top} - .5rem)"
    }

    return (
        <main className="page-content" style={{fontSize: fontSize}}>
            <div id="overlay" className="overlay" onClick={hideSidebar}></div>

            <div className="container-fluid pt-3" style={{ height: 'inherit' }}>
                <div className="content-area" style={contentBox ? box : null}>
                    <Switch>
                        { routes.map( (route) => <AppRoute key={route.id} {...route} /> ) }                    
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        </main>
    )
    
}

Content.propTypes = {
    fontSize: PropTypes.string.isRequired,
    hideSidebar: PropTypes.func.isRequired,
    contentBox: PropTypes.bool,
}

export default Content        
