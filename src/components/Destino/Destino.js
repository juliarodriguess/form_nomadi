import React from 'react'
import { dataPortage } from '../../components/FormPortage/FormPortage'
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
        dataPortage.destination.propertyType = currentValue
    }
    getAddress = (event) =>{
        dataPortage.destination.address = event.target.value
    }
    getValueApartament = (event) => {
        let aptNumber = event.target.value
        dataPortage.destination.apartment = aptNumber  
    }

    getValueLift = (event) => {
        let hasLift = event.target.value
        dataPortage.destination.hasLift = hasLift   
    }

    getValueStage = (event) => {
        let stage = event.target.value
        dataPortage.destination.stage = stage  
    }

    getValueComments = (event) => {
        let comments = event.target.value
        dataPortage.destination.comments = comments  
    }
    
    render() {
        return (
            <section className="address">
                <h3>Destino</h3>
                <Input 
                htmlFor="addressDestiny"
                id="addressDestiny"
                type='text'
                name="addressDestiny"
                placeholder="Aqui vai o lugar onde vamos deixar no final"
                onBlurCapture={this.getAddress}>
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
                    htmlForNo="noHasLiftDestino"
                    idYes="yesHasLiftDestino"
                    htmlForYes="yesHasLiftDestino"
                    name="hasLiftDestino"
                    id="aptDestino"
                    htmlFor="aptDestino"
                    onBlurCapture={this.getValueApartament}
                    onChange={this.getValueLift}
                    onBlurCaptureStage={this.getValueStage}
                    />
                }
                {
                    this.state.showComments &&
                    <Comments
                    onBlurCapture={this.getValueComments}
                    />
                }
            </section>
        )
    }
}


export default Destino

