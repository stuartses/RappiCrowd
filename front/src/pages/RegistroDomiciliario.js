import React from 'react';
import './styles/RegistroDomiciliario.css'

function RegistroDomiciliario() {
    return (
    <React.Fragment>
        <div className='container p-3 my-3'>
            <h1>Registro</h1>
            <form>
                <h2>Comencemos con datos básicos</h2>
                <div class='form-group'>
                    <label for="InputName">Nombre completo</label>
                    <input type="text" class="form-control" id="NombreDomiciliario" placeholder="Nombre completo"/>
                    <label for="InputLastName">Apellidos</label>
                    <input type="text" class="form-control" id="ApellidoDomiciliario" placeholder="Apellidos"/>
                    <label for="InputBirthDate">Fecha de nacimiento</label>
                    <input type="date" class="form-control" id="FechaNacimiento" placeholder="Fecha de nacimiento"/>
                    <label for="InputNacionality">Nacionalidad</label>
                    <input type="text" class="form-control" id="PaísNacimiento" placeholder="País de nacimiento"/>
                    <label for="InputNacionality">Ciudad de residencia</label>
                    <input type="text" class="form-control" id="CiudadResidencia" placeholder="Ciudad de residencia"/>
                    <label for="InputIdentityDocument">Documento de identidad</label>
                    <input type="number" class="form-control" id="DocumentoIdentidad" placeholder="Ciudad de residencia"/>
                    <label for="InputPhoneNumber">Número de celular</label>
                    <input type="number" class="form-control" id="NúmeroCelular" placeholder="Número de celular"/>
                </div>

                <h2>Y ahora unos datos para motivarnos a contribuir</h2>
                <div class='form-group'>
                    <label for="InputName">
                        ¿A cuánto ascienden tus gastos mensuales?
                        Piensa en vivienda, servicios, ocio, recreación, etc
                    </label>
                    <input type="number" class="form-control" id="GastosMensuales" placeholder="Ingresa Gastos mensuales"/>
                    

                    <label for="InputDíasDisponibles">
                        ¿Cuántos días disponibles tienes para trabajar por semana?
                    </label>
                    <input type="number" class="form-control" id="DíasDisponibles" placeholder="Ingresa número de días"/>

                    <label for="HorasPorDía">
                        ¿Cuántos horas por día tienes pensando trabajar?
                    </label>
                    <input type="number" class="form-control" id="HorasPorDía" placeholder="Ingresa horas por día"/>
                </div>
                    
                <h2>Solo quedan los datos de usuario</h2>
                <div class='form-group'>
                    <label for="InputUsuario">
                        ¿A cuánto ascienden tus gastos mensuales?
                        Piensa en vivienda, servicios, ocio, recreación, etc
                    </label>
                    <input type="text" class="form-control" id="Usuario" placeholder="Ingresa tu nombre de usuario para registro"/>
                    

                    <label for="InputContraseña">
                        Contraseña
                    </label>
                    <input type="password" class="form-control" id="Contraseña" placeholder="Ingresa tu contraseña para registro"/>
                    
                </div> 
                <button type="submit" class="btn-rappi">Submit</button>
            </form>
        </div>
    </React.Fragment>
    )
}

export default RegistroDomiciliario;