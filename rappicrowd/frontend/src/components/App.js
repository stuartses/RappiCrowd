import React, { Component } from "react";
import { render } from "react-dom";


import css from './styles/Landing.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("http://localhost:8001/countries")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

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
	                                <a href={`https:/${linkVariable}`}>Quiero ser Rappitendero</a>
	                            </div>
	                        </div>
	                        <div className='col-6'>
	                            <p className='body__message__quiero-ser'>Quiero invertir para que alguien sin medio de transporte pueda ser Rappitendero</p>
	                        </div>
	                    </div>
	                </div>
                   </React.Fragment>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
