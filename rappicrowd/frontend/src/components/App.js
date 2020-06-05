import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Landing from '../pages/Landing';
import ExplicacionDomiciliario from '../pages/ExplicacionDomiciliario';
import ExplicacionInversor from '../pages/ExplicacionInversor';
import RegistroInversor from '../pages/RegistroInversor';

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
	  </Switch>    
        </Layout>	 
        </BrowserRouter>	    
      </Provider>      	    
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
