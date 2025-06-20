import { useState, useEffect } from 'react'
import './SignUp.css'
import Input from '../components/Input';
import Boton from '../components/FormButton';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

function SignUp() {

    const [estaLogeado, setEstaLogeado] = useState(false)
    const [width, height] = useWindowSize()



    return (

        <div className='sign-up-container' >
            {/* {estaLogeado && <Confetti width={width} height={height} />} */}
            <div className="flip-container">
                <div className="flip-card">
                    <div className="sign-up-card">
                        <div className="sign-up-titulo">
                            <h2>Registrate</h2>
                        </div>
                        <form className="sign-up-form">
                            <Input label='Correo Electronico' name='email' tipo='email' />

                            <Input label='Contraseña' name='password' tipo='password' />

                            <Input label='Nombre de Usuario' name='username' tipo='text' />

                            <Input label='Nombre Real' name='nombreReal' tipo='text' />

                            <Boton texto='INICIAR SESION'
                                
                            />
                        </form>
                        <footer className="sign-up-footer">
                            <h3>Ya tienes una cuenta? <Link to="/login">Ir al Login</Link></h3>
                            {/* sign-up-login-btn */}
                        </footer>
                    </div>

                    <div className="confirmacion-container">
                        <header className="titulo-confirmacion">
                            <FaCheckCircle size={100} />
                            <h2>¡Registro Exitoso!</h2>
                        </header>

                        <div className="cuerpo-confirmacion">
                            <p>Ya casi terminamos...
                                Te hemos enviado un correo de confirmación.</p>
                            <div className="correo-contenedor">
                                <h4>Email:</h4>
                                <p className='correo-confirmacion' >usuario@example.com</p>
                            </div>
                        </div>

                        <footer className="confirmacion-footer">
                            <p>Solo falta un pequeño paso: ve a tu bandeja de entrada y haz clic en el enlace para activar tu cuenta. 🚀</p>
                        </footer>

                    </div>
                </div>


            </div>
            <div style={{ '--delay': '0' }} className="bubble uno"></div>
            <div style={{ '--delay': '500ms' }} className="bubble dos"></div>
            <div style={{ '--delay': '1000ms' }} className="bubble tres"></div>
            <div style={{ '--delay': '1500ms' }} className="bubble cuatro"></div>
        </div>

    )
}

export default SignUp