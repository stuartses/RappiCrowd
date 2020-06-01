import React from 'react'
// import './styles/Solicitud.css'
import Navbar from '../components/Navbar.js'
import UserForm from '../components/UserForm.js'

class Solicitud extends React.Component{
    render() {
    return (
        <div>
            <Navbar></Navbar>
            <h1>Solicitud</h1>
            <UserForm></UserForm>

            
        </div>
    )}
}
export default Solicitud;