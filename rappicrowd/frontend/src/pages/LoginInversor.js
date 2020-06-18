import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInvestors } from '../actions/investors';
 
import './styles/Login.css'


export class LoginInversor extends Component {

	    constructor(props) { 	
	      super(props);  	       
     	      this.state = {
                investorCed: "",
                investorPassword: ""	           
              };

              this.SubmitHandler = this.SubmitHandler.bind(this);
            }		    

	    changeHandler = e => {
	        this.setState({ [e.target.name]: e.target.value });
		console.log(e.target);
            }	

            SubmitHandler = e => {
	        e.preventDefault();
		    
	        this.props.history.push('/listado-domiciliarios');
	    };

	    static propTypes = {
		investors: PropTypes.array.isRequired	  	
            };

	    componentDidMount() {
	        this.props.getInvestors();
            }
	   
	  
	    render() {
		            return(
				        <React.Fragment>
				            <form method="post" onSubmit={this.SubmitHandler}>
				                <div className='background'>
				                    <div className="container my-5">
				                        <div className="row">
				                            <div className="col-md-5 mx-auto">
				                                <div id="first">
				                                    <div className="myform form ">
				                                        <div className="logo mb-3">
				                                            <div className="col-md-12 text-center">
				                                                <h1>Iniciar sesión</h1>
				                                            </div>
				                                        </div>
				                                        
				                                            <div className="form-group">
				                                                <label htmlFor="exampleInputEmail1">Correo electrónico</label>
				                                                <input type="email" name="email"  className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
				                                            </div>
				                                            <div className="form-group">
				                                                <label htmlFor="exampleInputEmail1">Contraseña</label>
				                                                <input type="password" name="password" id="password"  className="form-control" aria-describedby="emailHelp" placeholder="Enter Password"/>
				                                            </div>
				                                            <div className="form-group">
				                                                <p className="text-center">Al iniciar sesión, usted está aceptando <a href="#">Nuestros términos de uso</a></p>
				                                            </div>
				                                            <div className="col-md-12 text-center ">
				                                                <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Iniciar sesión</button>
				                                            </div>
				                                            <div className="col-md-12 ">
				                                                <div className="login-or">
				                                                    <hr className="hr-or"></hr>
				                                                    <span className="span-or">or</span>
				                                                </div>
				                                            </div>
				                                            
				                                            <div className="form-group">			                                                
				                                                    <p className="text-center">¿No tienes cuenta? <a href='/registro-inversor' id="signup">Regístrate</a></p>
				                                                
				                                            </div>
				                                        
				                                    </div>
				                                </div>
				                            </div>
				                        </div>
				                    </div>
				                </div>
				            </form>
				        </React.Fragment>    

				  )
		        }
}

const mapStateToProps = state => ({
	  investors: state.investors.investors	
});


export default connect(mapStateToProps, { getInvestors } )(LoginInversor);
