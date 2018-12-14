import React, { Component } from 'react'
import checkoutServices from '../../services/checkout'
import './Checkout.css'


class Checkout extends Component {
    constructor(props) {
        super(props)
    }

    loadData = (data) => {
        checkoutServices.getDataPortage(data)
    }



    render() {
        return(
            <main className="checkout" onLoad={this.loadData()}>
                <h1>Resumo do seu pedido</h1> */}
            </main>
        )
    }
}

export default Checkout