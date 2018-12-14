import React, { Component, Fragment } from 'react'
import { dataPortage } from '../../components/FormPortage/FormPortage'
import Input from '../../components/Input/Input'
import Complement from '../../components/Complement/Complement'
import Comments from '../../components/Comments/Comments'
import 'bootstrap/dist/css/bootstrap.css'

let campos = [
    {
        id: "ap",
        name: "tipo-origem",
        propertyType: "apartamento",
        children: "Apartamento"
    },
    {
        id: "casa",
        name: "tipo-origem",
        propertyType: "casa",
        children: "Casa"
    },
]

class Origem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            propertyType: '',
            showComplement: false,
            showComments: false,
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
        dataPortage.origin.propertyType = currentValue
    }
    getAddress = (event) =>{
        dataPortage.origin.address = event.target.value
    }
    getValueApartament = (event) => {
        let aptNumber = event.target.value
        dataPortage.origin.apartment = aptNumber  
    }

    getValueLift = (event) => {
        let hasLift = event.target.value
        dataPortage.origin.hasLift = hasLift   
    }

    getValueStage = (event) => {
        let stage = event.target.value
        dataPortage.origin.stage = stage   
    }

    getValueComments = (event) => {
        let comments = event.target.value
        dataPortage.origin.comments = comments  
    }

    render() {
        return (
            <section className="address">
                <h3>Origem</h3>
                <Input
                    htmlFor="addressOrigin"
                    id="addressOrigin"
                    type='text'
                    name="addressOrigin"
                    placeholder="Fala aqui onde vamos retirar"
                    onBlurCapture={this.getAddress}
                    >
                    Endereço:
                </Input>
                <fieldset className="property-options" >
                    <legend>Tipo de imóvel:</legend>
                    {campos.map((data) => {
                        return (
                            <Fragment>
                                <input type="radio"
                                    id={data.id}
                                    name={data.name}
                                    value={data.propertyType}
                                    onChange={this.selectedChangeOrigem}
                                />
                                <label className="property-options" htmlFor={data.id}
                                    children={data.children} />
                            </Fragment>
                        )
                    })}
                </fieldset>
                {
                    this.state.showComplement &&
                    <Complement
                        idNo="noHasLiftOrigem"
                        htmlForNo="noHasLiftOrigem"
                        idYes="yesHasLiftOrigem"
                        htmlForYes="yesHasLiftOrigem"
                        name="hasLiftOrigem"
                        id="aptOrigem"
                        htmlFor="aptOrigem"
                        onBlurCapture={this.getValueApartament}
                        onChange={this.getValueLift}
                        onBlurCaptureStage={this.getValueStage}/>
                }
                {
                    this.state.showComments &&
                    <Comments 
                    onBlurCapture={this.getValueComments}/>
                }
            </section>
        )
    }
}


export default Origem
