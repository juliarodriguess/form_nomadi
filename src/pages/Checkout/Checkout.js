import React, { Component } from 'react'
import axios from 'axios'
import SampleBtn from '../../components/SampleBtn/SampleBtn'
import ButtonNext from '../../components/ButtonNext/ButtonNext'
import SampleModal from '../../components/SampleModal/SampleModal'
import './Checkout.css'


class Checkout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            data:{},
            loaded: false
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

    componentWillMount() {
        axios({
            method:'get',
            url:'https://immense-dawn-93107.herokuapp.com/api/portage'
        })
        .then ((response) => {
            const data = response.data[response.data.length-1]
            this.setState({data: data, loaded: true})
            console.log("then", this.state.data)
        })
    }
    

    render() {
        return(
            <main className="checkout">
            {this.state.loaded && 
                <>
                <h1>Resumo do seu pedido</h1>
                <section className="address-checkout">
                    <div className="address-checkout__input">
                        <img  className="address-checkout__img" src="https://image.flaticon.com/icons/svg/326/326660.svg" alt=""/>
                        <p><strong>Endereço de retirada: </strong> 
                        {this.state.data.origin.address}
                        </p>
                    </div>
                    <div className="address-checkout__input">
                    <img  className="address-checkout__img" src="https://image.flaticon.com/icons/svg/326/326660.svg" alt=""/>
                    <p>
                    <strong>Endereço de entrega:</strong> {this.state.data.destination.address}</p>
                    </div>
                </section>
                <section className="select-items-checkout">
                    <img  className="select-items-checkout__img" src="https://image.flaticon.com/icons/svg/1044/1044288.svg" alt=""/>
                    <p><strong>Volume do frete: </strong>{this.state.data.listOfItems.length}</p>
                </section>
                <section className="date-checkout">
                    <img  className="date-checkout__img" src="https://image.flaticon.com/icons/svg/942/942759.svg" alt=""/>
                    <p><strong>Datas possíveis: </strong>De {this.state.data.date.start} até {this.state.data.date.end}</p>
                </section>
                <section className="time-checkout">
                    <img  className="time-checkout__img" src="https://image.flaticon.com/icons/svg/1303/1303672.svg" alt=""/>
                    <p><strong>Período preferido: </strong>{this.state.data.period.hour}</p>
                </section>
                <h5 className="checkout-text">E aí, tudo ok?</h5>
                    <SampleBtn className="btn_checkout__btn" onClick={this.showModal}>Sim, pedir!</SampleBtn>
                    <ButtonNext url="/" className="btn_checkout__btn">Não, quero cancelar.</ButtonNext>
                    {this.state.open && <SampleModal onClickClose={this.hideModal}><h3>Seu pedido foi recebido!</h3></SampleModal>}
            </>
            }
            </main>
            )
    }
}

export default Checkout