import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Landing from '../pages/Landing';
import Solicitud from '../pages/Solicitud';
import ExplicaciónDomiciliario from '../pages/ExplicaciónDomiciliario';
import ExplicaciónInversor from '../pages/ExplicaciónInversor';
import RegistroDomiciliario from '../pages/RegistroDomiciliario';
import RegistroInversor from '../pages/RegistroInversor';
import Inversor from '../pages/Inversor';
import NotFound from '../pages/NotFound';

function App () {
    return (
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Landing}></Route>
                <Route exact path='/como-funciona-domiciliario' component={ExplicaciónDomiciliario}></Route>
                <Route exact path='/como-funciona-inversor' component={ExplicaciónInversor}></Route>
                <Route exact path='/registro-domiciliario' component={RegistroDomiciliario}></Route>
                <Route exact path='/registro-inversor' component={RegistroInversor}></Route>
                <Route exact path='/solicitud' component={Solicitud}></Route>
                <Route exact path='/inversor' component={Inversor}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </Layout>
        </BrowserRouter>
    );
}

export default App;