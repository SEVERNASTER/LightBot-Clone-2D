import React from 'react'
import './Main.css'
import MenuInicio from '../layouts/MenuInicio';
import Niveles from '../layouts/NivelesPantalla';
import Maker from '../layouts/Maker';
import { useState, useRef, useEffect } from 'react';
import { IoIosArrowDropup } from "react-icons/io";
import { GiExitDoor } from "react-icons/gi";
import App from '../App';
import mapas from '../data/mapas';
import { FaUser } from "react-icons/fa";


function PantallaPrincipal({user}) {


    const [mapaActual, setMapaActual] = useState(1)

    const [vistaMenu, setVistaMenu] = useState(true)
    const [jugando, setJugando] = useState(false)
    const [creando, setCreando] = useState(false)

    const handleRegresar = () => {
        setVistaMenu(prev => !prev)
    }

    const handleSalir = () => {
        setJugando(prev => !prev)
    }

    const [mapa, setMapa] = useState(mapas[0])

    useEffect(() => {        
        setMapa(mapas[mapaActual - 1])
    }, [mapaActual])



    return (
        <div className={`main-container ${jugando ? 'jugando' : ''}`}>
            <div className="perfil" style={{
                background: `linear-gradient(to bottom right,${user.color1}, ${user.color2})`,
                '--nombre-completo': `${user.nombre} ${user.apellido}`
            }} >
                <h3>{user?.alias || <FaUser />}</h3>
            </div>
            <MenuInicio clasesExtra={`${vistaMenu ? '' : 'deslizar'}
                ${creando ? 'ocultar' : ''}
            `}
                setVistaMenu={setVistaMenu} setCreando={setCreando}
            />

            <Maker creando={creando} setCreando={setCreando} />

            <Niveles clasesExtra={`${vistaMenu ? 'deslizar' : ''}`}
                setJugando={setJugando} setMapaActual={setMapaActual} jugando={jugando}
            />

            <button className={`boton-cambiar regresar-niveles-btn
                    ${!vistaMenu ? 'mostrar' : ''}
                    ${jugando ? 'volver-btn' : ''}
                `}
                title='Regresar'
                onClick={jugando ? handleSalir : handleRegresar}
            >
                {!jugando && <IoIosArrowDropup />}
                {jugando && <GiExitDoor />}
            </button>

            <App mapa={mapa} setMapa={setMapa} jugando={jugando} mapaActual={mapaActual} />
        </div>
    )
}

export default PantallaPrincipal