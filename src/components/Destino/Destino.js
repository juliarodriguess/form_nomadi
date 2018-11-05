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
            value: 'default', 
            showComplement: false,
            showComments: false
        }
    }

    selectChange = (event) => {
        if(event.target.value === 'apartamento') {
            this.setState({showComplement: true})
            this.setState({showComments: false})
        }
         else if(event.target.value === 'casa') {
            this.setState({showComments: true})
            this.setState({showComplement: false})
        } else  if (event.target.value === 'default'){
            this.setState({showComments: false})
            this.setState({showComplement: false})
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
                <fieldset className="radio-btn-destino">
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

