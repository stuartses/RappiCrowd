import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCountries } from '../actions/countries';
import { getDocutypes } from '../actions/docutypes';
import { getStates } from '../actions/states';
import { getCities } from '../actions/cities';
import { getInvestors } from '../actions/investors';
import { addInvestor } from '../actions/investors';


import './styles/Registro.css'

export class RegistroInversor extends Component {
       
        constructor(props) { 	
          super(props);  	       
	  this.state = {
	    investorName: "",
	    investorLastName: "",
            investorBirthday: "",
            investorCelular: "",
	    investorEmail: "",
	    investorCed: "",
	    investorCedCountryId: "",
	    investorCedDocutypeId: "",
	    investorStateId: "",
	    investorCityId: "",
	    investorAddress: "",
	    investorPassword: ""	           
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
	  const { investorCed, investorName, investorLastName, investorCelular, investorAddress, investorCityId, investorCedCountryId, investorStateId, investorPassword, investorEmail, investorCedDocutypeId, investorBirthday } = this.state;
	  	
	   	
	  const investors = { investorCed, investorName, investorLastName, investorCelular, investorAddress, investorCityId, investorCedCountryId, investorStateId, investorPassword, investorEmail, investorCedDocutypeId, investorBirthday };
	  	
	  this.props.addInvestor(investors);	  	
	  this.props.history.push('/listado-domiciliarios');
        };

	static propTypes = {
          countries: PropTypes.array.isRequired,
          docutypes: PropTypes.array.isRequired,
          states: PropTypes.array.isRequired,
	  cities: PropTypes.array.isRequired,
          investors: PropTypes.array.isRequired	  	
        };

        componentDidMount() {
          this.props.getCountries();
          this.props.getDocutypes();
          this.props.getStates();
          this.props.getCities();
	  this.props.getInvestors();
	  this.props.addInvestor();	
        }


	render() {	    	
	    const { investorCed, investorName, investorLastName, investorCelular, investorAddress, investorCityId, investorCedCountryId, investorStateId, investorPassword, investorEmail, investorCedDocutypeId, investorBirthday, investorCreatedAt, investorUpdatedAt } = this.state;
               
            const investorCedCountries = this.props.countries.map((ivc) => <option key={ivc.countryId} value={ivc.countryId}>{ivc.countryName}</option>); 
            
            const investorCedDocutypes = this.props.docutypes.map((ivd) => <option key={ivd.docutypeId} value={ivd.docutypeId}>{ivd.docutypeName}</option>); 
	    	
            const investorStates = this.props.states.map((ivs) => <option key={ivs.stateId} value={ivs.stateId}>{ivs.stateName}</option>);
            
            const investorCities = this.props.cities.map((ivci) => <option key={ivci.cityId} value={ivci.cityId}>{ivci.cityName}</option>); 


	    return (		           	    
		        <React.Fragment>
		          <form method="post" onSubmit={this.SubmitHandler}>
		            <div className='container pl-0 pr-5 my-3'>
		                <div className='row'>
		                    <div className='col-sm-3 img-signUpInversor'>
		                        { /* La imagen es mostrada con CSS aquí  */ }
		                        <h1 className='img-signUpContent'>Registro</h1>
		                    </div>

		                    <div className='col-9 p-4 m-0'>
		                        <div className='form-row'>
		                            <h2 className='pt-0 h3 font-weight-bold'>Comencemos con datos básicos</h2>
		                            <div className='form-group'>
		                                <div className='form-input'>
		                                    <label htmlFor="NombreDomiciliario" required>Nombre completo</label>
		                                    <input type="text" className="form-control w-100" name="investorName" onChange={this.changeHandler} value={investorName} placeholder="Nombre completo"/>
		                                </div>
		                                <div className='form-input'>
		                                    <label htmlFor="ApellidoDomiciliario">Apellidos</label>
		                                    <input type="text" className="form-control w-100" name="investorLastName" onChange={this.changeHandler} value={investorLastName} placeholder="Apellidos completos"/>
		                                </div>
		                                <div className='form-input'>
		                                    <label htmlFor="FechaNacimiento">Fecha de nacimiento</label>
		                                    <input type="date" className="form-control w-100" name="investorBirthday" onChange={this.changeHandler} value={investorBirthday} placeholder="Fecha de nacimiento"/>
		                                </div>
		                                <div className='form-input'>
		                                    <label htmlFor="NúmeroCelular">Número de celular</label>
		                                    <input type="text" className="form-control w-100" name="investorCelular" onChange={this.changeHandler} value={investorCelular} placeholder="Número de celular"/>
		                                </div>
                                                <div className='form-input'>
		                                    <label htmlFor="Email">Correo Electronico</label>
		                                    <input type="text" className="form-control w-100" name="investorEmail" onChange={this.changeHandler} value={investorEmail} placeholder="Correo Electronico"/>
		                                </div>		                                
		                            </div>
		                            <div className='form-group'>
		                                <div className='form-input'>
		                                    <label htmlFor="DocumentoIdentidad">Documento de identidad</label>
		                                    <input type="text" className="form-control w-100" name="investorCed" onChange={this.changeHandler} value={investorCed} placeholder="Número de documento"/>
		                                </div>		                                 
		                                <div className="select">		                                       
		                                    <label htmlFor="PaisDocumentoIdentidad">País de Documento de Identificación</label>
		                                    <select name="investorCedCountryId" value={investorCedCountryId} onChange={this.changeHandler}>                                                           	              <option disabled value=""></option>   
                                                         {investorCedCountries}                    
		                                    </select>
		                                </div>           
		                                 
		                                <div className="select">		                                       
		                                    <label htmlFor="TipoDocumentoIdentidad">Tipo de Documento de Identificación</label>
		                                    <select name="investorCedDocutypeId" value={investorCedDocutypeId} onChange={this.changeHandler}>                                                           	       <option disabled value=""></option>   
                                                          {investorCedDocutypes}                    
		                                    </select>
		                                </div>           
		                                		    
		                                <div className="select">		                                       
		                                    <label htmlFor="EstadoResidenciaInversor">Departamento de Residencia del Inversor</label>
		                                    <select name="investorStateId" value={investorStateId} onChange={this.changeHandler}>                                                           	                       <option disabled value=""></option>   
                                                    	  {investorStates}                    
		                                    </select>
		                                </div>           		                                 
		                                 
		                                <div className="select">		                                       
		                                    <label htmlFor="CiudadResidenciaInversor">Ciudad de Residencia del Inversor</label>
		                                    <select name="investorCityId" value={investorCityId} onChange={this.changeHandler}>                                                           	                       <option disabled value=""></option>   
                                                    	  {investorCities}                    
		                                    </select>
		                                </div>           
		                                 
		                                 <div className='form-input'>
		                                    <label htmlFor="DireccionResidenciaInversor">Dirección de Residencia del Inversor</label>
		                                    <input type="text" className="form-control w-100" name="investorAddress" onChange={this.changeHandler} value={investorAddress} placeholder="Dirección"/>
		                                </div>
		                            </div>

		                            <h2 className='pt-0 h3 font-weight-bold'>Solo quedan los datos de usuario</h2>
		                            <div className='form-group'>
		                                <input type="text" className="form-control w-100" id="Usuario" placeholder="Usuario -> Número de Identificación" disabled />
		                            </div>

		                            <div className='form-group'>
		                                <input type="password" className="form-control w-100" name="investorPassword" onChange={this.changeHandler} value={investorPassword} placeholder="Contraseña"/>
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
  investors: state.investors.investors	
});

export default connect(mapStateToProps, { getCountries, getDocutypes, getStates, getCities, getInvestors, addInvestor } )(RegistroInversor);
