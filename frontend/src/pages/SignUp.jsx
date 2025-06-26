import { useState, useEffect } from 'react'
import './SignUp.css'
import Input from '../components/Input';
import Boton from '../components/FormButton';
import Toast from '../components/Toast';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
import axios from 'axios';
import useToast from '../hooks/useToast.js';


function SignUp() {

    const [estaLogeado, setEstaLogeado] = useState(false)
    const [width, height] = useWindowSize()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [pidiendoDatos, setPidiendoDatos] = useState(false)
    const [usuarioCreado, setUsuarioCreado] = useState(false)


    const {
        mensaje,
        icono,
        mostrar,
        setMostrar,
        mostrarToast
    } = useToast()


    const handleSignUp = async (e) => {
        setPidiendoDatos(true)
        e.preventDefault()

        try {
            const resultado = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/registrar`,
                { email, password, username, nombre, apellido },
                { withCredentials: true }
            )

            mostrarToast(resultado.data.message, 'check')

            setUsuarioCreado(true)


        } catch (error) {
            console.log(error);
            setPidiendoDatos(false)

            if (error.response.data.tipoError === 'faltan campos') {
                return mostrarToast(error.response.data.message, 'alert')
            } else {
                return mostrarToast(error.response.data.message, 'error')
            }
        }
        setPidiendoDatos(false)
    }





    return (

        <div className='sign-up-container' >
            <Toast mensaje={mensaje} icono={icono} mostrar={mostrar} setMostrar={setMostrar} />
            {/* {estaLogeado && <Confetti width={width} height={height} />} */}
            <div className="flip-container">
                <div className={`flip-card ${usuarioCreado ? 'girar' : ''}`}>
                    <div className="sign-up-card">
                        <div className="sign-up-titulo">
                            <h2>Registrate</h2>
                        </div>
                        <form className="sign-up-form" onSubmit={handleSignUp}>
                            <Input
                                label='Correo Electrónico'
                                name='email'
                                tipo='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input
                                label='Contraseña'
                                name='password'
                                tipo='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                minLenght={6}
                            />

                            <Input
                                label='Nombre de Usuario'
                                name='username'
                                tipo='text'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <Input
                                label='Nombre'
                                name='nombre'
                                tipo='text'
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />

                            <Input
                                label='Apellido'
                                name='apellido'
                                tipo='text'
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                            />

                            <Boton texto='Registrarse'
                                clasesExtra={`${pidiendoDatos ? 'cargando' : ''}`}
                            />
                        </form>
                        <footer className={`sign-up-footer ${pidiendoDatos ? 'inhabilitar' : ''}`}>
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
                                <p className='correo-confirmacion' >{email}</p>
                            </div>
                        </div>

                        <footer className="confirmacion-footer">
                            <p>Solo falta un pequeño paso: ve a tu bandeja de entrada y haz clic en el enlace para activar tu cuenta. No olvides revisar en SPAM</p>
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