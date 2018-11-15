import React from 'react'
import { MdClose } from 'react-icons/md'
import Input from '../Input/Input'
import SampleBtn from '../SampleBtn/SampleBtn'
import './Modal.css'

function Modal(props) {
    return (
        <section className="modal-main">
            <form className="modal-nomadi">
                <button className="button-close" onClick={props.onClickClose}>
                    <MdClose />
                </button>
                <fiedlset className="title-modal">
                    <h3>{props.h3}</h3>
                    <h5>{props.h5}</h5>
                </fiedlset>
                <fieldset className="inputs-modal">
                    <Input
                        htmlFor={props.htmlFor1} 
                        id={props.id1}
                        type={props.type1}
                        name={props.name1}
                        value={props.value1}
                        children={props.children1}/>
                    <Input
                        htmlFor={props.htmlFor2} 
                        id={props.id2}
                        type={props.type2}
                        name={props.name2}
                        value={props.value2}
                        children={props.children2}/>
                </fieldset>
                <div className="button-modal">
                    <SampleBtn onClick={props.onClick}>Enviar</SampleBtn>
                </div>
            </form>
        </section>
    )
}
export default Modal