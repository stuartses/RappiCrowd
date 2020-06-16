/* Este componente contiene la información que va a ver un solicitante
después de iniciar sesión y está disponible en /solicitante/<cedula> */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWorkers } from '../actions/workers';

class SolicitanteURL extends React.Component {
    static propTypes = {
		workers: PropTypes.array.isRequired	  	
    };

    componentDidMount() {
		/* Obtiene los workers una vez la página se renderiza */
        this.props.getWorkers();
    };
    
    render() {
        return (
            <React.Fragment>
                <h1>Hola de nuevo,</h1>
            </React.Fragment>
        )
    }
};

const mapStateToProps = state => ({
    workers: state.workers.workers
});

export default connect(mapStateToProps, { getWorkers } )(SolicitanteURL);