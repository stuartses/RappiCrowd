/* Esta página contiene las preguntas para el perfilamiento del
domiciliario. Se encuentra disponible en /perfilamiento */

import React from 'react';
import axios from "axios";

import './styles/Perfilamiento.css'


class Perfilamiento extends React.Component {
    state = {
        pregunta1: '',
        pregunta2: '',
        pregunta3: '',
        askedQuestions: ''
    }

	/* Asigna lo que va escribiendo en el usuario, en el estado del componente */
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value }) // Más info de esto: stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable
    }

	/* Se ejecuta cuando el usuario hace click en el botón enviar */
    handleClick = e => {
        console.log("Button was clicked");
    }

	/* Se ejecuta cuando se envía el formulario */
    handleSubmit = e => {
        let joinedText = ''
        e.preventDefault();
        for (let pregunta in this.state) {
            joinedText += this.state[pregunta] + "  ";
        }
        this.setState({askedQuestions: joinedText}, () => {
			console.log('askedQuestions:', this.state.askedQuestions)
            // Aquí tiene que ir axios!
			// axios.post('URL', 'contenido a enviar').then(response => {
			//     console.log(response)
			// })
			// .catch(error => {
			//     console.log(error)
			// })
        })
    }

    render() {
        return (
        <React.Fragment>
            <div className='container my-5 py-3 border rounded'>
                <h1 className='px-4 font-weight-bold'>Perfilamiento</h1>
                <form className='row px-5 py-3' onSubmit={this.handleSubmit}>
                    <p className=''>
                        Las siguientes preguntas nos permitirán conocerte mejor.
                        Es importante que contestes de forma detallada cada pregunta. Algunas preguntas
                        tienen un mínimo de caracteres requerido.
                    </p>

                    <div className='form-group h-100 w-100 border-bottom'>
                        <label htmlFor="Pregunta"><h2 className='p-1 h4 m-0'>Pregunta</h2></label>
                        <textarea
                            className="form-control border-bottom"
                            minLength="150"
                            title="Tu respuesta debe ser de al menos 150 caracteres. Por favor, sé un poco más detallado"
                            placeholder="Respuesta"
                            required
                            name='pregunta1'
                            value={this.state.pregunta1}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className='form-group h-100 w-100 border-bottom'>
                        <label htmlFor="Pregunta"><h2 className='p-1 h4 m-0'>Pregunta</h2></label>
                        <textarea
                            className="form-control border-bottom"
                            name="pregunta2"
                            minLength="150"
                            title="Tu respuesta debe ser de al menos 150 caracteres. Por favor, sé un poco más detallado"
                            placeholder="Respuesta"
                            required
                            value={this.state.pregunta2}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className='form-group h-100 w-100 border-bottom'>
                        <label htmlFor="Pregunta"><h2 className='p-1 h4 m-0'>Pregunta</h2></label>
                        <textarea
                            className="form-control border-bottom"
                            name="pregunta3"
                            minLength="150"
                            title="Tu respuesta debe ser de al menos 150 caracteres. Por favor, sé un poco más detallado"
                            placeholder="Respuesta"
                            required
                            value={this.state.pregunta3}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className='' onClick={this.handleClick}>Enviar</button>
                </form>
            </div>
        </React.Fragment>
        )
    };
};

export default Perfilamiento;