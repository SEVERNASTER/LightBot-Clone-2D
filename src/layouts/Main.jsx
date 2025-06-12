import React from 'react'
import MenuInicio from './MenuInicio';
import './Main.css'
import Niveles from './Niveles';
import { useState } from 'react';
import { IoIosArrowDropup } from "react-icons/io";


function Main() {

    const [vistaMenu, setVistaMenu] = useState(true)

    return (
        <div className='main-container'>
            <MenuInicio clasesExtra={`${vistaMenu ? '' : 'deslizar'}`}
                setVistaMenu={setVistaMenu}
            />
            <Niveles clasesExtra={`${vistaMenu ? '' : 'deslizar'}`} />
            <button className={`boton-cambiar regresar-niveles-btn ${!vistaMenu ? 'mostrar' : ''}`}
                title='Regresar'
                onClick={() => {setVistaMenu(prev => !prev)}}
            ><IoIosArrowDropup /></button>
        </div>
    )
}

export default Main