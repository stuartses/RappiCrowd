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
	
import './styles/Perfilamiento.css'

export class Perfilamiento extends Component {
       
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
		                                name='pregunta1'		                                
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
  countries: state.countries.countries,
  docutypes: state.docutypes.docutypes,
  states: state.states.states,
  cities: state.cities.cities,
  educationlevels: state.educationlevels.educationlevels,
  currencies: state.currencies.currencies,	
  workers: state.workers.workers	
});

export default connect(mapStateToProps, { getCountries, getDocutypes, getStates, getCities, getWorkers, getEducationLevels, getCurrencies, addWorker } )(Perfilamiento);
