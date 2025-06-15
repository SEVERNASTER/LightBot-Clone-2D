import React from 'react'
import MenuInicio from './MenuInicio';
import './Main.css'
import Niveles from './NivelesPantalla';
import { useState, useRef } from 'react';
import { IoIosArrowDropup } from "react-icons/io";
import App from '../App';
import mapas from '../data/mapas';


function Main() {

    
    const mapaActual = useRef(1)
    
    const [vistaMenu, setVistaMenu] = useState(false)
    const [jugando, setJugando] = useState(false)

    return (
        <div className={`main-container ${jugando ? 'jugando' : ''}`}>
            <MenuInicio clasesExtra={`${vistaMenu ? '' : 'deslizar'}`}
                setVistaMenu={setVistaMenu}
            />

            <Niveles clasesExtra={`${vistaMenu ? 'deslizar' : ''}`}
                setJugando={setJugando} mapaActual={mapaActual} jugando={jugando}
            />

            <button className={`boton-cambiar regresar-niveles-btn ${!vistaMenu ? 'mostrar' : ''}`}
                title='Regresar'
                onClick={() => { setVistaMenu(prev => !prev) }}
            ><IoIosArrowDropup /></button>

            <App mapa={mapas[mapaActual.current - 1]} jugando={jugando} />
        </div>
    )
}

export default Main