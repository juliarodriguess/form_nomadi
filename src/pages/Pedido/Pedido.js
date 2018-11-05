import React from 'react'
import Origem from '../../components/Origem/Origem'
import Destino from '../../components/Destino/Destino'
import PortageDate from '../../components/PortageDate/PortageDate'
import ButtonNext from '../../components/ButtonNext/ButtonNext'
import './Pedido.css'

function Pedido() {
    return (
        <form className="pedido">
        <h1>Descubra o valor do seu frete</h1>
        <Origem/>
        <Destino/>
        <PortageDate/>
        <ButtonNext>Próximo</ButtonNext>
        </form>
    )
}

export default Pedido