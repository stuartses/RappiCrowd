import React from 'react'
import './styles/Landing.css'
import Navbar from '../components/Navbar.js'

class Landing extends React.Component{
    render() {
    return (
        <div>
            <Navbar></Navbar>
            <div className='body__message'>
                <h1 className='body__message__felicidad'> Queremos entregar felicidad a más lugares</h1>
                <h2 className='body__message__puedes-contribuir'>¡Y tu también puedes contribuir!</h2>
            </div>
            <div>
                <div className='container'>
                    <h2 className='body__message__como-contribuir'>¿Cómo contribuyo?</h2>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='body__message__quiero-ser'>Quiero ser Rappitendero, pero no tengo medio de transporte para entregar domicilios</p>
                            <button className='btn btn-primary'>Quiero ser Rappitendero</button>
                        </div>
                        <div className='col-6'>
                            <p className='body__message__quiero-ser'>Quiero invertir para que alguien sin medio de transporte pueda ser Rappitendero</p>
                            <button className='btn btn-primary'>Quiero ser inversor</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='footer'><p>Términos y condiciones</p></footer>
        </div>
    )
    }
}

export default Landing;