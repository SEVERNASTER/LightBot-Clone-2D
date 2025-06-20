import React from 'react'
import './Login.css'
import Input from '../components/Input';
import Boton from '../components/FormButton';
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div className='login-container'>
            <div className="login-card">
                <div className="titulo-login">
                    <h2>Iniciar Sesión</h2>
                </div>
                <form className="login-form">
                    
                    <Input label='Correo Electronico' name='email' tipo='email'  />
                    
                    <Input label='Contraseña' name='password' tipo='password'  />

                    <Boton texto='INICIAR SESION' />

                    </form>
                <footer className="login-footer">
                    <h4>¿No tienes una cuenta? <a href="#" className="registrarse"><Link to={'/signup'} >Registrate</Link></a></h4>
                </footer>
            </div>
            <div style={{'--delay': '0'}} className="bubble uno"></div>
            <div style={{'--delay': '500ms'}} className="bubble dos"></div>
            <div style={{'--delay': '1000ms'}} className="bubble tres"></div>
            <div style={{'--delay': '1500ms'}} className="bubble cuatro"></div>
        </div>
    )
}

export default Login