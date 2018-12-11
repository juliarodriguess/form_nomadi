import React from 'react'
import './SampleBtn.css'
import 'bootstrap/dist/css/bootstrap.css'

function SampleBtn(props) {
    let id = "component-button-sample";
    if (props.desabilitado) {
        id = " botao--desabilitado";
    }
    return (
        <button 
            className="btn btn-primary mt-2 w-75 mw-100 p-2" 
            id={id} 
            onClick={props.onClick}
            disabled={props.desabilitado}
        >
                {props.children}
        </button>
    )
}

export default SampleBtn