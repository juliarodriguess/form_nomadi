import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Order from './pages/Order/Order'
import SelectItems from './pages/SelectItems/SelectItems'
import Portage from './pages/Portage/Portage'
import Checkout from './pages/Checkout/Checkout'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
            <React.Fragment>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home} />
                {/* <Route path='/order' component={Order} />
                <Route path='/select-items' component={SelectItems} /> */}
                <Route path='/portage' component={Portage} />
                <Route path='/checkout' component={Checkout} />
            </Switch>
            </React.Fragment>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app-nomadi'))