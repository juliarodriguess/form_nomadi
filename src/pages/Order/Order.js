import React, { Component } from 'react'
import Origem from '../../components/Origem/Origem'
import Destino from '../../components/Destino/Destino'
import PortageDate from '../../components/PortageDate/PortageDate'
import ButtonNext from '../../components/ButtonNext/ButtonNext'
import SampleBtn from '../../components/SampleBtn/SampleBtn';
import SampleModal from '../../components/SampleModal/SampleModal';
import './Order.css'



class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addressOrigin: '',
            addressDestiny: '',
            data: '',
            open: false

        };
    };

    handleChangeAddressOrigin = (event) => {
        this.setState({ addressOrigin: event.target.value })
    }

    handleChangeAddressDestiny = (event) => {
        this.setState({ addressDestiny: event.target.value })
    }

    getDistance() {
        let mapsApi =
            `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${this.state.addressOrigin}&destinations=${this.state.addressDestiny}&departure_time=now&key=AIzaSyDdgczZxyGrNW9df2fl_D46_1naowL4OJE`
        fetch(mapsApi)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    data: data.rows[0].elements[0].distance.text
                });
            })
        if(this.state.addressOrigin && this.state.addressDestiny) {
            return this.state.data
        } else {
            return 'Deu ruim'
        }
    }

    showModalPedido = (event) => {
        event.preventDefault()
        this.setState({ open: true })
        this.getDistance()
    }

    hideModalPedido = (event) => {
        event.preventDefault()
        this.setState({ open: !this.state.open })
    }

    render() {
        return (
            <form className="pedido">
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
                        onClick={this.showModalPedido}>
                            Próximo
                    </SampleBtn>
                    {this.state.open &&
                        <SampleModal
                            h3="Lorem ipsum"
                            h5= {`A distância é ${this.state.data}`}
                            onClickClose={this.hideModal}  >
                        </SampleModal>}
                </div>
            </form>
        )
    }
}

export default Order