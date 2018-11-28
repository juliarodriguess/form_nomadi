import React from 'react'
import { MdSearch } from 'react-icons/md'
import './Search.css'

function Search () {
    return (
        <div>
            <input type="search"/>
            <button>
                    <MdSearch />
            </button>
        </div>
    )
}

export default Search