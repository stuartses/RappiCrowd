import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import './styles/Login.css'


class LoginSolicitante extends Component {
    render() {
        return(
            <div className='background'>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-5 mx-auto">
                            <div id="first">
                                <div className="myform form ">
                                    <div className="logo mb-3">
                                        <div className="col-md-12 text-center">
                                            <h1>Iniciar sesión</h1>
                                        </div>
                                    </div>
                                    <form action="" method="post" name="login">
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Correo electrónico</label>
                                            <input type="email" name="email"  className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Contraseña</label>
                                            <input type="password" name="password" id="password"  className="form-control" aria-describedby="emailHelp" placeholder="Enter Password"/>
                                        </div>
                                        <div className="form-group">
                                            <p className="text-center">Al iniciar sesión, usted está aceptando <a href="#">Nuestros términos de uso</a></p>
                                        </div>
                                        <div className="col-md-12 text-center ">
                                            <button to='' type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Iniciar sesión</button>
                                        </div>
                                        <div className="col-md-12 ">
                                            <div className="login-or">
                                                <hr className="hr-or"></hr>
                                                <span className="span-or">or</span>
                                            </div>
                                        </div>
                                        
                                        <div className="form-group">
                                            <p className="text-center">¿No tienes cuenta?<a href="#" id="signup">Regístrate</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginSolicitante;