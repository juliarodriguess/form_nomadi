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
        if(changeEvent.target.value === 'nao') {
            this.setState({ selectedOption: true }) 
        } else {
            this.setState({selectedOption: false})
        }
      }
    
    render(props) {
        return(
            <fieldset className="complement-property">
                <fieldset className="apt">
                    <Input 
                        htmlFor='aptNumber'
                        id='aptNumber'
                        type='text'
                        name='aptNumber'>
                        Apartamento:
                    </Input>
                </fieldset>
                <fieldset className="has-lift">
                    <legend>Tem elevador?</legend>
                    <input type="radio"
                        id={this.props.idYes}
                        name={this.props.name}
                        value="sim"
                        onChange={this.handleOptionChange}
                        />
                    <label className="has-lift"
                        htmlFor={this.props.idYes}
                        children="Sim"/>
                    <input type="radio"
                        id={this.props.idNo}
                        name={this.props.name}
                        value="nao"
                        onChange={this.handleOptionChange}
                    />
                        <label className="has-lift"
                        htmlFor={this.props.idNo}
                        children="Não"/>
                </fieldset>
                {
                    this.state.selectedOption &&
                    <Input 
                        htmlFor='stgNumber'
                        id='stgNumber'
                        type='text'
                        name='stgNumber'>
                        Andar:
                    </Input>
                }
            </fieldset>
        )
    }
}

export default Complement