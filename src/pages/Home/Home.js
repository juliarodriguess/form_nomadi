import React from 'react'
import ButtonNext from '../../components/ButtonNext/ButtonNext';
import SampleBtn from '../../components/SampleBtn/SampleBtn';
import './Home.css'

function Home () {
    return (
        <main className="home">
            <section className="title-home">
                <h1>Tão simples que nem parece mudança.</h1>
            </section>
            <section className="buttons-home">
                <ButtonNext url="/pedido">Fazer um pedido</ButtonNext>
                <SampleBtn>Falar com um consultor</SampleBtn> 
                {/* Abrir modal com informações básicas */}
            </section>
        </main>
    )
}

export default Home