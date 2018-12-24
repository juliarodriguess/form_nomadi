import React, {Component} from 'react'
import { dataPortage } from '../FormPortage/FormPortage';
import Input from '../../components/Input/Input'
import './Contact.css'

class Contact extends Component {
    constructor(props) {
        super(props)
    }

    getName = (event) => {
        dataPortage.contact.name = event.target.value
    }

    getPhone = (event) => {
        dataPortage.contact.phone = event.target.value
    }
    
    getMail = (event) => {
        dataPortage.contact.email = event.target.value
    }

    render() {
        return(
            <section className="contact">
                <h3>Dados pessoais</h3>
                <Input
                    htmlFor="nameContact"
                    id="nameContact"
                    type='text'
                    name="name"
                    placeholder="Seu nome e sobrenome"
                    onBlurCapture={this.getName}
                    >
                    Nome completo:
                </Input>
                <Input
                    htmlFor="telContact"
                    id="telContact"
                    type='text'
                    name="phone"
                    placeholder="(99) 99999-9999"
                    onBlurCapture={this.getPhone}
                    >
                    Telefone:
                </Input>
                <Input
                    htmlFor="mailContact"
                    id="mailContact"
                    type='mail'
                    name="email"
                    placeholder="email@email.com"
                    onBlurCapture={this.getMail}
                    >
                    E-mail:
                </Input>
            </section>
        )
    }
}

export default Contact