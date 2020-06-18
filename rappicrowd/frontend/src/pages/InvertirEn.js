/* Este componente contiene la información de un solicitante
que se le muestra al inversor que evalua invertir en él
Se encuentra en /invertir-en/<workerCed>*/
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWorkers } from '../actions/workers';

class InvertirEn extends React.Component {
    static propTypes = {
		workers: PropTypes.array.isRequired	  	
    };

    componentDidMount() {
		/* Obtiene los workers una vez la página se renderiza */
        this.props.getWorkers();
    };
    
    render() {
        const solicitantes = this.props.workers;
        console.log('texto', solicitantes);
        return (
            <React.Fragment>
                <h1>¿Quién es?</h1>
            </React.Fragment>
        )
    }
};

const mapStateToProps = state => ({
    workers: state.workers.workers
});

export default connect(mapStateToProps, { getWorkers } )(InvertirEn);