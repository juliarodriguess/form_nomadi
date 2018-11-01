import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Origem from './pages/Origem/Origem';
import Destino from './pages/Destino/Destino'
import PortageDate from './pages/PortageDate/PortageDate'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <div className='app'>
        {/* NavBar*/}
        <Switch>
            <Route path='/' exact component={Origem} />
            <Route path='/destino' component={Destino} />
            <Route path='' component={Origem} />
        </Switch>
        </div>
    )
}


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('form-pedido'))