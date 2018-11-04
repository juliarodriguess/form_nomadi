import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Pedido from './pages/Pedido/Pedido'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <div className='app'>
        {/* NavBar*/}
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/pedido' component={Pedido} />
        </Switch>
        </div>
    )
}


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('form-pedido'))