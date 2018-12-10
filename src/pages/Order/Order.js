import React, { Component } from 'react'
import distanceService from '../../services/distance'
import Origem from '../../components/Origem/Origem'
import Destino from '../../components/Destino/Destino'
import PortageDate from '../../components/PortageDate/PortageDate'
import ButtonNext from '../../components/ButtonNext/ButtonNext'
import SampleBtn from '../../components/SampleBtn/SampleBtn'
import SampleModal from '../../components/SampleModal/SampleModal'
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
    }
    
    handleChangeAddressDestiny = (event) => {
        this.setState({ addressDestiny: event.target.value })
    }
    
    sendData = () => {
        // this.setState({
        //     data:)
        //     ;
        
        distanceService.getDistance({
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
            <form className="order">
                <h1>Descubra o valor do seu frete</h1>
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
                <div className="btn">
                    <SampleBtn
                        onClick={this.showModalOrder}>
                            Próximo
                    </SampleBtn>
                    {this.state.open &&
                        <SampleModal
                            onClickClose={this.hideModalOrder}  >
                            {`A distância é ${this.state.data}`}
                            <ButtonNext url="/select-items">Ok</ButtonNext>
                        </SampleModal>}
                </div>
            </form>
        )
    }
}

export default Order