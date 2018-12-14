import React, { Component } from 'react'
import checkoutServices from '../../services/checkout'
import SampleBtn from '../../components/SampleBtn/SampleBtn'
import ButtonNext from '../../components/ButtonNext/ButtonNext'
import SampleModal from '../../components/SampleModal/SampleModal'
import './Checkout.css'


class Checkout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            data:null
        }
    }

    loadData = () => {
        return checkoutServices.getDataPortage()
    }

    showModal = (event) => {
        event.preventDefault()
        this.setState({ open: true })
    }

    hideModal = (event) => {
        event.preventDefault()
        this.setState({ open: !this.state.open })
    }

    componentDidMount = () => {
        this.loadData().then((response) => {
            console.log(response.data)
            this.setState({data: response.data})
        })
    }


    render() {
        return(
            <main className="checkout" onLoad={this.loadData()}>
                <h1>Resumo do seu pedido</h1>
                <section className="address-checkout">
                    <div className="address-checkout__input">
                        <img  className="address-checkout__img" src="https://image.flaticon.com/icons/svg/326/326660.svg"/>
                        <p><strong>Endereço de retirada:</strong> Rua Vitorino Carmilo, 512. Santa Cecília. São Paulo -SP </p>
                    </div>
                    <div className="address-checkout__input">
                    <img  className="address-checkout__img" src="https://image.flaticon.com/icons/svg/326/326660.svg"/>
                    <p>
                    <strong>Endereço de entrega:</strong> Alameda Eduardo Prado, 150. Campos Elíseos. São Paulo - SP.</p>
                    </div>
                </section>
                <section className="select-items-checkout">
                    <img  className="select-items-checkout__img" src="https://image.flaticon.com/icons/svg/1044/1044288.svg"/>
                    <p><strong>Volume do frete: </strong>20 itens.</p>
                </section>
                <section className="date-checkout">
                    <img  className="date-checkout__img" src="https://image.flaticon.com/icons/svg/942/942759.svg"/>
                    <p><strong>Datas possíveis: </strong>De 8 de janeiro de 2019 a 12 de janeiro de 2019.</p>
                </section>
                <section className="time-checkout">
                    <img  className="time-checkout__img" src="https://image.flaticon.com/icons/svg/1303/1303672.svg"/>
                    <p><strong>Período preferido: </strong>De manhã (de 09h às 12h).</p>
                </section>
                <h5 className="checkout-text">E aí, tudo ok?</h5>
                    <SampleBtn className="btn_checkout__btn" onClick={this.showModal}>Sim, pedir!</SampleBtn>
                    <ButtonNext url="/" className="btn_checkout__btn">Não, quero cancelar.</ButtonNext>
                    {this.state.open && <SampleModal onClickClose={this.hideModal}><h3>Seu pedido foi recebido!</h3></SampleModal>}
            </main>
        )
    }
}

export default Checkout