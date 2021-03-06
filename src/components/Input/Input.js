import React from 'react'
import './Input.css'

function Input(props) {  
    return (
        <fieldset className="input">
        <label htmlFor={props.htmlFor}>
        {props.children}
        </label>
        <input 
            id={props.id} 
            type={props.type} 
            name={props.name} 
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onBlurCapture={props.onBlurCapture}
        />
        </fieldset>
    )
}

export default Input