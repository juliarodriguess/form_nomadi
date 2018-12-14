import React, { Component } from 'react'
import dtService from '../../services/distance'
import { dataPortage } from '../../components/FormPortage/FormPortage'
import Origem from '../../components/Origem/Origem'
import Destino from '../../components/Destino/Destino'
import PortageDate from '../../components/PortageDate/PortageDate'
import ButtonNext from '../../components/ButtonNext/ButtonNext'
import './Order.css'

class Order extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addressOrigin: '',
            addressDestiny: '',
            data: {},
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
        // this.setState({
        //     data:)
        //     ;
        
        dtService.getDistance({
                    origin: this.state.addressOrigin,
                    destiny: this.state.addressDestiny
                })
    }

        // let mapsApi =
        //     `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${this.state.addressOrigin}&destinations=${this.state.addressDestiny}&departure_time=now&key=AIzaSyB6CHNi5g0HT7IvXI8Etr22du8NzkPX3h0`
        // fetch(mapsApi)
        //     .then(response => response.json())
        //     .then((data) => {
        //         this.setState({
        //             data: data.rows[0].elements[0].distance.text
        //         });
        //     })
        // if(this.state.addressOrigin && this.state.addressDestiny) {
        //     return this.state.data
        // } else {
        //     return 'Deu ruim'
        // }

    showModalOrder = (event) => {
        event.preventDefault()
        this.setState({ open: true })
        this.sendData()
    }

    hideModalOrder = (event) => {
        event.preventDefault()
        this.setState({ open: !this.state.open })
    }

    render() {
        return (
            <section className="order">
                <h2>Descubra o valor do seu frete</h2>
                <fieldset>
                    <Origem
                        addressOrigin={this.state.addressOrigin}
                        onChange={this.handleChangeAddressOrigin}
                        />
                </fieldset>
                <fieldset>
                    <Destino
                        addressDestiny={this.state.addressDestiny}
                        onChange={this.handleChangeAddressDestiny}
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