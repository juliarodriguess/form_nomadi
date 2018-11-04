import React from 'react'
import Origem from '../../components/Origem/Origem'
import './Pedido.css'

function Pedido() {
    return (
        <form className="pedido">
        <h1>Descubra o valor do seu frete</h1>
        <Origem/>
        </form>
    )
}

export default Pedido