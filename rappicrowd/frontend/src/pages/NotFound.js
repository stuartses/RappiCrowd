import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
    <React.Fragment>
        <div className='container my-5 p-3'>
            <h1>404: Esto no parece ser lo que estás buscando</h1>
            <Link to='/'>Volver al inicio</Link>
        </div>
    </React.Fragment>
    )
}

export default NotFound;