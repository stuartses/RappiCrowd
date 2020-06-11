import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWorkers } from '../actions/workers';
	
import './styles/Perfilamiento.css'

export class Perfilamiento extends Component {
       
        constructor(props) { 	
          super(props);  	       
	  this.state = {
             pregunta1: '',
             pregunta2: '',
             pregunta3: '',
             askedQuestions: ''
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
	  this.props.history.push('/login-solicitante');	  	  	  	
        };

	static propTypes = {
          workers: PropTypes.array.isRequired	  	
        };

        componentDidMount() {
	  this.props.getWorkers();
        }

	render() {	    	

	    return (
		    <React.Fragment>
		        <div className='container my-5 py-3 border rounded'>
		                    <h1 className='px-4 font-weight-bold'>Perfilamiento</h1>
		                    <form className='row px-5 py-3' onSubmit={this.SubmitHandler}>
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
		                            />
		                        </div>
		                        <button type="submit">Enviar</button>
		                    </form>
		                </div>    		            		        
		    </React.Fragment>
	    )
        }		
}

const mapStateToProps = state => ({
  workers: state.workers.workers	
});

export default connect(mapStateToProps, { getWorkers } )(Perfilamiento);
