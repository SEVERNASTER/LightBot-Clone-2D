import React from 'react'
import './Main.css'
import MenuInicio from '../layouts/MenuInicio';
import Niveles from '../layouts/NivelesPantalla';
import Maker from '../layouts/Maker';
import { useState, useRef, useEffect } from 'react';
import { IoIosArrowDropup } from "react-icons/io";
import { GiExitDoor } from "react-icons/gi";
import App from '../App';
import mapas from '../data/mapas.js';
import { FaUser } from "react-icons/fa";
import axios from 'axios';
import Toast from '../components/Toast.jsx';
import useToast from '../hooks/useToast.js';


function Main({ user }) {

    // const [user, setUser] = useState(null)

    // useEffect(() => {
    //     const verificarSesion = async () => {
    //         try {
    //             const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user`, {
    //                 withCredentials: true
    //             })
    //             setUser(res.data.user)

    //         } catch (error) {
    //             console.log('No autenticado', error)
    //             setUser(null)
    //         }
    //     }

    //     verificarSesion()
    // }, [])


    const [mapaActual, setMapaActual] = useState(1)

    const [vistaMenu, setVistaMenu] = useState(true)
    const [jugando, setJugando] = useState(false)
    const [creando, setCreando] = useState(false)
    const { mensaje, icono, mostrar, setMostrar, mostrarToast } = useToast()
    const [jugandoMiNivel, setJugandoMiNivel] = useState(false)
    const [hayNuevoNivel, setHayNuevoNivel] = useState(false)



    const handleRegresar = () => {
        setVistaMenu(prev => !prev)
    }

    const handleSalir = () => {
        setJugando(prev => !prev)
        setJugandoMiNivel(false)
        setJugando(false)
        
    }

    const [mapa, setMapa] = useState(mapas[mapaActual - 1].mapa)
    const [bot, setBot] = useState(mapas[mapaActual - 1].bot)

    useEffect(() => {
        setMapa(mapas[mapaActual - 1].mapa)
        setBot(mapas[mapaActual - 1].bot)
        console.log(mapa);

    }, [mapaActual])



    // if(!user) return (
    //     <div className="pantalla-de-carga">
    //         CARGANDO...
    //     </div>
    // )

    return (
        <div className={`main-container ${jugando ? 'jugando' : ''}`}>
            <Toast mensaje={mensaje} icono={icono} mostrar={mostrar} setMostrar={setMostrar} />
            <div className="perfil" style={{
                background: `linear-gradient(to bottom right,${user?.color1}, ${user?.color2})`,
                '--nombre-completo': `${user?.nombre} ${user?.apellido}`
            }} >
                <h3>{user?.alias || <FaUser />}</h3>
            </div>


            <MenuInicio clasesExtra={`${vistaMenu ? '' : 'deslizar'}
                ${creando ? 'ocultar' : ''}
            `}
                setVistaMenu={setVistaMenu} setCreando={setCreando}
                setMapa={setMapa} setBot={setBot} setJugando={setJugando}
                jugandoMiNivel={jugandoMiNivel} setJugandoMiNivel={setJugandoMiNivel}
                mostrarToast={mostrarToast}
                hayNuevoNivel={hayNuevoNivel} setHayNuevoNivel={setHayNuevoNivel}
            />

            <Maker creando={creando} setCreando={setCreando} mostrarToast={mostrarToast}
                setHayNuevoNivel={setHayNuevoNivel}
            />

            <Niveles clasesExtra={`${vistaMenu ? 'deslizar' : ''}`}
                setJugando={setJugando} setMapaActual={setMapaActual} jugando={jugando}
                jugandoMiNivel={jugandoMiNivel}
            />

            <button className={`boton-cambiar regresar-niveles-btn
                    ${!vistaMenu || jugandoMiNivel ? 'mostrar' : ''}
                    ${jugando ? 'volver-btn' : ''}
                `}
                title='Regresar'
                onClick={jugando ? handleSalir : handleRegresar}
            >
                {!jugando && <IoIosArrowDropup />}
                {jugando && <GiExitDoor />}
            </button>

            <App mapa={mapa} setMapa={setMapa} jugando={jugando} mapaActual={mapaActual}
                bot={bot}
            />
        </div>
    )
}

export default Main