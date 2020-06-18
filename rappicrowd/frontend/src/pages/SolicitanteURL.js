/* Este componente contiene la información que va a ver un solicitante
después de iniciar sesión y está disponible en /solicitante/<cedula> */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWorkers } from '../actions/workers';
import { getInvestorsPerWorkers } from '../actions/investorsperworkers';

import './styles/Login.css'

class SolicitanteURL extends React.Component {
    static propTypes = {
	workers: PropTypes.array.isRequired,
	investorsperworkers: PropTypes.array.isRequired
    };    

    SubmitHandler = e => {
        e.preventDefault();
    };	    

    componentDidMount() {
		/* Obtiene los workers una vez la página se renderiza */
        this.props.getWorkers();
	this.props.getInvestorsPerWorkers();    
    };
    
    render() {
        const ced = this.props.match.params.ced;
	const invperwor = this.props.investorsperworkers;

	const personaEncontrada = this.props.workers.filter(persona => {
          return persona.workerCed === ced;
	});
              
        const filterWorker = personaEncontrada[0];
	const list_ced = [];	
        const list_amount = [];	
        const list_final = {};	     		   
        let i = 0;	
	    
        invperwor.forEach(ipw => {
	  list_ced.push(ipw.investorPerWorkerWorkerCed);		    		       		    
	  list_amount.push(ipw.investorPerWorkerAmount);	    
	});	    		    	               		            
	    		            

	for (i = 0; i < list_ced.length; i++) {               		    
	  list_final[list_ced[i]] = (list_final[list_ced[i]] || 0) + list_amount[i];      	             	 
	}

	filterWorker['total'] = list_final[filterWorker.workerCed];  

        return (
            <React.Fragment>
	       <form method="post" onSubmit={this.SubmitHandler}>
                   <div className='container py-4'>
			<h1><b>Bienvenido {filterWorker.workerName}</b></h1>
	                <h2>Monto Logrado por parte de los inversionistas hasta la fecha</h2>
		        <div align="center">
		        	<h3><b>{filterWorker.total}</b></h3>
		        </div>
		        {filterWorker.total < 3000000 ? (
				<h3>El monto minimo para el credito de la moto debe ser igual o mayor a 3 millones de pesos</h3>
			) : (
				<div align="center">
					<button type="submit">Gestionar credito aprobado</button>
				</div>
			)}	
		   </div>
	      </form>			
            </React.Fragment>
        )
    }
};

const mapStateToProps = state => ({
    workers: state.workers.workers,
    investorsperworkers: state.investorsperworkers.investorsperworkers	
});

export default connect(mapStateToProps, { getWorkers, getInvestorsPerWorkers } )(SolicitanteURL);
