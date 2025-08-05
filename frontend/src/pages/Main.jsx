import React, { useEffect } from 'react'
import './Main.css'
import MenuInicio from '../layouts/MenuInicio';
import Niveles from '../layouts/NivelesPantalla';
import Maker from '../layouts/Maker';
import { useState } from 'react';
import { IoIosArrowDropup } from "react-icons/io";
import { GiExitDoor } from "react-icons/gi";
import App from '../App';
import { mapas1, mapas2, mapas3 } from '../data/mapas.js';
import { FaUser } from "react-icons/fa";
import Toast from '../components/Toast.jsx';
import useToast from '../hooks/useToast.js';


function Main({ user }) {

    const [mapaActual, setMapaActual] = useState(1)
    const [vistaMenu, setVistaMenu] = useState(true)
    const [jugando, setJugando] = useState(false)
    const [creando, setCreando] = useState(false)
    const { mensaje, icono, mostrar, setMostrar, mostrarToast } = useToast()
    const [jugandoMiNivel, setJugandoMiNivel] = useState(false)
    const [hayNuevoNivel, setHayNuevoNivel] = useState(true)
    const [mapas, setMapas] = useState(mapas1)

    const [mapa, setMapa] = useState(mapas1[0].mapa)
    const [bot, setBot] = useState(mapas1[0].bot)
    const [limiteDeComandos, setLimiteDeComandos] = useState(mapas1[0].limiteDeComandos)
    const [proc1, setProc1] = useState(mapas1[0].proc1)
    const [proc2, setProc2] = useState(mapas1[0].proc2)//por ahora puede ser undefined porque no todos los mapas lo tienen
    const [limiteDeComandosProc1, setLimiteDeComandosProc1] = useState(mapas1[0].limiteDeComandosProc1)
    const [limiteDeComandosProc2, setLimiteDeComandosProc2] = useState(mapas1[0].limiteDeComandosProc2)
    const [filas, setFilas] = useState(mapas1[0].filas)
    const [columnas, setColumnas] = useState(mapas1[0].columnas)

    useEffect(() => {
        if (mapas && mapas[mapaActual - 1]) {
            setMapa(mapas[mapaActual - 1].mapa)
            setBot(mapas[mapaActual - 1].bot)
            setLimiteDeComandos(mapas[mapaActual - 1].limiteDeComandos)
            setProc1(mapas[mapaActual - 1].proc1)
            setProc2(mapas[mapaActual - 1].proc2)
            setLimiteDeComandosProc1(mapas[mapaActual - 1].limiteDeComandosProc1)
            setLimiteDeComandosProc2(mapas[mapaActual - 1].limiteDeComandosProc2)
            setFilas(mapas[mapaActual - 1].filas)
            setColumnas(mapas[mapaActual - 1].columnas)
        }
    }, [mapas, mapaActual])

    const handleRegresar = () => {
        setVistaMenu(prev => !prev)
    }

    const handleSalir = () => {
        setJugando(prev => !prev)
        setJugandoMiNivel(false)
        setJugando(false)
    }

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
                jugandoMiNivel={jugandoMiNivel} mapas1={mapas1} mapas2={mapas2} mapas3={mapas3}
                setMapas={setMapas}
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
                limiteDeComandos={limiteDeComandos} proc1={proc1} proc2={proc2}
                limiteDeComandosProc1={limiteDeComandosProc1} limiteDeComandosProc2={limiteDeComandosProc2}
                filas={filas} columnas={columnas}
            />
        </div>
    )
}

export default Main