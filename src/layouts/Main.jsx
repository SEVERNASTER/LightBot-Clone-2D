import React from 'react'
import MenuInicio from './MenuInicio';
import './Main.css'
import Niveles from './Niveles';
import {useState} from 'react';

function Main() {

    const [vistaMenu, setVistaMenu] = useState(false)

    return (
        <div className='main-container'>
            <MenuInicio clasesExtra={`${vistaMenu ? '' : 'deslizar'}`}
                setVistaMenu={setVistaMenu}
            />
            <Niveles clasesExtra={`${vistaMenu ? '' : 'deslizar'}`} />
        </div>
    )
}

export default Main