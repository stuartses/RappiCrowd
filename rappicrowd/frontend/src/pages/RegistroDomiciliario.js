import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCountries } from '../actions/countries';
import { getDocutypes } from '../actions/docutypes';
import { getStates } from '../actions/states';
import { getCities } from '../actions/cities';
import { getEducationLevels } from '../actions/educationlevels';
import { getCurrencies } from '../actions/currencies';
import { getWorkers } from '../actions/workers';
import { addWorker } from '../actions/workers';

import './styles/Registro.css'

export class RegistroDomiciliario extends Component {
       
        constructor(props) { 	
          super(props);  	       
	  this.state = {
	    workerName: "",
	    workerLastName: "",
            workerBirthday: "",
            workerCelular: "",
	    workerEmail: "",
	    workerCed: "",
	    workerCedCountryId: "",
	    workerCedDocutypeId: "",
	    workerStateId: "",
	    workerCityId: "",
	    workerAddress: "",
	    workerPassword: "",
            workerEducationLevelId: "",
            workerSpentsPerMonth: "",
            workerEarningsPerMonth: "",
            workerLabourHoursPerDay: "",
	    workerLicenseDriver: "",
            workerDaysPerWeek: "",
            workerTwitter: "",
            workerFacebook: "",
            workerCurrencyId: "",
            workerPsychoTest: "",
            workerScore: "0"
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
	  	
	  
	    const { workerCed, workerName, workerLastName, workerCelular, workerAddress, workerCityId, workerCedCountryId, workerStateId, workerEducationLevelId, workerSpentsPerMonth, workerEarningsPerMonth, workerLabourHoursPerDay, workerBirthday, workerPassword, workerLicenseDriver, workerDaysPerWeek, workerEmail, workerTwitter, workerFacebook, workerCedDocutypeId, workerCurrencyId, workerPsychoTest, workerScore } = this.state;
	   	
	  const workers = { workerCed, workerName, workerLastName, workerCelular, workerAddress, workerCityId, workerCedCountryId, workerStateId, workerEducationLevelId, workerSpentsPerMonth, workerEarningsPerMonth, workerLabourHoursPerDay, workerBirthday, workerPassword, workerLicenseDriver, workerDaysPerWeek, workerEmail, workerTwitter, workerFacebook, workerCedDocutypeId, workerCurrencyId, workerPsychoTest, workerScore };
	  	
	  this.props.addWorker(workers);		  
	  this.props.history.push('/perfilamiento');	
        };

	static propTypes = {
          countries: PropTypes.array.isRequired,
          docutypes: PropTypes.array.isRequired,
          states: PropTypes.array.isRequired,
	  cities: PropTypes.array.isRequired,
	  educationlevels: PropTypes.array.isRequired,
	  currencies: PropTypes.array.isRequired,	
          workers: PropTypes.array.isRequired	  	
        };

        componentDidMount() {
          this.props.getCountries();
          this.props.getDocutypes();
          this.props.getStates();
          this.props.getCities();
	  this.props.getEducationLevels();
	  this.props.getCurrencies();	
	  this.props.getWorkers();
	  this.props.addWorker();	
        }

	render() {	    	
	    const { workerCed, workerName, workerLastName, workerCelular, workerAddress, workerCityId, workerCedCountryId, workerStateId, workerEducationLevelId, workerSpentsPerMonth, workerEarningsPerMonth, workerLabourHoursPerDay, workerBirthday, workerPassword, workerLicenseDriver, workerDaysPerWeek, workerEmail, workerTwitter, workerFacebook, workerCedDocutypeId, workerCurrencyId, workerPsychoTest, workerScore } = this.state;
               
            const workerCedCountries = this.props.countries.map((wc) => <option key={wc.countryId} value={wc.countryId}>{wc.countryName}</option>); 
            
            const workerCedDocutypes = this.props.docutypes.map((wd) => <option key={wd.docutypeId} value={wd.docutypeId}>{wd.docutypeName}</option>); 
	    	
            const workerStates = this.props.states.map((ws) => <option key={ws.stateId} value={ws.stateId}>{ws.stateName}</option>);
            
            const workerCities = this.props.cities.map((wci) => <option key={wci.cityId} value={wci.cityId}>{wci.cityName}</option>); 

            const workerEducationLevels = this.props.educationlevels.map((we) => <option key={we.educationLevelId} value={we.educationLevelId}>{we.educationLevelName}</option>); 

            		
            const workerCurrencies = this.props.currencies.map((wcu) => <option key={wcu.currencyId} value={wcu.currencyId}>{wcu.currencyName}</option>);

	    return (
		    <React.Fragment>
		        <form method="post" onSubmit={this.SubmitHandler}>
		            <div className='container pl-0 pr-5 my-3'>
		                <div className='row'>
		                    <div className='col-sm-3 img-signUpDomiciliario'>
		                        { /* La imagen es mostrada con CSS aquí  */ }
					                    <h1 className='img-signUpContent'>Registro</h1>
		                    </div>

		                    <div className='col-9 p-4 m-0'>
		                        <div className='form-row'>
		                            <h2 className='pt-0 h3 font-weight-bold'>Comencemos con datos básicos</h2>
		                            <div className='form-group'>
		    		                                <div className='form-input'>
		    		                                    <label htmlFor="NombreDomiciliario" required>Nombre completo</label>
		    		                                    <input type="text" className="form-control w-100" name="workerName" onChange={this.changeHandler} value={workerName} placeholder="Nombre completo"/>
		    		                                </div>
		    		                                <div className='form-input'>
		    		                                    <label htmlFor="ApellidoDomiciliario">Apellidos</label>
		    		                                    <input type="text" className="form-control w-100" name="workerLastName" onChange={this.changeHandler} value={workerLastName} placeholder="Apellidos completos"/>
		    		                                </div>
		    		                                <div className='form-input'>
		    		                                    <label htmlFor="FechaNacimiento">Fecha de nacimiento</label>
		    		                                    <input type="date" className="form-control w-100" name="workerBirthday" onChange={this.changeHandler} value={workerBirthday} placeholder="Fecha de nacimiento"/>
		    		                                </div>
		    		                                <div className='form-input'>
		    		                                    <label htmlFor="NúmeroCelular">Número de celular</label>
		    		                                    <input type="text" className="form-control w-100" name="workerCelular" onChange={this.changeHandler} value={workerCelular} placeholder="Número de celular"/>
		    		                                </div>
		                                                <div className='form-input'>
		    		                                    <label htmlFor="Email">Correo Electronico</label>
		    		                                    <input type="text" className="form-control w-100" name="workerEmail" onChange={this.changeHandler} value={workerEmail} placeholder="Correo Electronico"/>
		    		                                </div>                                             	                                                                     <div className='form-input'>
		    		                                    <label htmlFor="Twitter">Twitter</label>
		    		                                    <input type="text" className="form-control w-100" name="workerTwitter" onChange={this.changeHandler} value={workerTwitter} placeholder="Twitter"/>
		    		                                </div>
                                                                <div className='form-input'>
		    		                                    <label htmlFor="Facebook">Facebook</label>
		    		                                    <input type="text" className="form-control w-100" name="workerFacebook" onChange={this.changeHandler} value={workerFacebook} placeholder="Facebook"/>
		    		                                </div>
		    		                            </div>
		    		                            <div className='form-group'>
		    		                                <div className='form-input'>
		    		                                    <label htmlFor="DocumentoIdentidad">Documento de identidad</label>
		    		                                    <input type="text" className="form-control w-100" name="workerCed" onChange={this.changeHandler} value={workerCed} placeholder="Número de documento"/>
		    		                                </div>		                                 
		    		                                <div className="select">		                                       
		    		                                    <label htmlFor="PaisDocumentoIdentidad">País de Documento de Identificación</label>
		    		                                    <select name="workerCedCountryId" value={workerCedCountryId} onChange={this.changeHandler}> 
		                                                             <option disabled value=""></option>   
		                                                             {workerCedCountries}                    
		    		                                    </select>
		    		                                </div>           
		    		                                 
		    		                                <div className="select">		                                       
		    		                                    <label htmlFor="TipoDocumentoIdentidad">Tipo de Documento de Identificación</label>
		    		                                    <select name="workerCedDocutypeId" value={workerCedDocutypeId} onChange={this.changeHandler}>  
		                                                              <option disabled value=""></option>   
		                                                              {workerCedDocutypes}                    
		    		                                    </select>
		    		                                </div>           
		    		                                		    
		    		                                <div className="select">		                                       
		    		                                    <label htmlFor="SolicitanteResidenciaSolicitante">Departamento de Residencia del Solicitante</label>
		    		                                    <select name="workerStateId" value={workerStateId} onChange={this.changeHandler}>  
		                                                                  <option disabled value=""></option>   
		                                                        	  {workerStates}                    
		    		                                    </select>
		    		                                </div>           		                                 
		    		                                 
		    		                                <div className="select">		                                       
		    		                                    <label htmlFor="CiudadResidenciaSolicitante">Ciudad de Residencia Actual del Solicitante</label>
		    		                                    <select name="workerCityId" value={workerCityId} onChange={this.changeHandler}>                                                     
		                                                                  <option disabled value=""></option>   
		                                                        	  {workerCities}                    
		    		                                    </select>
		    		                                </div>           
		    		                                 
		    		                                 <div className='form-input'>
		    		                                    <label htmlFor="DireccionResidenciaSolicitante">Dirección de Residencia del Solicitante</label>
		    		                                    <input type="text" className="form-control w-100" name="workerAddress" onChange={this.changeHandler} value={workerAddress} placeholder="Dirección"/>
		    		                                </div>
		                                                
		    		                                <div className="select">		                                       
		    		                                    <label htmlFor="NivelEducativo">Nivel Educativo Culminado del Solicitante</label> 
		    		                                    <select name="workerEducationLevelId" value={workerEducationLevelId} onChange={this.changeHandler}> 
		                                                                  <option disabled value=""></option>   
		                                                        	  {workerEducationLevels}                    
		    		                                    </select>
		    		                                </div>
		                                                
		    		                                <div className='form-input'>
		    		                                    <label htmlFor="LicenciaConduccion">Licencia de Conduccion</label>
		    		                                    <input type="text" className="form-control w-100" name="workerLicenseDriver" onChange={this.changeHandler} value={workerLicenseDriver} placeholder="Número de Licencia de Conducción"/>
		    		                                </div>		                                 
		    		                            </div>

		                            <h2 className='pt-0 h3 font-weight-bold'>Y ahora unos datos para motivarnos a contribuir</h2>
		                            <div className='form-group'>

		                                <div className='form-input'>
		                                    <label htmlFor="GastosMensuales">
		                                        Gastos mensuales
		                                    </label>
		                                    <input type="number" className="form-control w-100" id="GastosMensuales" placeholder="Ingresa Gastos mensuales" name="workerSpentsPerMonth" onChange={this.changeHandler} value={workerSpentsPerMonth} min="0" />
		                                    <small id="gastosMensualesHelp" className="form-text text-muted">Piensa en vivienda, servicios, deudas, recreación, etc.</small>
		                                </div>
		                                 
		                                <div className='form-input'>
		                                    <label htmlFor="IngresosMensuales">
		                                        Ingresos mensuales
		                                    </label>
		                                    <input type="number" className="form-control w-100" id="IngresosMensuales" placeholder="Ingresa Gastos mensuales" name="workerEarningsPerMonth" onChange={this.changeHandler} value={workerEarningsPerMonth} min="0" />
		                                    <small id="ingresosMensualesHelp" className="form-text text-muted">Piensa en arriendos, negocios, trabajos adicionales, etc.</small>
		                                </div>
		                                 
		    		                <div className="select">		                                                                                         <label htmlFor="TipoMoneda">Típo de Moneda de Ingresos y Gastos</label>
    		                                    <select name="workerCurrencyId" value={workerCurrencyId} onChange={this.changeHandler}>                          
							<option disabled value=""></option>   
		                                       	{workerCurrencies}                    
		    		                     </select>
		    		                </div>

		                            </div>

		                            <div className='form-group'>
		                                <div className='form-input'>
		                                    <label htmlFor="HorasPorDía">
		                                      Horas disponibles por día para trabajar
		                                    </label>
		                                    <input type="number" className="form-control w-100" id="HorasPorDía" placeholder="Ingresa horas por día" name="workerLabourHoursPerDay" onChange={this.changeHandler} value={workerLabourHoursPerDay} min="0" max="24" />
		                                </div>
		                                 
		                                <div className='form-input'>
		                                    <label htmlFor="DíasDisponibles">
		                                        Días disponibles para trabajar por semana
		                                    </label>
		                                    <input type="number" className="form-control w-100" id="DíasDisponibles" placeholder="Ingresa número de días" name="workerDaysPerWeek" onChange={this.changeHandler} value={workerDaysPerWeek} min="0" max="7" />
		                                </div>
		        
		                            </div>

		                            <h2 className='pt-0 h3 font-weight-bold'>Solo quedan los datos de usuario</h2>
		                            <div className='form-group'>
		                                <input type="text" className="form-control w-100" id="Usuario" placeholder="Usuario -> Número de Identificación" disabled />
		                            </div>

		                            <div className='form-group'>
		                                <input type="password" className="form-control w-100"  placeholder="Contraseña" name="workerPassword" onChange={this.changeHandler} value={workerPassword} />
		                            </div>

		                        </div>
		                        <div>
		                            <button type="submit" className="float-right btn-rappi">Registrarse</button>
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
  countries: state.countries.countries,
  docutypes: state.docutypes.docutypes,
  states: state.states.states,
  cities: state.cities.cities,
  educationlevels: state.educationlevels.educationlevels,
  currencies: state.currencies.currencies,	
  workers: state.workers.workers	
});

export default connect(mapStateToProps, { getCountries, getDocutypes, getStates, getCities, getWorkers, getEducationLevels, getCurrencies, addWorker } )(RegistroDomiciliario);
