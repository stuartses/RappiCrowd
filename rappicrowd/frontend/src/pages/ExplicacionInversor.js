import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Explicacion.css';

function ExplicacionDomiciliario() {
	    return (
		        <React.Fragment>
		            <div className='container p-3 my-3'>
		                <h1 className='my-4'>¿Cómo funciona?</h1>
		                    <div className='row'>

		                        <div className='col-4 my-3'>
		                            <div className='row'>
		                                <div className='col-2 mt-3'>
		                                    <p className='btn btn-info btn-circle btn-xl' disabled>1</p>
		                                </div>
		                                <div className='col-10'>
		                                    <h2>Perfilamiento</h2>
		                                        <p>Analizamos antecedentes y obtenemos perfil psicológico de la persona que desea
		                                            ser Rappitendero, utilizando inteligencia artificial.</p>
		                                </div>
		                            </div>
		                        </div>

		                        <div className='col-4 my-3'>
		                            <div className='row'>
		                                <div className='col-2 mt-3'>
		                                    <p className='btn btn-info btn-circle btn-xl'>2</p>
		                                </div>
		                                <div className='col-10'>
		                                    <h2>Selección</h2>
		                                    <p>Te presentamos un listado de las personas que desean ser Rappitenderos, el resultado del
		                                        perfilamiento y lo que le falta para adquirir su medio de transporte.</p>
		                                </div>
		                            </div>
		                        </div>

		                        <div className='col-4 my-3'>
		                            <div className='row'>
		                                <div className='col-2 mt-3'>
		                                    <p className='btn btn-info btn-circle btn-xl'>3</p>
		                                </div>
		                                <div className='col-10'>
		                                    <h2>Inversión</h2>
		                                        <p>Una vez invertes, el dinero se va a una bolsa donde se suma a lo invertido por otras
		                                            personas, hasta que se complete el monto para adquirir el medio de transporte.</p>
		                                </div>
		                            </div>
		                        </div>

		                    </div>

		                    <div className='row'>

		                        <div className='col-6 my-3 px-5'>
		                            <div className='row'>
		                                <div className='col-2 mt-3'>
		                                    <p className='btn btn-info btn-circle btn-xl' disabled>4</p>
		                                </div>
		                                <div className='col-10'>
		                                    <h2>Pagos</h2>
		                                        <p>Por cada servicio que el Rappitendero realiza, 30% se va para el pago del préstamo.</p>
		                                </div>
		                            </div>
		                        </div>

		                        <div className='col-6 my-3 px-5'>
		                            <div className='row'>
		                                <div className='col-2 mt-3'>
		                                    <p className='btn btn-info btn-circle btn-xl'>5</p>
		                                </div>
		                                <div className='col-10'>
		                                    <h2>Rendimiento</h2>
		                                    <p>Los pagos del Rappitendero se reparten de manera proporcional de acuerdo al monto que hayas
		                                        invertido.</p>
		                                </div>
		                            </div>
		                        </div>
		                   
		                    </div>

		                <div className='text-center'>
		                    <h2>Y listo</h2>
		                    <p className=''>Pero antes que nada, necesitamos que crees tu usuario.</p>
		                    <div className='my-4'>
		                        <Link to='/registro-inversor' className='btn-rappi'>
		                            Crear usuario
		                        </Link>
		                    </div>
		                </div>
		            </div>

		        </React.Fragment>
		        )
}

export default ExplicacionDomiciliario;
