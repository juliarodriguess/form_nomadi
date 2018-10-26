import React from 'react'
import './Input.css'

function Input(props) {
    return (
        <input id={props.id} name={props.name} type={props.type} placeholder={props.placeholder}/>
    )
}

export default Input