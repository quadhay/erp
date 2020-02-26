import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'

export const ExportCSV = ({ data, fileName, save }) => <Button variant="secondary" onClick={ () => save(data, fileName) }>Export</Button>

ExportCSV.defaultProps = {fileName: 'Excel'}

ExportCSV.propTypes = {
    data: PropTypes.array.isRequired,
    fileName: PropTypes.string.isRequired,
    save: PropTypes.func.isRequired
}
