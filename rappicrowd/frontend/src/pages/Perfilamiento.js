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

			fetchScore(user_name, profile, '').then(
				reqPer => {
					reqMessage = 'Todo correcto';

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
		let mensaje = '';
		let detalle = '';
		const scoreString = this.state.score;
		let status = this.state.status;
		let buttonSesion = '';

		if (fase == 'loading') {
			return (
				<React.Fragment>
					<div className='container my-5 py-3 border rounded'>
						<h1 className='px-4 font-weight-bold'>Perfilamiento</h1>
						<div className="d-flex flex-column justify-content-center align-items-center">
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
				textScore = score + '%';
			}

			if (status == 'ok') {
				mensaje = <div className="h3 mt-5 mb-3">Gracias por registrarte. <br />Tus datos serán revisados por nuestros inversores</div>;
				detalle = 'Tu puntaje';
				buttonSesion = <div className="btn-inicioSesion">Iniciar sesión</div>;
			}
			if (status == 'error') {
				mensaje = <div className="h3 mt-5 mb-3">Error. <br />{detalle}</div>;
				detalle = this.state.mensaje;
			}

			return (
				<React.Fragment>
					<div className='container my-5 py-3 border rounded'>
						<h1 className='px-4 font-weight-bold'>Perfilamiento</h1>
						<div className="d-flex flex-column justify-content-center align-items-center">
							<div className={`text-center ${status == "error" ? "text-danger" : "text-body"}`}>{mensaje}</div>
							<div className="h4 text-center m-1">{detalle}</div>
							<div className="h1 text-center m-1 scoreAns font-weight-bold">{textScore}</div>
							<div className="text-center"><a href="/login-solicitante">{buttonSesion}</a></div>
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
							<p className='mb-5 h4'>
								Las siguientes preguntas nos permitirán conocerte mejor.
								Es importante que contestes de forma detallada cada pregunta. Algunas preguntas
								tienen un mínimo de caracteres requerido.
                    </p>

							<div className='form-group h-100 w-100 border-bottom mb-5'>
							<p className='m-0 text-dark'>Piensa que un día te ganas la lotería, qué sería lo primero que harías? En qué te gastarías el dinero? Con quienes te gastarías el dinero y por qué con esas personas?</p>
								<label htmlFor="Pregunta"></label>
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

							<div className='form-group h-100 w-100 border-bottom mb-5'>
							<p className='m-0 text-dark'>Elige 3 cosas que puedes llevar a una isla desierta en la que vas a vivir durante 3 meses, ¿cuáles serían? ¿cómo las utilizarías? Si tras dos meses pudiera cambiar una de esas cosas, por qué la cambiarías?</p>
								<label htmlFor="Pregunta"></label>
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

							<div className='form-group h-100 w-100 border-bottom mb-5'>
							<p className='m-0 text-dark'>Si tuvieras que elegir un superpoder entre, entender y hablar todos los idiomas, ser invisible, viajar en el tiempo, respirar bajo el agua y hablar con los animales, qué superpoder elegirías?</p>
								<label htmlFor="Pregunta"></label>
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
								<p className='m-0 text-dark'>Twitter</p><p>Si tienes usuario de twitter y es público por favor ingresalo de esta forma: @holbertonschool</p>
								<label htmlFor="Pregunta"></label>
								<textarea
									className="form-control border-bottom"
									name="twitterPerson"
									placeholder="@holbertonschool"
									value={this.state.twitterPerson}
									onChange={this.changeHandler}
								/>
							</div>
							<button className="float-right btn-rappi mt-5" onClick={this.handleClick}>Enviar</button>
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
