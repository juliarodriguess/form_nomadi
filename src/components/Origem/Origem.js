import React, { Component } from 'react'
import Input from '../../components/Input/Input'
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
            value: '',
            showComplement: false,
            showComments: false
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
                <fieldset className="radio-btn-origem">
                    <RadioBtn
                        htmlFor='apartamento'
                        id='apartamento'
                        name='propertyType'
                        value='apartamento'
                        checked=''
                        onChange={this.selectedChange}>
                        Apartamento
                    </RadioBtn>
                    <RadioBtn
                        htmlFor='casa'
                        id='casa'
                        name='propertyType'
                        value='casa'
                        checked=''
                        onChange={this.selectedChange}>
                        Casa
                    </RadioBtn>
                </fieldset>
                    {/* {
                        // <Complement />
                    } */}
                    {/* {
                        this.state.showComments &&
                        <Comments />
                    } */}
            </section>
        )
    }
}


export default Origem
