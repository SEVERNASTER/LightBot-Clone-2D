import React from 'react'
import './Maker.css'
import GrillaEditar from '../components/GrillaEditar';
import PanelEditar from '../components/PanelEditar';

function Maker({creando}) {
    
    return (
        <div className={`creador ${creando ? 'mostrar' : ''}`} >
            <GrillaEditar />
            <PanelEditar />
        </div>
    )
}

export default Maker