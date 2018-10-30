import React from 'react'
import Input from '../Input/Input'
import Dropdown from '../Dropdown/Dropdown'
import './Complement.css'

function Complement () {
    return(
        <section>
        <Input 
        htmlFor='aptNumber'
        id='aptNumber'
        type='text'
        name='aptNumber'>
        Apartamento:
        </Input>
        <Input 
        htmlFor='stgNumber'
        id='stgNumber'
        type='text'
        name='stgNumber'>
        Andar:
        </Input>
        <Dropdown
        htmlFor='hasLift'
        id='hasLift'
        name='hasLift'
        value1='default'
        option1='Escolha a opção'
        value2='s'
        option2='Sim'
        value3='n'
        option3='Não'>
        Tem elevador?
        </Dropdown>
        </section>
    )
}

export default Complement