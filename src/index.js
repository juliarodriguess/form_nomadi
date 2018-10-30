import React from 'react'
import ReactDOM from 'react-dom'
import Origem from './pages/Origem/Origem';
import Destino from './pages/Destino/Destino'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

const divForm = document.getElementById('form-pedido')


ReactDOM.render(<Destino />, divForm)