import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import './styles/Navbar.css'


export class Navbar extends Component {
    render() {
        return(
            <div className="Navbar">
                <div className="container-fluid">               		
		    <Link to="/"> 		
                        <img className='Navbar__brand-logo' src={'http://161.35.98.240:8000/static/Logo.png'} alt ='Logo'></img>
                    </Link>
		    
                    <a href='/login-inversor' id="signup">Ingreso Inversor</a>  	    
		    
                    <a href='/login-solicitante' id="signup">Ingreso Solicitante</a>  	    
                </div>
            </div>
        )}
}

export default Navbar;
