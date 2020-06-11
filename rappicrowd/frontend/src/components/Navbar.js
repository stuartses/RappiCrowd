import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css'


class Navbar extends Component {
    render() {
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <Link to="/"> 		
                        <img className='Navbar__brand-logo' src={'http://localhost:8000/static/Logo.png'} alt ='Logo'></img>
                    </Link>
                </div>
            </div>
        )}
}

export default Navbar;
