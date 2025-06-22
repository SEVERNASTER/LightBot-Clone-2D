import { useState } from 'react'
import './Login.css'
import Input from '../components/Input';
import Boton from '../components/FormButton';
import Toast from '../components/Toast';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import useToast from '../hooks/useToast.js';
import { useNavigate } from 'react-router-dom'




function Login({setUsuario}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pidiendoDatos, setPidiendoDatos] = useState(false)
    const navigate = useNavigate()


    const {
        mensaje,
        icono,
        mostrar,
        setMostrar,
        mostrarToast
    } = useToast()



    const handleLogin = async (e) => {
        e.preventDefault()
        setPidiendoDatos(true)

        try {
            const resultado = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, { email, password }, {
                withCredentials: true
            })

            mostrarToast(resultado.data.mensajeBienvenida, 'check')
            setUsuario(resultado.data.user)
            
            setTimeout(() => {
                navigate('/')
            }, 1500)

        } catch (error) {
            console.log(error)
            mostrarToast(error.response.data.message, 'error')
        }

        setPidiendoDatos(false)

    }

    useEffect(() => {
        console.log(email);
    }, [email])



    return (
        <div className='login-container'>
            <Toast mensaje={mensaje} icono={icono} mostrar={mostrar} setMostrar={setMostrar} />
            <div className="login-card">
                <div className="titulo-login">
                    <h2>Iniciar Sesión</h2>
                </div>
                <form onSubmit={handleLogin} className="login-form">

                    <Input
                        label='Correo Electronico'
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
                    />

                    <Boton texto='INICIAR SESION' 
                        clasesExtra={`${pidiendoDatos ? 'cargando' : ''}`}
                    />

                </form>
                <footer className={`login-footer ${pidiendoDatos ? 'inhabilitar' : ''}`}>
                    <h4>¿No tienes una cuenta? <Link to={'/signup'} >Registrate</Link></h4>
                </footer>
            </div>
            <div style={{ '--delay': '0' }} className="bubble uno"></div>
            <div style={{ '--delay': '500ms' }} className="bubble dos"></div>
            <div style={{ '--delay': '1000ms' }} className="bubble tres"></div>
            <div style={{ '--delay': '1500ms' }} className="bubble cuatro"></div>
        </div>
    )
}

export default Login