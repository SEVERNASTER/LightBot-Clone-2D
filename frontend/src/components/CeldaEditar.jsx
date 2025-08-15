import { useEffect, useState } from 'react'
import './CeldaEditar.css'
import bot from '../assets/static-bot.png';
import obstaculo from '../assets/muro2.jpg';
import { FaLightbulb } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";


function CeldaEditar({ onDropTool, contenido, mapa, setMapa, pos, sentido, clasesExtra, debeVoltearse }) {
    const [isDraggedOver, setIsDraggedOver] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDraggedOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        // Solo cambiar el estado si realmente salimos de la celda
        // (evita flickering cuando el cursor pasa sobre elementos hijos)
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsDraggedOver(false);
        }
    };

    const handleDrop = (e) => {
        const tool = Number(e.dataTransfer.getData('tool'));
        setIsDraggedOver(false); // Resetear el estado al soltar
        onDropTool(tool);
    };

    const eliminarCelda = () => {
        const nuevoMapa = mapa.map((fila, i) =>
            fila.map((celda, j) =>
                i === Number(pos.fila) && j === Number(pos.columna) ? 0 : celda
            )
        );
        setMapa(nuevoMapa);
    };

    return (
        <div className={`celda-editar 
                ${clasesExtra}
                ${contenido === 2 ? 'luz' : ''} 
                ${contenido === 4 ? 'bot' : ''}
                ${isDraggedOver ? 'drag-over' : ''}
            `}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{
                // background: 'linear-gradient(45deg, #17AAF5, #0956D1)',
                backgroundImage: `url(
                    ${mapa[pos.fila][pos.columna] === 1 ? obstaculo : ''}
                )`,
                '--sentido': `${sentido}deg`,
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

            {/* para el boton de quitar celda */}
            {contenido !== 0 &&
                <div className="quitar-celda"
                    onClick={eliminarCelda}
                >
                    <IoClose />
                </div>
            }
        </div>
    )
}

export default CeldaEditar