import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar(props) {
    return (
        <header className="navbar_nomadi">
            <NavLink to='/'>
                <h2>nomadi<span>.</span></h2>
                {/* <img className='navbar__logo' src={logo} alt='Logo' /> */}
            </NavLink>

            {/* <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario} /> */}
        </header>
    )
}

export default Navbar