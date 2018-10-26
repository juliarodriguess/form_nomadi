import React from 'react'
import './Input.css'

function Input(props) {
    return (
        <form className="form">
        <label htmlFor={props.htmlFor}>
        {props.children}
        </label>
        <input id={props.id} type={props.type} name={props.name} />
        </form>
    )
}

export default Input