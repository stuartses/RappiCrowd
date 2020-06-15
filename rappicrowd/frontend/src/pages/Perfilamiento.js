import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWorkers } from '../actions/workers';
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
			
			// verifica si los campos están vacíos
			if (/\S/.test(this.state.askedQuestions))
				profile = this.state.askedQuestions;

			const user_name = '';
			fetchScore(user_name, profile, 'dev').then(
				reqPer => {
					reqMessage = 'Gracias por registrarte. Tus datos serán revisados por nuestros inversores';

					if (reqPer.status == 'ok') {
						reqScore = reqPer.content.score;
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
					this.setState({
						fase: 'done',
						mensaje: reqMessage,
						score: reqScore,
						status: reqPer.status
					 });
				});
		});

		//this.props.history.push('/login-solicitante');
	};

	static propTypes = {
		workers: PropTypes.array.isRequired
	};

	componentDidMount() {
		this.props.getWorkers();
	}

	render() {
		const fase = this.state.fase;
		const mensaje = this.state.mensaje;
		const scoreString = this.state.score;
		const status = this.state.status;
		if (fase == 'loading')
		{
			return (
				<React.Fragment>
				<div className='container my-5 py-3 border rounded'>
					<h1 className='px-4 font-weight-bold'>Perfilamiento</h1>
					<div className="loaderContainer row d-flex justify-content-center">
						<div className="loaderPerfilar"></div> 
						<p className="text-center text-dark">Cargando...</p>
					</div>
				</div>
				</React.Fragment>
			)
		}
		if (fase == 'done')
		{
			let score = parseFloat(scoreString);
			let textScore = '';
			if (!isNaN(score)) {
				score = Math.round(score * 100);
				textScore = 'Su puntaje es de ' + score +'%';
			}

			return (
				<React.Fragment>
				<div className='container my-5 py-3 border rounded'>
					<h1 className='px-4 font-weight-bold'>Perfilamiento</h1>
					<div className="pagination-centered">
						<p className={`text-center ${status == "error"? "text-danger": "text-success"}`}>{mensaje}</p>
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
							<label htmlFor="Pregunta"><h2 className='p-1 h4 m-0'>Pregunta</h2></label>
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
							<label htmlFor="Pregunta"><h2 className='p-1 h4 m-0'>Pregunta</h2></label>
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
							<label htmlFor="Pregunta"><h2 className='p-1 h4 m-0'>Pregunta</h2></label>
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
						<button className='' onClick={this.handleClick}>Enviar</button>
					</form>
				</div>
			</React.Fragment>
		)}
	}
}

const mapStateToProps = state => ({
	workers: state.workers.workers
});

export default connect(mapStateToProps, { getWorkers })(Perfilamiento);
