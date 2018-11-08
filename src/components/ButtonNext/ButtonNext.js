import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonNext.css'
import 'bootstrap/dist/css/bootstrap.css'

function ButtonNext(props) {
    return (
        <Link to={props.url} className="btn btn-primary w-75 mw-100 p-2" id="component-button-next">
            {props.children}
        </Link>
    )
}

export default ButtonNext