import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWorkers } from '../actions/workers';
import uuid from 'react-uuid'


export class SolicitanteList extends Component {

	static propTypes = {
	          workers: PropTypes.array.isRequired	  	
	};

	 componentDidMount() {
	   this.props.getWorkers();		 	  	
         }
       
	render() {	    	
            		
            const solicitantes = this.props.workers;

	    return (
		    <React.Fragment>
		        <div className='container py-4'>
		            <h1>¿En quién invertir?</h1>
		            <h2>Esta es la lista de los solicitantes a préstamo.</h2>
		            <table className='table table-striped'>
		              <thead key={uuid()}>
		                <tr key={uuid()}>
		                  <th key={uuid()}>Nombre</th>
		                  <th key={uuid()}>Apellido</th>
		                  <th key={uuid()}>Fecha de nacimiento</th>
		                  <th key={uuid()}>Ciudad</th>
		                  <th key={uuid()}>Gastos mensuales</th>
		                  <th key={uuid()}>Días planeados de trabajo por semana</th>
		                  <th key={uuid()}>Horas planeadas de trabajo por día</th>
		                  <th key={uuid()}>Fecha de registro</th>
		                  <th key={uuid()}>Monto logrado</th>
		                  <th key={uuid()}></th>
		                </tr>
		              </thead>		              
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
			               <td key={uuid()}>{solicitante.workerCityId}</td>
			               <td key={uuid()}>{solicitante.workerSpentsPerMonth}</td>
			               <td key={uuid()}>{solicitante.workerDaysPerWeek}</td>
                                       <td key={uuid()}>{solicitante.workerLabourHoursPerDay}</td>
				       <td key={uuid()}>{solicitante.workerCreatedAt}</td>
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

const mapStateToProps = state => ({
  workers: state.workers.workers	
});

export default connect(mapStateToProps, { getWorkers } )(SolicitanteList);
