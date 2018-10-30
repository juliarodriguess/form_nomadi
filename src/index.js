import React from 'react'
import ReactDOM from 'react-dom'
import Origem from './pages/Origem/Origem';
import Destino from './pages/Destino/Destino'
import PortageDate from './pages/PortageDate/PortageDate'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

const divForm = document.getElementById('form-pedido')


ReactDOM.render(<PortageDate />, divForm)