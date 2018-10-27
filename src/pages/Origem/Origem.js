import React from 'react'
import Input from '../../components/Input/Input'
import Dropdown from '../../components/Dropdown/Dropdown'
import Complemento from '../../components/Complemento/Complemento'
import './Origem.css'

class Origem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'Default', 
            mostrarComplemento: false
        }
    }

    selectChange = (event) => {
        console.log(event.target)
        if(event.target.value === 'apartamento') {
            this.setState({mostrarComplemento: true})
        } else {
            return ''
        }
    }

    render() {
        return (
            <main>
                <h1>Origem</h1>
                <Input 
                htmlFor='adrStr'
                id='adrStr'
                type='text'
                name='adrStr'>
                Endereço:
                </Input>
                <Dropdown
                htmlFor='propertyType'
                id='propertyType'
                name='propertyType'
                value1='default'
                option1='Escolha o tipo do imóvel'
                value2='apartamento'
                option2='Apartamento'
                value3='casa'
                option3='Casa'
                selectChange={this.selectChange}>
                Tipo de imóvel:
                </Dropdown>
                {
                    this.state.mostrarComplemento &&
                    <Complemento/>
                }
            </main>
        )
    }
}


export default Origem

