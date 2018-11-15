import React from 'react'
import './SampleBtn.css'
import 'bootstrap/dist/css/bootstrap.css'

function SampleBtn(props) {
    return (
        <button 
            className="btn btn-primary mt-2 w-75 mw-100 p-2" id="component-button-sample" 
            onClick={props.onClick}
        >
                {props.children}
        </button>
    )
}

export default SampleBtn