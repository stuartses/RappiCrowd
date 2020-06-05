import React, { Component } from 'react';
 
import './styles/Navbar.css'


export class Navbar extends Component {
    render() {
        return(
            <div className="Navbar">
                <div className="container-fluid">               		
                    <img src="../images/logo.png" alt="Logo" />               		
                </div>
            </div>
        )}
}

export default Navbar;
