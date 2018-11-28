import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Order from './pages/Order/Order'
import SelectItems from './pages/SelectItems/SelectItems'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    render() {
        return (
            <React.Fragment>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/order' component={Order} />
                <Route path='/select-items' component={SelectItems} />
            </Switch>
            </React.Fragment>
        )
    }
}


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('app-nomadi'))