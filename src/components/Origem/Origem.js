import React, { Component } from 'react'
import Input from '../../components/Input/Input'
import Dropdown from '../../components/Dropdown/Dropdown'
import RadioBtn from '../../components/RadioBtn/RadioBtn'
import Complement from '../../components/Complement/Complement'
import Comments from '../../components/Comments/Comments'
import ButtonNext from '../../components/ButtonNext/ButtonNext'
import './Origem.css'
import 'bootstrap/dist/css/bootstrap.css'

class Origem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'default',
            showComplement: false,
            showComments: false
        }
    }

    selectChange = (event) => {
        if (event.target.value === 'apartamento') {
            this.setState({ showComplement: true })
            this.setState({ showComments: false })
        }
        else if (event.target.value === 'casa') {
            this.setState({ showComments: true })
            this.setState({ showComplement: false })
        } else if (event.target.value === 'default') {
            this.setState({ showComments: false })
            this.setState({ showComplement: false })
        }
    }

    render() {
        return (
            <main className="origem">
                <h2>Origem</h2>
                <Input
                    htmlFor='adrStr'
                    id='adrStr'
                    type='text'
                    name='adrStr'>
                    Endereço:
                </Input>
                <fieldset class="radio-btn-origem">
                    <RadioBtn
                        htmlFor='apartamento'
                        id='apartamento'
                        name='propertyType'
                        value='apartamento'>
                        Apartamento
                    </RadioBtn>
                    <RadioBtn
                        htmlFor='casa'
                        id='casa'
                        name='propertyType'
                        value='casa'>
                        Casa
                    </RadioBtn>
                </fieldset>
                {
                    this.state.showComplement &&
                    <Complement />
                }
                {
                    this.state.showComments &&
                    <Comments />
                }
                <ButtonNext>Próximo</ButtonNext>
            </main>
        )
    }
}


export default Origem

