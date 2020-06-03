import React from 'react';
import reactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import '../src/global.css';
import App from './components/App'


const container = document.getElementById('app')
reactDOM.render(<App/>,
  container
);



