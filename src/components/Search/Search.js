import React from 'react'
import { MdSearch } from 'react-icons/md'
import './Search.css'
import { checkPropTypes } from 'prop-types';

function Search (props) {
    return (
        <div className="search">
            <input type="search" placeholder={props.placeholder}/>
            <button>
                    <MdSearch />
            </button>
        </div>
    )
}

export default Search