/* Este componente contiene la información de un personaEncontrada
que se le muestra al inversor que evalua invertir en él
Se encuentra en /invertir-en/<workerCed>*/
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWorkers } from '../actions/workers';

class InvertirEn extends React.Component {
	constructor(props) { 	
		super(props);  	       
			this.state = {
			workerNam: "",
			workerScore: ""
        };
    }

    static propTypes = {
		workers: PropTypes.array.isRequired	  	
    };

    componentDidMount() {
		/* Obtiene los workers una vez la página se renderiza */
        this.props.getWorkers();
    };
   
    render() {
        const cedulaDigitada = this.props.match.params.ced;
		const personaEncontrada = this.props.workers.filter(persona => {
			return parseInt(persona.workerCed) === parseInt(cedulaDigitada);
        });
        console.log('La persona', personaEncontrada);

        return (
            <React.Fragment>
                <div className='container p-5 my-4'>
                    <h1 className='py-3 font-weight-bold'>Nos alegra que estés evaluando invertir en "nombreSolicitante"</h1>
                    <div className='row'>
                        <div className='col-3'>
                            <img src='https://us.123rf.com/450wm/rawpixel/rawpixel1612/rawpixel161217099/66875461-individuo-hermoso-concepto-felicidad-expresi%C3%B3n-de-la-cara.jpg?ver=6'
                            width="200"
                            height="200"
                            />
                        </div>
                        <div className='col-9'>
                            <h3>nombreSolicitante se registró fechaRegistro y desde ese momento
                                ha recaudado montoRecaudado para su vehículo de transporte.</h3>
                            <h3 className='font-weight-bold'>Invertir en nombreSolicitante:</h3>
                            <div className='form-inline form-group'>
                                <input
                                    className='form-control rounded'
                                    placeholder='Ingresa cantidad'>
                                </input>
                                <button
                                    type='submit'
                                    className='form-control btn btn-primary mx-4 rounded'>
                                        Invertir
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

const mapStateToProps = state => ({
    workers: state.workers.workers
});

export default connect(mapStateToProps, { getWorkers } )(InvertirEn);