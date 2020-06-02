import React, { Component } from "react";
import { render } from "react-dom";

import css from './styles/Explicacion.css';

class Como_funciona_domiciliario extends React.Component {
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
                   <h1>Como funciona Domiciliario</h1>
	    </React.Fragment>
    );
  }
}

export default Como_funciona_domiciliario;

const container1 = document.getElementById("como_funciona_domiciliario");
render(<Como_funciona_domiciliario />, container1);
