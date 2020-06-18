/* Barra de navegación */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import './styles/Navbar.css'


export class Navbar extends Component {
    render() {
        return(
            <React.Fragment>
            <nav className="Navbar navbar-expand-lg">
                <div className="container-fluid">               		
		            <Link to="/"> 		
                        <img className='Navbar__brand-logo'
                            src={'/static/logo.png'}
                            alt='Logo'>
                        </img>
                    </Link>
                    <ul className="navbar-nav mr-auto mx-3 float-right">
                        <li className="nav-item">
                            <a
                                className="nav-link dropdown-toggle float-right text-dark text-uppercase font-weight-bold"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                Iniciar sesión
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link
                                    className="dropdown-item text-dark text-uppercase font-weight-bold"
                                    id="signup"
                                    to="/login-solicitante">Solicitante
                                </Link>
                                <Link
                                    className="dropdown-item text-dark text-uppercase font-weight-bold"
                                    id="signup"
                                    to="/login-inversor">Inversor
                                </Link>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/about'
                                className='float-right mt-2 mx-3 text-dark text-uppercase font-weight-bold align-middle'
                                id="signup">Acerca de
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
            </React.Fragment>
        )
    }   
}

export default Navbar;