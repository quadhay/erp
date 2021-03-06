import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import routes from '../routes'
import { NotFound } from '../error'
import { withTitle } from '../hoc'

const Content = ({ fontSize, contentBox, hideSidebar, ...props }) => {
    
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

            <div className="container-fluid pt-2" style={{ height: 'inherit' }}>
                <div className="content-area" style={contentBox ? box : null}>
                    <Switch>
                        <Redirect from="/:url*(/+)" to={useLocation().pathname.slice(0, -1)} />

                        {
                            routes.map( (route) => <Route key={route.id} exact={route.exact} path={route.path} render={routeProps => <route.component {...routeProps} routes={route.routes} {...props} />} /> ) 
                        }       
                                 
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

export default withTitle(Content)        
