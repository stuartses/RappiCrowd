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
            <div className='row'>
                <div className='col-4'>
                    <strong>Diego Betancourt</strong>
                    <a className='mx-2' href='https://github.com/dfbq91'>GitHub</a>
                    <a className='mx-2' href='https://twitter.com/diegobtancourt'>Twitter</a>
                    <a className='mx-2' href='https://www.linkedin.com/in/diegofernandobetancourtquintero/'>LinkedIn</a>
                </div>
                <div className='col-4'>
                    <strong>Stuart Echeverry</strong>
                    <a className='mx-2' href='https://github.com/stuartses'>GitHub</a>
                    <a className='mx-2' href='https://twitter.com/EcheverryStuart'>Twitter</a>
                    <a className='mx-2' href='https://www.linkedin.com/in/stuart-echeverry-solarte/'>LinkedIn</a>
                </div>
                <div className='col-4'>
                    <strong>Orlando Gómez</strong>
                    <a className='mx-2' href='https://github.com/oran2527'>GitHub</a>
                    <a className='mx-2' href='https://twitter.com/orlago'>Twitter</a>
                    <a className='mx-2' href='https://www.linkedin.com/in/orlando-gomez-lopez-7a1650a2/'>LinkedIn</a>
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