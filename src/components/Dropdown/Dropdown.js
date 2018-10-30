import React from 'react'
import './Dropdown.css'

function Dropdown (props) {
    return (
    <form>
        <label htmlFor={props.htmlFor}>
            {props.children}
        </label>
        <select id={props.id} name={props.name} onChange={props.selectChange}>
            <option value={props.value1}>{props.option1}</option>
            <option value={props.value2}>{props.option2}</option>
            <option value={props.value3}>{props.option3}</option>
            <option value={props.value4}>{props.option4}</option>
        </select>
    </form>
    )
}

export default Dropdown