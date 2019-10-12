import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import routes from '../../config/routes'
import AppRoute from '../AppRoute'
import NotFound from '../NotFound'

const Content = ({ fontSize, hideSidebar }) => {

    return (
        <main className="page-content" style={{fontSize: fontSize}}>
            <div id="overlay" className="overlay" onClick={hideSidebar}></div>

            <div className="container-fluid px-5 pt-4" style={{ height: 'inherit' }}>
                <Switch>
                    { routes.map( (route) => <AppRoute key={route.id} {...route} /> ) }                    
                    <Route component={NotFound} />
                </Switch>
            </div>
        </main>
    )
    
}

Content.propTypes = {
    fontSize: PropTypes.string.isRequired,
    hideSidebar: PropTypes.func.isRequired,   
}

export default Content        
