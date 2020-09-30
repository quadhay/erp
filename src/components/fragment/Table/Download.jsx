import React from 'react'
import PropTypes from 'prop-types'
import { csv } from '../../../helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Download = ({title, data}) => <button className="btn btn-sm" onClick={ () => csv(data, title) }><FontAwesomeIcon icon="download" /><span className="d-none d-sm-inline-block ml-1">Export</span></button>

Download.propTypes = { title: PropTypes.string.isRequired, data: PropTypes.array.isRequired }
