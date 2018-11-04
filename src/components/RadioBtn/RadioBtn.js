import React from 'react'
import './RadioBtn.css'

function RadioBtn(props) {
    return (
        <label class="radio-btn" htmlFor={props.htmlFor}><input type="radio" id={props.id} name={props.name} value={props.value}/>{props.children}</label>
    )
}

export default RadioBtn