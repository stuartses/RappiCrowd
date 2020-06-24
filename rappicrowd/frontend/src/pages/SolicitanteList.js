/* Este componente es una página que contiene la lista de
solicitantes y se encuentra accesible en /lista-solicitantes */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWorkers } from '../actions/workers';
import { getInvestorsPerWorkers } from '../actions/investorsperworkers';
import { getStates } from '../actions/states';
import { getCities } from '../actions/cities';
import uuid from 'react-uuid';
import moment from 'moment';
import { Link } from 'react-router-dom';


export class SolicitanteList extends Component {

	static propTypes = {
		workers: PropTypes.array.isRequired,
		investorsperworkers: PropTypes.array.isRequired,
		cities: PropTypes.array.isRequired,
		states: PropTypes.array.isRequired
	};

	componentDidMount() {
		/* Obtiene los workers una vez la página se renderiza */
		console.log(this);
		this.props.getWorkers();	
		this.props.getInvestorsPerWorkers();
		this.props.getCities();
		this.props.getStates();
    };

	render() {	
		            /* create variables to receive the models data*/ 
		            const solicitantes = this.props.workers;	      	
			    const invperwor = this.props.investorsperworkers;          
			    const ciudades = this.props.cities;
			    const departamentos = this.props.states;	

		            /* create two empty lists and one dictionary to make operations */ 
			    const list_ced = [];	
			    const list_amount = [];	
			    const list_final = {};	     		   
		            let i = 0;	
			    	
			    const list_ciu = [];	

			    const list_dep = [];

		            /* store every register with your worker id and amount */
		            			                   
			    invperwor.forEach(ipw => {
		    	      list_ced.push(ipw.investorPerWorkerWorkerCed);		    		       		    
		    	      list_amount.push(ipw.investorPerWorkerAmount);	    
		    	    });	    		    	               		            
		            
		            /* create a dictionary where the worker id gets the total with sum amount per worker id*/  

			    for (i = 0; i < list_ced.length; i++) {               		    
		    	      list_final[list_ced[i]] = (list_final[list_ced[i]] || 0) + list_amount[i];      	             	 
		    	    }
			
		            /* create a list where every city id gets the city name */ 
		            ciudades.forEach(ciu => {
	         	      list_ciu[ciu.cityId] = ciu.cityName;  
              		    });

		            /* create a list where every state id gets the state name */
			    departamentos.forEach(dep => {
		    	      list_dep[dep.stateId] = dep.stateName;
			    });	

		            /* include new keys total, cityName, depName, cedInv into the dictionary with the workers info */

		            solicitantes.forEach(s => {
		    	      s['total'] = list_final[s.workerCed];  		              		    
		    	      s['cityName'] = list_ciu[s.workerCityId];	    
		    	      s['depName'] = list_dep[s.workerStateId];	
		              s['cedInv'] = this.props.match.params.ced;		    
		    	    });		               	    


	    return (
		    <React.Fragment>
		        <div className='container py-4'>
		            <h1>¿En quién invertir?</h1>
		            <h2>Esta es la lista de los solicitantes a préstamo.</h2>
		            <table className='table table-striped'>
		                /* uuid is used to get an id for every element into the table */
		              	<thead key={uuid()}>
		                	<tr key={uuid()}>
								<th key={uuid()}>Nombre</th>
								<th key={uuid()}>Apellido</th>
								<th key={uuid()}>Fecha de nacimiento</th>
                                                                <th key={uuid()}>Departamento</th>
								<th key={uuid()}>Ciudad</th>
								<th key={uuid()}>Gastos mensuales</th>
								<th key={uuid()}>Días planeados de trabajo por semana</th>
								<th key={uuid()}>Horas planeadas de trabajo por día</th>
								<th key={uuid()}>Fecha de registro</th>
								<th key={uuid()}>Monto logrado a la fecha</th>
                                                                <th key={uuid()}>Score</th>
								<th key={uuid()}></th>
		                	</tr>
		              		</thead>
		                                  /* ternary operator between parenthesis */
							{!solicitantes || solicitantes.length <= 0 ? (
								<tbody key={uuid()}>	
									<tr key={uuid()}>
										<td colSpan="6" align="center" key={uuid()}>
										<b key={uuid()}>Oops, no hay nada todavía aquí</b>
										</td>
									</tr>
								</tbody>	
							) : (	       	

							solicitantes.map((solicitante) => (
							<tbody key={uuid()}>   
								<tr key={uuid()}>
									<td key={uuid()}>{solicitante.workerName}</td>		 
									<td key={uuid()}>{solicitante.workerLastName}</td>
									<td key={uuid()}>{solicitante.workerBirthday}</td>
                                                                        <td key={uuid()}>{solicitante.depName}</td>
									<td key={uuid()}>{solicitante.cityName}</td>					
									<td key={uuid()}>{solicitante.workerSpentsPerMonth}</td>
									<td key={uuid()}>{solicitante.workerDaysPerWeek}</td>
									<td key={uuid()}>{solicitante.workerLabourHoursPerDay}</td>
								        /* moment coverts the format of workerCreatedAt */
									<td key={uuid()}>{moment(solicitante.workerCreatedAt).format('DD-MM-YYYY')}</td>
								        <td key={uuid()}>{solicitante.total}</td>
								        <td key={uuid()}>{solicitante.workerScore}</td>
									<td align="center">
										<Link to={`/invertir-en/${solicitante.cedInv}/${solicitante.workerCed}`} className='btn btn-primary rounded' >
											Invertir
										</Link>
									</td>
								</tr>
							</tbody>			   
				   			))			        
			         	)}	                      
		            </table>
		        </div>
		    </React.Fragment>
	    )
	}		
}

/* map the models into state to props to send the info into the react schema */
const mapStateToProps = state => ({
  workers: state.workers.workers,
  investorsperworkers: state.investorsperworkers.investorsperworkers,
  cities: state.cities.cities,
  states: state.states.states	
});

/* export the component to App.js */
export default connect(mapStateToProps, { getWorkers, getInvestorsPerWorkers, getCities, getStates } )(SolicitanteList);
