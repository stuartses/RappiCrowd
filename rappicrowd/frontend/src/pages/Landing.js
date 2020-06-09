import React from 'react'
import { Link } from 'react-router-dom';

import './styles/Landing.css'

export class Landing extends React.Component{
	render() {
		return (
			<React.Fragment>
			  <div className='body__message'>
			    <h1 className='body__message__felicidad'> Queremos entregar felicidad a más lugares</h1>
			    <h2 className='body__message__puedes-contribuir'>¡Y tu también puedes contribuir!</h2>
			  </div>
			  <div className='p-5 body__message__separator text-center font-weight-bold'>
			    <p className='px-5'>Rappi CrowLen es la plataforma que integra a personas que desean trabajar como Rappitenderos,
			    con personas que pueden financiar su medio de transporte y obtener al mismo tiempo rentabilidad.</p>
			  </div>
			  <div className='container LandingContainer my-4'>
			    <h2 className='body__message__como-contribuir'>¿Cómo contribuyo?</h2>
			    <div className='row'>
			      <div className='col-6'>
			        <p className='body__message__quiero-ser'>Quiero ser Rappitendero, pero no tengo medio de transporte para entregar domicilios</p>
			        <div className='text-center my-4'>
			          <Link className='btn-rappi' to='/como-funciona-domiciliario'>Quiero ser Rappitendero</Link>
			        </div>
			      </div>
			      <div className='col-6'>
			        <p className='body__message__quiero-ser'>Quiero invertir para que alguien sin medio de transporte pueda ser Rappitendero</p>
			        <div className='text-center my-4'>
			          <Link className='btn-rappi' to='/como-funciona-inversor'>Quiero ser inversor</Link>
			        </div>
			      </div>
			    </div>
			  </div>
			</React.Fragment>
		)
	}
}

export default Landing;
