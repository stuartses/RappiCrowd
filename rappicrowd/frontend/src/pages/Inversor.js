import React, { Component } from "react";
import { render } from "react-dom";


class Inversor extends Component {
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
      <ul>
        {this.state.data.map(countries => {
          return (
            <li key={countries.countryId}>
              {countries.countryName}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Inversor;

const container = document.getElementById("Inversor");
render(<Inversor />, container);
