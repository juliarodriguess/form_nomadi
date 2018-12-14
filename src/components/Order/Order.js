import React, { Component } from 'react'
import dtService from '../../services/distance'
import { dataPortage } from '../../components/FormPortage/FormPortage'
import Origem from '../../components/Origem/Origem'
import Destino from '../../components/Destino/Destino'
import PortageDate from '../../components/PortageDate/PortageDate'
import './Order.css'

class Order extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addressOrigin: '',
            addressDestiny: '',
            open: false

        };
    };

    handleChangeAddressOrigin = (event) => {
        this.setState({ addressOrigin: event.target.value })
        dataPortage.origin.address = this.state.addressOrigin
    }
    
    handleChangeAddressDestiny = (event) => {
        this.setState({ addressDestiny: event.target.value })
        dataPortage.destination.address = this.state.addressDestiny
    }
    
    sendData = () => {
        dtService.getDistance({
                    origin: this.state.addressOrigin,
                    destiny: this.state.addressDestiny
                })
    }

    render() {
        return (
            <section className="order">
                <h2>Descubra o valor do seu frete</h2>
                <fieldset>
                    <Origem
                        addressOrigin={this.state.addressOrigin}
                        onBlurCapture={this.handleChangeAddressOrigin}
                        />
                </fieldset>
                <fieldset>
                    <Destino
                        addressDestiny={this.state.addressDestiny}
                        onBlurCapture={this.handleChangeAddressDestiny}
                    />
                </fieldset>
                <fieldset>
                    <PortageDate />
                </fieldset>
        </section>
        )
    }
}

export default Order