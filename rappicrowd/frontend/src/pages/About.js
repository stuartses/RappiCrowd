/* Contains information about creators of the project */
import React from 'react';

function About() {
    return (
    <React.Fragment>
        <div className='container my-5 p-3'>
            <h1>What inspired the project?</h1>
            <p>When you start to be successful in your business, you will start
                to face some problems inherent to the growth of the company.</p>
            <p>Rappi is a company that has among its services, the realization
                of addresses using couriers or what they call, "RappiTenderos".</p>
            <p>In view of the growth of the domiciles, Rappi is looking to increase
                the number of RappiTenderos. This project seeks to make that possible
                through a CrowdLending model that integrates investors and applicants.</p>
            <h2>This project was carried out by</h2>
            <div className='row'>
                <div className='col-4'>
                    <strong>Diego Betancourt</strong>
                    <a href='https://github.com/dfbq91'>GitHub</a>
                    <a href='https://twitter.com/diegobtancourt'>Twitter</a>
                    <a href='https://www.linkedin.com/in/diegofernandobetancourtquintero/'>LinkedIn</a>
                </div>
                <div className='col-4'>
                    <strong>Stuart Echeverry</strong>
                    <a href='https://github.com/stuartses'>GitHub</a>
                    <a href='https://twitter.com/EcheverryStuart'>Twitter</a>
                    <a href='https://www.linkedin.com/in/stuart-echeverry-solarte/'>LinkedIn</a>
                </div>
                <div className='col-4'>
                    <strong>Orlando Gómez</strong>
                    <a href='https://github.com/oran2527'>GitHub</a>
                    <a href='https://twitter.com/orlago'>Twitter</a>
                    <a href='https://www.linkedin.com/in/orlando-gomez-lopez-7a1650a2/'>LinkedIn</a>
                </div>
                <p>You can see the code of the project
                    <a href='https://github.com/stuartses/RappiCrowd'>here</a>
                </p>
            </div>
        </div>
    </React.Fragment>
    )
}

export default About;