import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWorkers } from '../actions/workers';
import { updateWorker } from '../actions/workers';
import { fetchScore } from '../utils/personins-fetch';
import CSRFToken from '../utils/formcsrftoken';

import './styles/Perfilamiento.css'


export class Perfilamiento extends Component {

	constructor(props) {
		super(props);
		this.state = {
			pregunta1: '',
			pregunta2: '',
			pregunta3: '',
			askedQuestions: '',
			fase: 'form',
			mensaje: '',
			score: '',
			status: '',
			twitterPerson: ''
		};

		this.changeHandler = this.changeHandler.bind(this);
		this.SubmitHandler = this.SubmitHandler.bind(this);
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value });
		console.log(e.target);
	}

	SubmitHandler = e => {
		e.preventDefault();
		let joinedText = '';

		for (let pregunta in this.state) {
			joinedText += this.state[pregunta] + ". ";
		}
		this.setState({ askedQuestions: joinedText, fase: 'loading' }, () => {
			console.log('askedQuestions:', this.state.askedQuestions);
			console.log('loading...');

			let reqMessage = '';
			let reqScore = 'no-score';
			let profile = '';
			let reqJson = '';

			// verifica si los campos están vacíos
			if (/\S/.test(this.state.askedQuestions))
				profile = this.state.askedQuestions;


		    const user_name = this.state.twitterPerson;

			fetchScore(user_name, profile, 'dev').then(
				reqPer => {
					reqMessage = 'Gracias por registrarte. Tus datos serán revisados por nuestros inversores. Por favor dar clic al boton de la parte superior derecha "iniciar sesion" y elegir "solicitante" ó dar clic a la imagen "Rappi" para volver al inicio';

					if (reqPer.status == 'ok') {
						reqScore = reqPer.content.score;
						reqJson = reqPer.content.json;
						console.log(reqMessage, reqScore);
					}

					if (reqPer.status == 'error') {
						if (reqPer.message == 'noinput')
							reqMessage = 'Por favor escribe algo';
						else if (reqPer.message == 'twiterror')
							reqMessage = 'Hemos encontrado un error con tu usuario de Twitter, por favor indica un usuario existente y que sea público';
						else
							reqMessage = 'Ha ocurrido un error';

						console.log(reqMessage, reqPer.message + ': ' + JSON.stringify(reqPer.detail));
					}

					const personPk = this.props.location.state;
					let scoreRound = parseFloat(reqScore).toFixed(2);
					const personaPerfil = {
						workerCed: personPk, workerScore: scoreRound, workerPsychoText: reqJson
					};

					this.setState({
						fase: 'done',
						mensaje: reqMessage,
						score: reqScore,
						status: reqPer.status,
					});

					this.props.updateWorker(personaPerfil);
                                           

				});
				

		});
		
		//this.props.history.push('/login-solicitante');
	};

	static propTypes = {
		// workers: PropTypes.array.isRequired
	};

	componentDidMount() {
		this.props.getWorkers();
		this.props.updateWorker({ workerCed: '' });
	}

	render() {
		const fase = this.state.fase;
		const mensaje = this.state.mensaje;
		const scoreString = this.state.score;
		const status = this.state.status;

		if (fase == 'loading') {
			return (
				<React.Fragment>
					<div className='container my-5 py-3 border rounded'>
						<h1 className='px-4 font-weight-bold'>Perfilamiento</h1>
						<div className="loaderContainer row d-flex justify-content-center">
							<div className="loaderPerfilar"></div>
							<div><p className="text-center text-dark">Cargando...</p></div>
						</div>
					</div>
				</React.Fragment>
			)
		}
		if (fase == 'done') {
			let score = parseFloat(scoreString);
			let textScore = '';
			if (!isNaN(score)) {
				score = Math.round(score * 100);
				textScore = 'Su puntaje es de ' + score + '%';
			}

			return (
				<React.Fragment>
					<div className='container my-5 py-3 border rounded'>
						<h1 className='px-4 font-weight-bold'>Perfilamiento</h1>
						<div className="pagination-centered">
							<p className={`text-center ${status == "error" ? "text-danger" : "text-success"}`}>{mensaje}</p>
							<p className="text-center text-secondary">{textScore}</p>
						</div>
					</div>
				</React.Fragment>
			)
		}
		if (fase == 'form') {
			return (
				<React.Fragment>
					<div className='container my-5 py-3 border rounded'>
						<h1 className='px-4 font-weight-bold'>Perfilamiento</h1>
						<form className='row px-5 py-3' onSubmit={this.SubmitHandler}>
							<CSRFToken />
							<p className=''>
								Las siguientes preguntas nos permitirán conocerte mejor.
								Es importante que contestes de forma detallada cada pregunta. Algunas preguntas
								tienen un mínimo de caracteres requerido.
                    </p>

							<div className='form-group h-100 w-100 border-bottom'>
								<label htmlFor="Pregunta"><h2 className='p-1 h4 m-0'>Piensa que un día te ganas la lotería, qué sería lo primero que harías? En qué te gastarías el dinero? Con quienes te gastarías el dinero y por qué con esas personas?</h2></label>
								<textarea
									className="form-control border-bottom"
									minLength="150"
									title="Tu respuesta debe ser de al menos 150 caracteres. Por favor, sé un poco más detallado"
									placeholder="Respuesta"
									required
									name='pregunta1'
									value={this.state.pregunta1}
									onChange={this.changeHandler}
								/>
							</div>

							<div className='form-group h-100 w-100 border-bottom'>
								<label htmlFor="Pregunta"><h2 className='p-1 h4 m-0'>Elige 3 cosas que puedes llevar a una isla desierta en la que vas a vivir durante 3 meses, ¿cuáles serían? ¿cómo las utilizarías? Si tras dos meses pudiera cambiar una de esas cosas, por qué la cambiarías?</h2></label>
								<textarea
									className="form-control border-bottom"
									name="pregunta2"
									minLength="150"
									title="Tu respuesta debe ser de al menos 150 caracteres. Por favor, sé un poco más detallado"
									placeholder="Respuesta"
									required
									value={this.state.pregunta2}
									onChange={this.changeHandler}
								/>
							</div>

							<div className='form-group h-100 w-100 border-bottom'>
								<label htmlFor="Pregunta"><h2 className='p-1 h4 m-0'>Si tuvieras que elegir un superpoder entre, entender y hablar todos los idiomas, ser invisible, viajar en el tiempo, respirar bajo el agua y hablar con los animales, qué superpoder elegirías?</h2></label>
								<textarea
									className="form-control border-bottom"
									name="pregunta3"
									minLength="150"
									title="Tu respuesta debe ser de al menos 150 caracteres. Por favor, sé un poco más detallado"
									placeholder="Respuesta"
									required
									value={this.state.pregunta3}
									onChange={this.changeHandler}
								/>
							</div>

							<div className='form-group h-100 w-100 border-bottom'>
								<label htmlFor="Pregunta"><h2 className='p-1 h4 m-0'>Twitter</h2><p>Si tienes usuario de twitter y es público por favor ingresalo</p></label>
								<textarea
									className="form-control border-bottom"
									name="twitterPerson"
									placeholder="Twitter"
									value={this.state.twitterPerson}
									onChange={this.changeHandler}
								/>
							</div>
							<button className='' onClick={this.handleClick}>Enviar</button>
						</form>
					</div>
				</React.Fragment>
			)
		}
	}
}

const mapStateToProps = state => ({
	workers: state.workers.workers
});

export default connect(mapStateToProps, { getWorkers, updateWorker })(Perfilamiento);
