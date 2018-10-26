import React from 'react'
import Input from '../../components/Input/Input'
import Dropdown from '../../components/Dropdown/Dropdown'
import './Origem.css'

function Origem() {
    return (
        <main>
            <h1>Origem</h1>
            <Input 
            htmlFor='endOrigem'
            id='endOrigem'
            type='text'
            name='origem'>
            Endereço:
            </Input>
            <Dropdown
            htmlFor='homeType'
            id='homeType'
            name='homeType'
            value1='apartamento'
            option1='Apartamento'
            value2='casa'
            option2='Casa'>
            Tipo de imóvel:
            </Dropdown>
        </main>
    )
}

export default Origem

