import React from 'react'
import './SignUp.css'
import Input from '../components/Input';
import Boton from '../components/FormButton';

function SignUp() {

    

    return (
        <div className='sign-up-container' >
            <div className="sign-up-card">
                <div className="sign-up-titulo">
                    <h2>Registrate</h2>
                </div>
                <form className="sign-up-form">
                    <Input label='Correo Electronico' name='email' tipo='email'  />
                    
                    <Input label='Contraseña' name='password' tipo='password'  />

                    <Input label='Nombre de Usuario' name='username' tipo='text'  />
                    
                    <Input label='Nombre Real' name='nombreReal' tipo='text'  />

                    <Boton texto='INICIAR SESION' />
                </form>
                <footer className="sign-up-footer">
                    <h3>Ya tienes una cuenta? <a href="#" className="sign-up-login-btn">Inicia Sesión</a></h3>
                </footer>
            </div>
            
            <div style={{'--delay': '0'}} className="bubble uno"></div>
            <div style={{'--delay': '500ms'}} className="bubble dos"></div>
            <div style={{'--delay': '1000ms'}} className="bubble tres"></div>
            <div style={{'--delay': '1500ms'}} className="bubble cuatro"></div>
        </div>
    )
}

export default SignUp