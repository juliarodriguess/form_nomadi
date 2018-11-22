import React, { Component } from 'react'
import ButtonNext from '../../components/ButtonNext/ButtonNext';
import SampleBtn from '../../components/SampleBtn/SampleBtn';
import Modal from '../../components/Modal/Modal';
import SampleModal from '../../components/SampleModal/SampleModal';
import './Home.css'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            open: false, 
            data: false
        }
    }
    
    showModal = (event) => {
        event.preventDefault()
        this.setState({ open: true }) 
    }
    
    hideModal = (event) => {
        event.preventDefault()
        this.setState({ open: !this.state.open })
    }

    sendData = (event) => {
        event.preventDefault()
        this.setState({ data: true })
    }

    render(){
        return (
            <main className="home">
                <section className="title-home">
                    <h1>Tão simples que nem parece mudança.</h1>
                </section>
                <section className="buttons-home">
                    <ButtonNext url="/pedido">Fazer um pedido</ButtonNext>
                    <SampleBtn onClick={this.showModal}>Falar com um consultor</SampleBtn>
                </section>
                    {this.state.open &&
                    <Modal 
                        h3="Precisa de uma ajudinha?"
                        h5="Deixe seu contato e em breve nossa equipe entrará em contato para cuidar da sua mudança." 
                        htmlFor1="nomeModal"
                        id1="nomeModal"
                        type1="text"
                        name1="nomeModal"
                        value1="nome"
                        children1="Nome:"
                        htmlFor2="telModal"
                        id2="telModal"
                        type2="text"
                        name2="telModal"
                        value2="telefone"
                        children2="Telefone:"
                        onClickClose={this.hideModal}
                        onClick={this.sendData}/>
                    }
                    { this.state.data && this.state.openSampleModal &&
                    <SampleModal
                        h3="Lorem ipsum"
                        h5="Consectetur adipiscing elit. Mauris dapibus ante et diam venenatis, eget rutrum est tristique."
                        onClickClose={this.hideModal}  />
                    }
            </main>
        )
    }
}

export default Home