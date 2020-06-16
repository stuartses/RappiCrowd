/* Este componente contiene la pantalla de login para
el solicitante. Se encuentra en /login-solicitante */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWorkers } from '../actions/workers';

import './styles/Login.css'


class LoginSolicitante extends Component {
	constructor(props) {
		super(props);
		this.state = {
			workerCed: "",
			workerPassword: ""
		};

	this.SubmitHandler = this.SubmitHandler.bind(this);
	}

	changeHandler = e => {
		/* Asigna lo digitado en el form a los atributos de state */
		this.setState({ [e.target.name]: e.target.value });
		console.log(e.target);
	}

	SubmitHandler = e => {
		/* Se ejecuta al hacer click en iniciar sesión */
		e.preventDefault();
		const cedulaDigitada = this.state.workerCed;
		const personaEncontrada = this.props.workers.filter(persona => {
			return persona.workerCed === cedulaDigitada;
		});
		this.props.history.push(`/solicitante/${personaEncontrada[0].workerCed}`);
	};

	static propTypes = {
		workers: PropTypes.array.isRequired
	};

	componentDidMount() {
		this.props.getWorkers();
	}
	    
	render() {
		return(
			<React.Fragment>
				<form method="post" onSubmit={this.SubmitHandler}>
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
											<div className="form-group">
												<label htmlFor="exampleInputEmail1">Cédula</label>
												<input
													type="input"
													name="workerCed"
													className="form-control"
													placeholder="Ingresa cédula"
													onChange={this.changeHandler}
													value={this.state.workerCed}/>
											</div>
											<div className="form-group">
												<label htmlFor="exampleInputEmail1">Contraseña</label>
												<input
													type="password"
													name="workerPassword"
													className="form-control"
													placeholder="Ingresa contraseña"
													onChange={this.changeHandler}
													value={this.state.workerPassword}/>
											</div>

											<div className="form-group">
												<p className="text-center">
													Al iniciar sesión, usted está aceptando
													<a href="#">Nuestros términos de uso</a>
												</p>
											</div>

											<div className="col-md-12 text-center">
												<button
													to=''
													type="submit"
													className=" btn btn-block mybtn btn-primary tx-tfm">Iniciar sesión
												</button>
											</div>

											<div className="col-md-12 ">
												<div className="login-or">
													<hr className="hr-or"></hr>
													<span className="span-or">or</span>
												</div>
											</div>
											
											<div className="form-group">
												<p className="text-center">¿No tienes cuenta?
													<Link
														to='/registro-domiciliario'
														id="signup">Regístrate
													</Link>
												</p>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</React.Fragment>    
		)
	}
}

const mapStateToProps = state => ({
	  workers: state.workers.workers
});


export default connect(mapStateToProps, { getWorkers } )(LoginSolicitante);
