import React, { Component } from 'react'
import Input from '../../components/Input/Input'
import Dropdown from '../../components/Dropdown/Dropdown'
import Complement from '../../components/Complement/Complement'
import Comments from '../../components/Comments/Comments'
import ButtonNext from '../../components/ButtonNext/ButtonNext'

class PortageDate extends Component {
    render() {
        return (
            <section>
                <Dropdown 
                htmlFor= 'date-flexible'
                id='date-flexible'
                name='date-flexible'
                value1='default'
                option1='Escolha uma opção'
                value2='s'
                option2='Sim'
                value3='n'
                option3='Não'>
                Sua data de mudança é flexível?
                </Dropdown>
            </section>
        )
    }
}

export default PortageDate