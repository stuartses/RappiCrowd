import React from 'react'

import './styles/UserForm.css'

class UserForm extends React.Component {
    render() {
    return (
        <form>
            <div className='md-form mb-4'>
                <label for='form18'>Pregunta1</label>
                <textarea id='form18' className='md-textarea form-control' rows="3" placeholder='Respuesta' required></textarea>
                <input type="submit"></input>
            </div>
        </form>
    )}
}

export default UserForm;