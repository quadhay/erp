import React, { useEffect, useState } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Show from './Show'
import Add from './Add'
import './products.scss'
import Reviews from './Reviews'
import ProductsPrototype from './ProductsPrototype'

const Categories = () => <h2>This is the Categories of our products</h2>

const Products = ({ match, ...props }) => (
    <>
        <Route exact path={match.path} render={ routeProps => <Show {...routeProps} {...props} /> } />
        <Switch>
            <Route path={`${match.path}/add`} render={ () => <Add type={0} /> } />
            <Route path={`${match.path}/categories`} render={ routeProps => <Categories {...routeProps} {...props} />  } />
            <Route path={`${match.path}/prototype`} render={ routeProps => <ProductsPrototype {...routeProps} {...props} />  } />
            <Route path={`${match.path}/reviews`} render={ routeProps => <Reviews {...routeProps} {...props} />  } />
            <Route path={`${match.path}/:id`} render={ routeProps => <Add type={1} {...routeProps} {...props} /> } />
        </Switch>
    </>  
)

export default Products
