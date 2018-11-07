import React from 'react'
import Input from '../../components/Input/Input'
import Complement from '../../components/Complement/Complement'
import Comments from '../../components/Comments/Comments'
import RadioBtn from '../../components/RadioBtn/RadioBtn'
import './Destino.css'

class Destino extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '', 
            showComplement: false,
            showComments: false
        }
    }

    selectedChangeDestino = (event) => {
        console.log(event.target.value)
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
                <h2>Destino</h2>
                <Input 
                htmlFor='adrStr'
                id='adrStr'
                type='text'
                name='adrStr'>
                Endereço:
                </Input>
                <fieldset className="property-options">
                    <legend>Tipo de imóvel:</legend>
                    <input type="radio"
                        id="apDestino"
                        name="tipo-destino"
                        value="apartamento"
                        onChange={this.selectedChangeDestino}
                    />
                    <label class="radio-btn" 
                    htmlFor="apDestino"
                    children="Apartamento"/>

                    <input type="radio"
                        id="casaDestino"
                        name="tipo-destino"
                        value="casa"
                        onChange={this.selectedChangeDestino}
                    />
                    <label class="radio-btn" htmlFor="casaDestino"
                    children="Casa"/ >
                </fieldset>
                {
                    this.state.showComplement &&
                    <Complement/>
                }
                {
                    this.state.showComments &&
                    <Comments/>
                }
            </section>
        )
    }
}


export default Destino

