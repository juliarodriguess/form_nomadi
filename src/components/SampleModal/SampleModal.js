import React from 'react'
import { MdClose } from 'react-icons/md'
import './SampleModal.css'

function SampleModal(props) {
    return (
        <section className="modal-main">
            <div className="modal-response">
                <button className="button-close" onClick={props.onClickClose}>
                    <MdClose />
                </button>
                <h3>{props.h3}</h3>
                <h5>{props.h5}</h5>
            </div>
        </section>
    )
}

export default SampleModal