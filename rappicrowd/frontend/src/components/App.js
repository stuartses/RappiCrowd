import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Landing from '../pages/Landing';
import LoginSolicitante from '../pages/LoginSolicitante';
import LoginInversor from '../pages/LoginInversor';
import ExplicacionDomiciliario from '../pages/ExplicacionDomiciliario';
import ExplicacionInversor from '../pages/ExplicacionInversor';
import RegistroInversor from '../pages/RegistroInversor';
import RegistroDomiciliario from '../pages/RegistroDomiciliario';
import SolicitanteList from '../pages/SolicitanteList';
import Perfilamiento from '../pages/Perfilamiento';
import InvertirEn from '../pages/InvertirEn';
import SolicitanteURL from '../pages/SolicitanteURL';
import NotFound from '../pages/NotFound';


import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>  	    
        <BrowserRouter>
        	<Layout>
				<Switch>
					<Route exact path='/' component={Landing}></Route>
					<Route exact path='/como-funciona-domiciliario' component={ExplicacionDomiciliario}></Route>  
					<Route exact path='/como-funciona-inversor' component={ExplicacionInversor}></Route>  
					<Route exact path='/registro-inversor' component={RegistroInversor}></Route>
					<Route exact path='/login-inversor' component={LoginInversor}></Route>
					<Route exact path='/registro-domiciliario' component={RegistroDomiciliario}></Route>
					<Route exact path='/login-solicitante' component={LoginSolicitante}></Route>
					<Route exact path='/listado-domiciliarios' component={SolicitanteList}></Route>
					<Route exact path='/perfilamiento' component={Perfilamiento}></Route>
					<Route exact path='/invertir-en/:ced' component={InvertirEn}></Route>
					<Route exact path='/solicitante/:ced' component={SolicitanteURL}></Route>
					<Route component={NotFound}></Route>
				</Switch>    
        	</Layout>	 
        </BrowserRouter>	    
      </Provider>      	    
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
