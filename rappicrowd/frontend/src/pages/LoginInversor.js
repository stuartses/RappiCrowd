import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInvestors } from '../actions/investors';
 
import './styles/Login.css'


export class LoginInversor extends Component {

	constructor(props) { 	
		super(props);  	       
			this.state = {
			investorCed: "",
			investorPassword: ""	           
		};

	this.SubmitHandler = this.SubmitHandler.bind(this);
	}		    

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	SubmitHandler = e => {
		e.preventDefault();
		const cedulaDigitada = this.state.investorCed;
		const passwordDigitado = this.state.investorPassword;
		const personaEncontrada = this.props.investors.filter(personai => {
			if ((personai.investorCed === cedulaDigitada) && (personai.investorPassword === passwordDigitado)) {
			  return personai;
			} else {
			  alert("Contraseña ó usuario no son los correctos. Intente de nuevo");
			};
		});
		this.props.history.push(`/inversor/${personaEncontrada[0].investorCed}`);
	};

	static propTypes = {
	investors: PropTypes.array.isRequired	  	
	};

	componentDidMount() {
		this.props.getInvestors();
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
												<h1>Iniciar sesión - Inversor</h1>
											</div>
										</div>
											<div className="form-group">
												<label htmlFor="exampleInputEmail1">Cédula</label>
												<input
													type="input"
													name="investorCed"
													className="form-control"
													placeholder="Ingresa cédula"
													onChange={this.changeHandler}
													value={this.state.investorCed}
												/>
											</div>
											<div className="form-group">
												<label htmlFor="exampleInputEmail1">Contraseña</label>
												<input
													type="password"
													name="investorPassword"
													className="form-control"
													placeholder="Ingresa contraseña"
													onChange={this.changeHandler}
													value={this.state.investorPassword}
												/>
											</div>

											<div className="form-group">
												<p className="text-center">
													Al iniciar sesión, usted está aceptando
													<a href="#"> Nuestros términos de uso</a>
												</p>
											</div>

											<div className="col-md-12 text-center ">
												<button
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
														to='/registro-inversor'
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
	  investors: state.investors.investors	
});

export default connect(mapStateToProps, { getInvestors } )(LoginInversor);
