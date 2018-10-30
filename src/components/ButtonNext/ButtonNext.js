import React from 'react'

function ButtonNext(props) {
    return (
        <button className="button">
            {props.children}
        </button>
    )
}

export default ButtonNext