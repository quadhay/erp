import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Rating = ({rate}) => {
    const ratings = []
    for ( let i = 1; i < 6; i++ ) {
        ratings.push(<FontAwesomeIcon key={i} icon="star" className={classNames('rating', { checked: i <= rate })} />)
    }

    return ratings
}

Rating.propTypes = { rate: PropTypes.number.isRequired }
