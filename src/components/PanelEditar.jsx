import React from 'react'
import './PanelEditar.css'
import Tool from './Tool';
import bot from '../assets/static-bot.png';

function PanelEditar() {
    return (
        <div className='panel-editar' >
            <div className="herramientas">
                <div className="titulo-herramientas">
                    <h3>HERRAMIENTAS DE CONSTRUCCIÓN</h3>
                </div>
                <div className="herramientas-contenedor">
                    <Tool icono={bot} />
                </div>
            </div>
        </div>
    )
}

export default PanelEditar