import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = props => (
    <div className="sidebar-item sidebar-search">
        <div>
            <div className="input-group">
                <input type="text" className="form-control search-menu" placeholder="Search..." />
                <div className="input-group-append">
                    <span className="input-group-text">
                        <i aria-hidden="true"><FontAwesomeIcon icon="search" /></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
)

export default Search
                