import React from 'react'
import './Dropdown.css'

function Dropdown(props) {
    return (
        <form>
            <label htmlFor={props.htmlFor}>
                {props.children}
            </label>
            <select id={props.id} name={props.name}>
                <option value={props.value1}>{props.option1}</option>
                <option value={props.value2}>{props.option2}</option>
            </select>
        </form>
    )
}

export default Dropdown