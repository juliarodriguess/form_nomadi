import React from 'react'
import Input from '../../components/Input/Input'
import Complement from '../../components/Complement/Complement'
import Comments from '../../components/Comments/Comments'

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
            <section className="address">
                <h2>Destino</h2>
                <Input 
                htmlFor="addressDestiny"
                id="addressDestiny"
                type='text'
                name="addressDestiny"
                // value={this.props.addressDestiny}
                onChange={this.props.onChange}>
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
                    <label className="radio-btn" 
                    htmlFor="apDestino"
                    children="Apartamento"/>

                    <input type="radio"
                        id="casaDestino"
                        name="tipo-destino"
                        value="casa"
                        onChange={this.selectedChangeDestino}
                    />
                    <label className="radio-btn" htmlFor="casaDestino"
                    children="Casa"/ >
                </fieldset>
                {
                    this.state.showComplement &&
                    <Complement
                    idNo="noHasLiftDestino"
                    idYes="yesHasLiftDestino"
                    name="hasLiftDestino"/>
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

