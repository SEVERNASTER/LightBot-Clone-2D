import { useState } from 'react'
import './Login.css'
import Input from '../components/Input';
import Boton from '../components/FormButton';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';



function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const resultado = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, { email, password }, {
                withCredentials: true
            })
            console.log(resultado.data);

        } catch (error) {
            console.log(error);
            
        }

        

    }

    useEffect(() => {
        console.log(email);
    }, [email])



    return (
        <div className='login-container'>
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

                    <Boton texto='INICIAR SESION' />

                </form>
                <footer className="login-footer">
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