/* Contains information about creators of the project */
import React from 'react';

function About() {
    return (
        <React.Fragment>
            <div className='container my-5 p-3'>
                <h1>What inspired the project?</h1>
                <h4>When you start to be successful in your business, you will start
                to face some problems inherent to the growth of the company.</h4>
                <h4>Rappi is a company that has among its services, the realization
                of addresses using couriers or what they call, "RappiTenderos".</h4>
                <h4>In view of the growth of the domiciles, Rappi is looking to increase
                    the number of Rappitenderos. This project seeks to make that possible
                through a CrowdLending model that integrates investors and applicants.</h4>
                <h3>The product uses the IBM API - Personalities-insights, which once it receives
                    a request containing a text written by a person, it returns a personality
                evaluation.</h3>
                <h4>We obtained, based on researches, a number of characteristics of people who
                    are in debt. Therefore, we select only these characteristics of the
                    information that returns personality-insights. This data is transformed
                    with a statistical model to obtain a score, which is then shown to an investor
                to decide whether to invest in a person who wants to work as a Rappitendero.</h4>
                <h2 className='text-center font-weight-text'>The team</h2>
                <div className='row d-flex justify-content-center'>
                    <div className='col-lg-4 col-sm-12 mb-3 d-flex justify-content-center'>
                        <div className="card" style={{width: 300 +'px'}}>
                            <img className="card-img-top" src="/static/diego-betancourt.PNG" alt="Card image" style={{width: 100 + '%'}} />
                            <div className="card-body text-center">
                                <h4 className="card-title text-center">Diego Betancourt</h4>
                                <p className="card-text"></p>
                                <a className='mx-2' href='https://github.com/dfbq91'>GitHub</a>
                                <a className='mx-2' href='https://twitter.com/diegobtancourt'>Twitter</a>
                                <a className='mx-2' href='https://www.linkedin.com/in/diegofernandobetancourtquintero/'>LinkedIn</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 mb-3 d-flex justify-content-center'>
                        <div className="card" style={{width: 300 +'px'}}>
                            <img className="card-img-top" src="/static/stuart-echeverry.jpg" alt="Card image" style={{width: 100 + '%'}} />
                            <div className="card-body text-center">
                                <h4 className="card-title">Stuart Echeverry</h4>
                                <p className="card-text"></p>
                                <a className='mx-2' href='https://github.com/stuartses'>GitHub</a>
                                <a className='mx-2' href='https://twitter.com/EcheverryStuart'>Twitter</a>
                                <a className='mx-2' href='https://www.linkedin.com/in/stuart-echeverry-solarte/'>LinkedIn</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 mb-3 d-flex justify-content-center'>
                        <div className="card" style={{width: 300 +'px'}}>
                            <img className="card-img-top" src="/static/orlando-gomez.jpg" alt="Card image" style={{width: 100 + '%'}} />
                            <div className="card-body text-center">
                                <h4 className="card-title text-center">Orlando Gómez</h4>
                                <p className="card-text"></p>
                                <a className='mx-2' href='https://github.com/oran2527'>GitHub</a>
                                <a className='mx-2' href='https://twitter.com/orlago'>Twitter</a>
                                <a className='mx-2' href='https://www.linkedin.com/in/orlando-gomez-lopez-7a1650a2/'>LinkedIn</a>
                            </div>
                        </div>
                    </div>
                    <span className='m-3 d-block text-center'>You can see the code of the project
                    <a href='https://github.com/stuartses/RappiCrowd'> here</a>
                    </span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About;