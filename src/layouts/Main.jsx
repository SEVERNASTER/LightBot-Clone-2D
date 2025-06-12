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
    
    const [vistaMenu, setVistaMenu] = useState(true)
    const [jugando, setJugando] = useState(false)

    return (
        <div className='main-container'>
            <MenuInicio clasesExtra={`${vistaMenu ? '' : 'deslizar'}`}
                setVistaMenu={setVistaMenu}
            />

            {!jugando && <Niveles clasesExtra={`${vistaMenu ? '' : 'deslizar'}`}
                setJugando={setJugando} mapaActual={mapaActual}
            />}

            <button className={`boton-cambiar regresar-niveles-btn ${!vistaMenu ? 'mostrar' : ''}`}
                title='Regresar'
                onClick={() => { setVistaMenu(prev => !prev) }}
            ><IoIosArrowDropup /></button>

            {jugando && <App mapa={mapas[mapaActual.current - 1]} />}
        </div>
    )
}

export default Main