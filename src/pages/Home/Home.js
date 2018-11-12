import React from 'react'
import './Home.css'
import ButtonNext from '../../components/ButtonNext/ButtonNext';

function Home () {
    return (
        <main className="home">
            <section className="title-home">
                <h1>Tão simples que nem parece mudança.</h1>
            </section>
            <section className="buttons-home">
                <ButtonNext url="/pedido">Fazer um pedido</ButtonNext>
                <ButtonNext url="/pedido">Falar com um consultor</ButtonNext> 
                {/* Abrir modal com informações básicas */}
            </section>
        </main>
    )
}

export default Home