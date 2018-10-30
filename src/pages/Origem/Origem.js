import React from 'react'
import Input from '../../components/Input/Input'
import Dropdown from '../../components/Dropdown/Dropdown'
import Complement from '../../components/Complement/Complement'
import Comments from '../../components/Comments/Comments'
import './Origem.css'

class Origem extends React.Component {
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
            <main>
                <h1>Origem</h1>
                <Input 
                htmlFor='adrStr'
                id='adrStr'
                type='text'
                name='adrStr'>
                Endereço:
                </Input>
                <Dropdown
                htmlFor='propertyType'
                id='propertyType'
                name='propertyType'
                value1='default'
                option1='Escolha o tipo do imóvel'
                value2='apartamento'
                option2='Apartamento'
                value3='casa'
                option3='Casa'
                selectChange={this.selectChange}>
                Tipo de imóvel:
                </Dropdown>
                {
                    this.state.showComplement &&
                    <Complement/>
                }
                                {
                    this.state.showComments &&
                    <Comments/>
                }
                <ButtonNext>Próximo</ButtonNext>
            </main>
        )
    }
}


export default Origem

