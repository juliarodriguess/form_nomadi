import React from 'react'
import './ButtonNext.css'

function ButtonNext(props) {
    return (
        <a href={props.href} id="button-next">
            {props.children}
        </a>
    )
}

export default ButtonNext