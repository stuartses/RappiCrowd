import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCountries } from '../actions/countries';
import { getDocutypes } from '../actions/docutypes';
import { getStates } from '../actions/states';
import { getCities } from '../actions/cities';

import './styles/Registro.css'

export class RegistroInversor extends Component {

	static propTypes = {
          countries: PropTypes.array.isRequired,
          docutypes: PropTypes.array.isRequired,
          states: PropTypes.array.isRequired,
	  cities: PropTypes.array.isRequired	
        };

        componentDidMount() {
          this.props.getCountries();
          this.props.getDocutypes();
          this.props.getStates();
          this.props.getCities();		
        }

	render() {
	    return (
		        <React.Fragment>
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
		                                    <label htmlfor="NombreDomiciliario" required>Nombre completo</label>
		                                    <input type="text" className="form-control w-100" id="NombreDomiciliario" placeholder="Nombre completo"/>
		                                </div>
		                                <div className='form-input'>
		                                    <label htmlfor="ApellidoDomiciliario">Apellidos</label>
		                                    <input type="text" className="form-control w-100" id="ApellidoDomiciliario" placeholder="Apellidos completos"/>
		                                </div>
		                                <div className='form-input'>
		                                    <label htmlfor="FechaNacimiento">Fecha de nacimiento</label>
		                                    <input type="date" className="form-control w-100" id="FechaNacimiento" placeholder="Fecha de nacimiento"/>
		                                </div>
		                                <div className='form-input'>
		                                    <label htmlfor="NúmeroCelular">Número de celular</label>
		                                    <input type="text" className="form-control w-100" id="NúmeroCelular" placeholder="Número de celular"/>
		                                </div>
                                                <div className='form-input'>
		                                    <label htmlfor="Email">Correo Electronico</label>
		                                    <input type="text" className="form-control w-100" id="Email" placeholder="Correo Electronico"/>
		                                </div>		                                
		                            </div>
		                            <div className='form-group'>
		                                <div className='form-input'>
		                                    <label htmlfor="DocumentoIdentidad">Documento de identidad</label>
		                                    <input type="text" className="form-control w-100" id="DocumentoIdentidad" placeholder="Número de documento"/>
		                                </div>		                                 
		                                <div class="dropdown">
		                                    <label htmlfor="PaisDocumentoIdentidad">País del Documento de Identificación</label>
                                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                                    </button>
		                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
		                                            {this.props.countries.map(country => (
		                                                <a class="dropdown-item" href="#" id="countryCed" key={country.countryId}>{country.countryName}</a>
						            ))}		    
		                                        </div>
		                                 </div>
		                                 
		                                <div class="dropdown">
		                                    <label htmlfor="TipoDocumentoIdentidad">Tipo de Documento de Identificación</label>
                                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                                    </button>
		                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
		                                            {this.props.docutypes.map(docutype => (
		                                                <a class="dropdown-item" href="#" id="docutypeCed" key={docutype.docutypeId}>{docutype.docutypeName}</a>
						            ))}		    
		                                        </div>
		                                 </div>
		    
		                                <div class="dropdown">		                                    
		                                    <label htmlfor="EstadoResidenciaActualInversor">Departamento o Estado de Residencia</label>
                                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                                    </button>
		                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
		                                            {this.props.states.map(state => (
		                                                <a class="dropdown-item" href="#" id="stateid" key={state.stateId}>{state.stateName}</a>
						            ))}		    
		                                        </div>
		                                </div>
		                                <div class="dropdown">		                                    
		                                    <label htmlfor="CiudadResidenciaActualInversor">Ciudad de Residencia del Inversor</label>
                                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                                    </button>
		                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
		                                            {this.props.cities.map(city => (
		                                                <a class="dropdown-item" href="#" id="cityid" key={city.cityId}>{city.cityName}</a>
						            ))}		    
		                                        </div>
		                                 </div>
		                            </div>

		                            <h2 className='pt-0 h3 font-weight-bold'>Solo quedan los datos de usuario</h2>
		                            <div className='form-group'>
		                                <input type="text" className="form-control w-100" id="Usuario" placeholder="Usuario -> Sera su numero de cedula" disabled />
		                            </div>

		                            <div className='form-group'>
		                                <input type="password" className="form-control w-100" id="Contraseña" placeholder="Contraseña"/>
		                            </div>

		                        </div>
		                        <div>
		                            <button type="submit" className="float-right btn-rappi">Registrarse</button>
		                        </div>
		                    </div> 
		                </div>
		            </div>
		        </React.Fragment>
		        )
        }		
}

const mapStateToProps = state => ({
  countries: state.countries.countries,
  docutypes: state.docutypes.docutypes,
  states: state.states.states,
  cities: state.cities.cities	
});

export default connect(mapStateToProps, { getCountries, getDocutypes, getStates, getCities } )(RegistroInversor);
