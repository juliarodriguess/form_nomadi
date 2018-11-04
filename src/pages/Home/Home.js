import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.css'
import ButtonNext from '../../components/ButtonNext/ButtonNext';

function Home () {
    return (
        <main id="home">
            <h1>nomadi<span>.</span></h1>
            <section>
                <ButtonNext href="/pedido">Fazer um pedido</ButtonNext>
                <ButtonNext href="">Falar com um consultor</ButtonNext> 
                {/* Abrir modal com informações básicas */}
            </section>
        </main>
    )
}

export default Home