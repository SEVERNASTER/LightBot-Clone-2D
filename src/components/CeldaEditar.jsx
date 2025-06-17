import React from 'react'
import './CeldaEditar.css'
import bot from '../assets/static-bot.png';
import obstaculo from '../assets/muro2.jpg';

function CeldaEditar({onDropTool}) {

    const handleDragOver = (e) => {
        e.preventDefault(); // necesario para permitir drop
    };

    const handleDrop = (e) => {
        const tool = e.dataTransfer.getData('tool');
        onDropTool(tool);
    };

    const contenido = (tipo) => {
        let res = '';
        switch (tipo) {
            case 'bot':
                res = bot
                break;
            case 'muro':
                res = muro
                break;
            default:
                break;
        }
    }

    return (
        <div className='celda-editar' 
            onDragOver={handleDragOver} 
            onDrop={handleDrop}
        ></div>
    )
}

export default CeldaEditar