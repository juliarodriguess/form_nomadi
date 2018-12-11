import React, { Component } from 'react'
import leadService from '../../services/leads'
import ButtonNext from '../../components/ButtonNext/ButtonNext';
import SampleBtn from '../../components/SampleBtn/SampleBtn';
import InputModal from '../../components/InputModal/InputModal'
import SampleModal from '../../components/SampleModal/SampleModal';
import './Home.css'


class Home extends Component {
    constructor(props) {
        super(props)

        this.nomeRef = React.createRef()
        this.telRef = React.createRef()

        this.state = { 
            openModal: false, 
            data: false,
            modalResponse: false,
            desabilitado: true
        }
    }
    
    showModal = (event) => {
        event.preventDefault()
        this.setState({ openModal: true }) 
    }
    
    hideModal = (event) => {
        event.preventDefault()
        this.setState({ openModal: false })
    }

    hideModalResponse = (event) => {
        this.setState({ modalResponse: false })
    }
    
    handleChange = () => {
        const inputNome = this.nomeRef.current
        const inputTel = this.telRef.current
        if(inputNome.temErro() || inputTel.temErro()) {
            this.setState({desabilitado: true})
        } else {
            this.setState({desabilitado: false})
        }
    }

    sendData = (event) => {
        event.preventDefault()
        
        const inputNome = this.nomeRef.current
        const inputTel = this.telRef.current
        
        const data = {
            nome: inputNome.getValue(),
            telefone: inputTel.getValue()
        }
        console.log("dados", data)
        this.setState({ data: true, modalResponse: true, openModal: false })

        leadService.createLead(data)
    }

    render(){
        return (
            <main className="home">
                <section className="title-home">
                    <h1>Tão simples que nem parece mudança.</h1>
                </section>
                <section className="buttons-home">
                    <ButtonNext url="/order">Fazer um pedido</ButtonNext>
                    <SampleBtn onClick={this.showModal}>Falar com um consultor</SampleBtn>
                </section>
                    {this.state.openModal &&
                    <SampleModal
                        onClickClose={this.hideModal}>
                        <h3>Precisa de uma ajudinha?</h3>
                        <h6>Deixe seu contato e em breve nossa equipe entrará em contato para cuidar da sua mudança.</h6>
                        <div className="inputs-modal-home">
                            <InputModal
                            htmlFor="nomeModal"
                            id="nomeModal"
                            type="text"
                            name="nomeModal"
                            minLength={3}
                            placeholder="Qual seu nome completo?"
                            ref={this.nomeRef}
                            onChange={this.handleChange}
                            required
                            >
                            Nome:
                            </InputModal>
                            <InputModal
                            htmlFor="telModal"
                            id="telModal"
                            type="text"
                            name="telModal"
                            minLength={10}
                            placeholder="Seu telefone com DDD. Ex.: (99) 99999-9999"
                            ref={this.telRef}
                            onChange={this.handleChange}
                            required
                            >
                            Telefone:
                            </InputModal>
                        </div>
                        <div className="send-leads-btn">
                            <SampleBtn
                                desabilitado={this.state.desabilitado}
                                onClick={this.sendData}>
                                Enviar
                            </SampleBtn>
                        </div>
                        </SampleModal>
                    }
                    { this.state.modalResponse &&
                    <SampleModal
                        onClickClose={this.hideModalResponse}>
                        <div className="modal-response-content">
                            <h3>Ficamos felizes que você quer falar com a gente!</h3>
                            <h5>Recebemos os seus dados e em breve alguém da equipe Nomadi entrará em contato para organizar com você a sua mudança.</h5>
                        </div>
                    </SampleModal>
                    }
            </main>
        )
    }
}

export default Home