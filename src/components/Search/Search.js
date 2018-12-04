import React from 'react'
import { MdSearch } from 'react-icons/md'
import './Search.css'

function Search (props) {
    return (
        <div className="search">
            <input id="input-search" type="search" placeholder={props.placeholder} onChange={props.onChange}/>
            <button onClick={props.onClick}>
                <MdSearch />
            </button>
        </div>
    )
}

export default Search