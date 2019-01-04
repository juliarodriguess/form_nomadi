import React, { Component } from 'react'
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

    render() {
        return (
            <section className="order">
                <h2>Descubra o valor do seu frete</h2>
                <fieldset>
                    <Origem/>
                </fieldset>
                <fieldset>
                    <Destino />
                </fieldset>
                <fieldset>
                    <PortageDate />
                </fieldset>
        </section>
        )
    }
}

export default Order