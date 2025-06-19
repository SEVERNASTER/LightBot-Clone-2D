import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className='login-container'>
            <div className="login-card">
                <div className="titulo-login">
                    <h2>Iniciar Sesión</h2>
                </div>
                <form className="login-form">
                    <div className="input-group">
                        <input type="email" name="correo" id="correo" required />
                        <label htmlFor="correo">Correo Electrónico</label>
                    </div>

                    <div className="input-group">
                        <input type="password" name="password" id="pass" required />
                        <label htmlFor="pass">Contraseña</label>
                    </div>

                    <button className="login-btn">INICIAR SESION</button>
                </form>
                <footer className="login-footer">
                    <h4>¿No tienes una cuenta? <a href="#" className="registrarse">Regístrate</a></h4>
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