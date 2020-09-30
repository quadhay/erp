import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation, useRouteMatch } from 'react-router-dom'
import classNames from 'classnames'

const Navs = props => {
    const { path } = useRouteMatch()
    const { pathname } = useLocation()

    return (
        <ul className="nav">
            {
                props.data.map( ({id, label, uri}) => {
                    const itemPath = uri ? `${path}/${uri}` : path
                    return (
                        <li key={id} className="nav-item">
                            <Link to={itemPath} className={classNames('nav-link no-style', { active: itemPath === pathname })}>{label}</Link>
                        </li>                        
                    )
                })
            }
        </ul>
    )
}

Navs.propTypes = { data: PropTypes.array.isRequired }

export default Navs
