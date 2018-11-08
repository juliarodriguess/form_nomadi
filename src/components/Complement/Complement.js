import React, { Component } from 'react'
import Input from '../Input/Input'
import './Complement.css'

class Complement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: ''
        }
    }

    handleOptionChange = (changeEvent) => {
        this.setState({
          selectedOption: changeEvent.target.value
        }) 
      }
    
    render(props) {
        return(
            <fieldset className="complement-property">
                <fieldset className="apt">
                    <Input 
                        htmlFor='aptNumber'
                        id='aptNumber'
                        type='number'
                        name='aptNumber'>
                        Apartamento:
                    </Input>
                    <Input 
                        htmlFor='stgNumber'
                        id='stgNumber'
                        type='number'
                        name='stgNumber'>
                        Andar:
                    </Input>
                </fieldset>
                <fieldset className="has-lift">
                    <legend>Tem elevador?</legend>
                    <input type="radio"
                        id={this.props.idYes}
                        name={this.props.name}
                        value="sim"
                    />
                    <label className="has-lift"
                        htmlFor={this.props.idYes}
                        children="Sim"/>
                    <input type="radio"
                        id={this.props.idNo}
                        name={this.props.name}
                        value="nao"
                    />
                        <label className="has-lift"
                        htmlFor={this.props.idNo}
                        children="Não"/>
                </fieldset>
            </fieldset>
        )
    }
}

export default Complement