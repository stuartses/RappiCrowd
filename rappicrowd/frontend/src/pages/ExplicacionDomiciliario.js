import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Explicacion.css';

function ExplicacionDomiciliario() {
	    return (
		        <React.Fragment>
		            <div className='container p-3 my-3'>
		                <h1 className='my-4'>¿Cómo funciona?</h1>
		                    <div className='row'>

		                        <div className='col-4'>
		                            <div className='row'>
		                                <div className='col-2 mt-3'>
		                                    <p className='btn btn-info btn-circle btn-xl' disabled>1</p>
		                                </div>
		                                <div className='col-10'>
		                                    <h2>20 preguntas</h2>
		                                        <p>Las preguntas tienen como objetivo que un inversor tenga información para invertir 
		                                         en ti.</p>
		                                </div>
		                            </div>
		                        </div>

		                        <div className='col-4'>
		                            <div className='row'>
		                                <div className='col-2 mt-3'>
		                                    <p className='btn btn-info btn-circle btn-xl'>2</p>
		                                </div>
		                                <div className='col-10'>
		                                    <h2>Perfilamiento</h2>
		                                    <p>Presentaremos un perfilamiento psicológico al inversor con base en las preguntas
		                                        que respondiste y el análisis de tus redes sociales.</p>
		                                </div>
		                            </div>
		                        </div>

		                        <div className='col-4'>
		                            <div className='row'>
		                                <div className='col-2 mt-3'>
		                                    <p className='btn btn-info btn-circle btn-xl'>3</p>
		                                </div>
		                                <div className='col-10'>
		                                    <h2>La elección</h2>
		                                    <p>Los inversores eligen en quién invertir y sus aportes se van sumando hasta el momento en
		                                        que sean suficientes para la compra de tu medio de transporte </p>
		                                </div>
		                            </div>
		                        </div>
		                    </div>

		                <div className='text-center'>
		                    <h2>Y listo</h2>
		                    <p className=''>Pero antes que nada, necesitamos que crees tu usuario.</p>
		                    <div className='my-4'>
		                        <Link to='/registro-domiciliario' className='btn-rappi'>
		                            Crear usuario
		                        </Link>
		                    </div>
		                </div>
		            </div>

		        </React.Fragment>
		        )
}

export default ExplicacionDomiciliario;
