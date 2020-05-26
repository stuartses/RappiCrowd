import React from 'react';
import reactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import '../src/global.css';
// import Landing from './pages/Landing.js';
import Solicitud from './pages/Solicitud.js';


const container = document.getElementById('app')
reactDOM.render(<Solicitud/>,
  container
);



