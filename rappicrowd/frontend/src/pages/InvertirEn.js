/* Este componente contiene la información de un personaEncontrada
que se le muestra al inversor que evalua invertir en él
Se encuentra en /invertir-en/<workerCed>*/
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWorkers } from '../actions/workers';
import { getCurrencies } from '../actions/currencies';
import { getInvestorsPerWorkers } from '../actions/investorsperworkers';
import { addInvestorPerWorker } from '../actions/investorsperworkers';
import moment from 'moment';


export class InvertirEn extends React.Component {
	constructor(props) { 	
		super(props);  	       
			this.state = {
			investorPerWorkerInvestorCed: this.props.match.params.cedInv,
			investorPerWorkerWorkerCed: this.props.match.params.ced,
			investorPerWorkerAmount: "",
			investorPerWorkerCurrencyId: ""	
        };

	this.changeHandler = this.changeHandler.bind(this);
	this.SubmitHandler = this.SubmitHandler.bind(this);	
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    SubmitHandler = e => {
	e.preventDefault();
	    
        const { investorPerWorkerInvestorCed, investorPerWorkerWorkerCed, investorPerWorkerAmount, investorPerWorkerCurrencyId } = this.state;
	const investorperworker = { investorPerWorkerInvestorCed, investorPerWorkerWorkerCed, investorPerWorkerAmount, investorPerWorkerCurrencyId };
	this.props.addInvestorPerWorker(investorperworker);
	this.props.history.push(`/inversor/${this.props.match.params.cedInv}`);

    };	    

    static propTypes = {
		workers: PropTypes.array.isRequired,
	        currencies: PropTypes.array.isRequired,
	        investorsperworkers: PropTypes.array.isRequired
    };

    componentDidMount() {
		/* Obtiene los workers una vez la página se renderiza */
        this.props.getWorkers();
	this.props.getInvestorsPerWorkers();
	this.props.getCurrencies();
	this.props.addInvestorPerWorker();    

    };
   
    render() {
	
        const cedulaDigitada = this.props.match.params.ced;
	const personaEncontrada = this.props.workers.filter(persona => {
			return parseInt(persona.workerCed) === parseInt(cedulaDigitada);
        });
        
        const { investorPerWorkerInvestorCed, investorPerWorkerWorkerCed, investorPerWorkerAmount, investorPerWorkerCurrencyId } = this.state;

        const invperworCurrencies = this.props.currencies.map((wcu) => <option key={wcu.currencyId} value={wcu.currencyId}>{wcu.currencyName}</option>);     

	const invperwor = this.props.investorsperworkers;
	const list_ced = [];
	const list_amount = [];	
        const list_final = {};	     		   
        let i = 0;	

	invperwor.forEach(ipw => {
          list_ced.push(ipw.investorPerWorkerWorkerCed);		    		       		    
          list_amount.push(ipw.investorPerWorkerAmount);	    
        });	    		    

	for (i = 0; i < list_ced.length; i++) {               		    
          list_final[list_ced[i]] = (list_final[list_ced[i]] || 0) + list_amount[i];      	             	 
        }
        
	    
	const solicitante = personaEncontrada[0];    
	console.log(solicitante);    
	solicitante['total'] = list_final[solicitante.workerCed];  		              		    
        		               	    

        return (
            <React.Fragment>
	      <form method="post" onSubmit={this.SubmitHandler}>  	
                <div className='container p-5 my-4'>
                <h1 className='py-3 font-weight-bold'>Nos alegra que estés evaluando invertir en {solicitante.workerName} {solicitante.workerLastName}</h1>
                    <div className='row'>
                        <div className='col-3'>
                            <img src='https://us.123rf.com/450wm/rawpixel/rawpixel1612/rawpixel161217099/66875461-individuo-hermoso-concepto-felicidad-expresi%C3%B3n-de-la-cara.jpg?ver=6'
                            width="200"
                            height="200"
                            />
                        </div>
                        <div className='col-9'>
                            <h3>{solicitante.workerName} se registró el {moment(solicitante.workerCreatedAt).format('DD-MM-YYYY')} y desde ese momento
                                ha recaudado ${solicitante.total} para su vehículo de transporte.</h3>
                            <div className='my-3 form-inline form-group'>
                                <input
                                    className='form-control rounded mx-2'
                                    placeholder='Ingresa cantidad'
		                    name="investorPerWorkerAmount"
		                    value={investorPerWorkerAmount}
		                    onChange={this.changeHandler}>
                                </input>
		                <label> Tipo de Moneda de Inversión</label>
				<div className="select mx-1">
		                    <select name="investorPerWorkerCurrencyId" value={investorPerWorkerCurrencyId} onChange={this.changeHandler}>
		                         <option disabled value=""></option>
                                         {invperworCurrencies}
		                    </select>
		                </div>  
                                <button
                                    type='submit'
                                    className='form-control btn btn-primary mx-4 rounded'>
                                        Invertir
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
	      </form>	
            </React.Fragment>
        )
    }
};

const mapStateToProps = state => ({
    workers: state.workers.workers,
    currencies: state.currencies.currencies,
    investorsperworkers: state.investorsperworkers.investorsperworkers	
});

export default connect(mapStateToProps, { getWorkers, getCurrencies, getInvestorsPerWorkers, addInvestorPerWorker } )(InvertirEn);
