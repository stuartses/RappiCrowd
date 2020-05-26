import React from 'react';
import logo from '../images/logo.png'
import './styles/Navbar.css'

class Navbar extends React.Component {
    render() {
        return(
        <div className="Navbar">
            <div className="container-fluid">
            <a className='Navbar__brand' href="/">
                <img className='Navbar__brand-logo' src={logo} alt ='Logo'></img>
            </a>
            </div>
        </div>
        )}
}

export default Navbar;