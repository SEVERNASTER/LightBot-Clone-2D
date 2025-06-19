import { useEffect, useState } from 'react'
import './CeldaEditar.css'
import bot from '../assets/static-bot.png';
import obstaculo from '../assets/muro2.jpg';
import { FaLightbulb } from "react-icons/fa6";


function CeldaEditar({ onDropTool, contenido, mapa, pos, sentido, clasesExtra, debeVoltearse }) {


    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        const tool = Number(e.dataTransfer.getData('tool'));
        onDropTool(tool);
    };



    return (
        <div className={`celda-editar 
                ${clasesExtra}
                ${contenido === 2 ? 'luz' : ''} 
                ${contenido === 4 ? 'bot' : ''}
            `}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            style={{
                // background: 'linear-gradient(45deg, #17AAF5, #0956D1)',
                backgroundImage: `url(
                    ${mapa[pos.fila][pos.columna] === 1 ? obstaculo : ''}
                )`,
                '--sentido': `${sentido}deg`
            }}
        >
            {contenido === 4 &&
                <div className={`tool-fondo-celda
                        ${debeVoltearse ? 'voltear' : ''}
                    `}
                    style={{
                        backgroundImage: `url(${bot})`,
                    }}
                ></div>
            }
            {contenido === 2 && <FaLightbulb size={40} />}
        </div>

    )
}

export default CeldaEditar