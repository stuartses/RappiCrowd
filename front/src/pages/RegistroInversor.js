import React from 'react';

import './styles/Registro.css'

function RegistroInversor() {
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
                        </div>
                        <div className='form-group'>
                            <div className='form-input'>
                                <label htmlfor="CiudadResidencia">Ciudad de residencia</label>
                                <input type="text" className="form-control w-100" id="CiudadResidencia" placeholder="Ciudad de residencia"/>
                            </div>
                            <div className='form-input'>
                                <label htmlfor="DocumentoIdentidad">Documento de identidad</label>
                                <input type="number" className="form-control w-100" id="DocumentoIdentidad" placeholder="Número de documento"/>
                            </div>
                            <div className='form-input'>
                                <label htmlfor="NúmeroCelular">Número de celular</label>
                                <input type="number" className="form-control w-100" id="NúmeroCelular" placeholder="Número de celular"/>
                            </div>
                        </div>

                        <h2 className='pt-0 h3 font-weight-bold'>Solo quedan los datos de usuario</h2>
                        <div className='form-group'>
                            <input type="text" className="form-control w-100" id="Ingresa tu usuario" placeholder="Usuario"/>
                        </div>

                        <div className='form-group'>
                            <input type="password" className="form-control w-100" id="Ingresa tu contraseña" placeholder="Contraseña"/>
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

export default RegistroInversor;