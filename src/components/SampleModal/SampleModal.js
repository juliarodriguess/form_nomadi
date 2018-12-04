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
                <div className="modal-content">
                    {props.children}
                </div>
            </div>
        </section>
    )
}

export default SampleModal