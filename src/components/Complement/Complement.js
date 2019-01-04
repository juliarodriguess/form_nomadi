import React, { Component } from 'react'
import Input from '../Input/Input'
import './Complement.css'

class Complement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: null
        }
    }

    handleOptionChange = (event) => {
        if(event.target.value === 'false') {
            this.setState({ selectedOption: true }) 
            console.log("foi")
        } else {
            this.setState({selectedOption: false})
        }
    }
    
    render(props) {
        return(
            <fieldset className="complement-property">
                <fieldset className="apt">
                    <Input 
                        htmlFor={this.props.htmlFor}
                        id={this.props.id}
                        type='text'
                        name='aptNumber'
                        onBlurCapture={this.props.onBlurCapture}>
                        Apartamento:
                    </Input>
                </fieldset>
                <fieldset className="has-lift" onChange={this.props.onChange}>
                    <legend>Tem elevador?</legend>
                    <input type="radio"
                        id={this.props.idYes}
                        name={this.props.name}
                        value="true"
                        onChange={this.handleOptionChange}
                        />
                    <label className="has-lift"
                        htmlFor={this.props.htmlForYes}
                        children="Sim"/>
                    <input type="radio"
                        id={this.props.idNo}
                        name={this.props.name}
                        value="false"
                        onChange={this.handleOptionChange}
                    />
                        <label className="has-lift"
                        htmlFor={this.props.htmlForNo}
                        children="Não"/>
                </fieldset>
                {
                    this.state.selectedOption &&
                    <Input
                        htmlFor='stgNumber'
                        id='stgNumber'
                        type='text'
                        name='stgNumber'
                        onBlurCapture={this.props.onBlurCaptureStage}>
                        Andar:
                    </Input>
                }
            </fieldset>
        )
    }
}

export default Complement