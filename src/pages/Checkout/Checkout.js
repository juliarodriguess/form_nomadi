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
                        <p><strong>Endereço de retirada:</strong> {this.state.data &&this.state.data.origin.address}</p>
                    </div>
                    <div className="address-checkout__input">
                    <img  className="address-checkout__img" src="https://image.flaticon.com/icons/svg/326/326660.svg"/>
                    <p>
                    <strong>Endereço de entrega:</strong> {this.state.data &&this.state.data.destination.address}</p>
                    </div>
                </section>
                <section className="select-items-checkout">
                    <img  className="select-items-checkout__img" src="https://image.flaticon.com/icons/svg/1044/1044288.svg"/>
                    <p><strong>Volume do frete: </strong>{this.state.data &&this.state.data.listOfItems.length}</p>
                </section>
                <section className="date-checkout">
                    <img  className="date-checkout__img" src="https://image.flaticon.com/icons/svg/942/942759.svg"/>
                    <p><strong>Datas possíveis: </strong>de {this.state.data &&this.state.data.date.startDate} a {this.state.data &&this.state.data.date.endDate}</p>
                </section>
                <section className="time-checkout">
                    <img  className="time-checkout__img" src="https://image.flaticon.com/icons/svg/1303/1303672.svg"/>
                    <p><strong>Período preferido: </strong>{this.state.data &&this.state.data.period.hour}</p>
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