import React, { Component } from 'react'
import Input from '../../components/Input/Input'
import Complement from '../../components/Complement/Complement'
import Comments from '../../components/Comments/Comments'
import './Origem.css'
import 'bootstrap/dist/css/bootstrap.css'

class Origem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            showComplement: false,
            showComments: false
        }
    }

    selectedChangeOrigem = (event) => {
        const currentValue = event.target.value
        if (currentValue === 'apartamento') {
            this.setState({ showComplement: true })
            this.setState({ showComments: false })
        } else if (currentValue === 'casa') {
            this.setState({ showComments: true })
            this.setState({ showComplement: false })
        }
    }


    render() {
        return (
            <section className="origem">
                <h2>Origem</h2>
                <Input
                    htmlFor='adrStr'
                    id='adrStr'
                    type='text'
                    name='adrStr'>
                    Endereço:
                </Input>
                <fieldset className="property-options" >
                    <legend>Tipo de imóvel:</legend>
                    <input type="radio"
                        id="ap"
                        name="tipo-origem"
                        value="apartamento"
                        onChange={this.selectedChangeOrigem}
                    />
                    <label className="property-options"
                    htmlFor="ap"
                    children="Apartamento"/>

                    <input type="radio"
                        id="casa"
                        name="tipo-origem"
                        value="casa"
                        onChange={this.selectedChangeOrigem}
                    />
                    <label className="property-options" htmlFor="casa"
                    children="Casa"/ >
                </fieldset>
                {
                    this.state.showComplement &&
                    <Complement />
                }
                {
                    this.state.showComments &&
                    <Comments />
                }
            </section>
        )
    }
}


export default Origem
