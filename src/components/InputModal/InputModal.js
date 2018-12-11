import React, { Component } from 'react'

class InputModal extends Component {
    constructor(props){
        super(props)
        this.input = { value: '' }
        this.state = {
            erro: '',
            modificado: false
        }
    }

    getValue() {
        return this.input.value;
      }

    valida = (event) => {
    this.input = event.target

    // const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let mensagem = ''

    if (this.props.required && this.input.value.trim() === '') {
        mensagem = 'Campo obrigatório'
    } else if (this.props.minLength && this.input.value.length < this.props.minLength) {
        mensagem = `Digite pelo menos ${this.props.minLength} caracteres`
     } //else if (this.props.type === 'email' && !regex.test(this.input.value)) {
    //     mensagem = 'Valor inválido'
    // }

    this.setState({ modificado: true, erro: mensagem }, this.props.onChange)
    
    }

    temErro() {
        if(!this.state.modificado || this.state.erro) {
            return true
        } else {
            return false
        }
    }
    
    render() {
        return (
            <fieldset className="input">
            <label htmlFor={this.props.htmlFor}>
            {this.props.children}
            </label>
            <input 
                id={this.props.id} 
                type={this.props.type} 
                name={this.props.name}
                value={this.props.value}
                placeholder={this.props.placeholder}
                minLength = {this.props.minLength}
                onChange={this.valida}/>
            <p className='grupo__erro'>{this.state.erro}</p>
            </fieldset>
        )
    }
}

export default InputModal