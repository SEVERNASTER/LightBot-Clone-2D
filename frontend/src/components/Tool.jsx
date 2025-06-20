import React from 'react'
import './Tool.css'
import botImg from '../assets/static-bot.png';

function Tool({ icono: Icon, clasesExtra, esReactIcon, tamanio, esBot, puedeArrastrar, tipo,
    sentido, debeVoltearse
}) {

    const handleDragStart = (e) => {
        e.dataTransfer.setData('tool', tipo); // enviamos el tipo
    };

    return (
        <div className={`tool 
                ${clasesExtra}
            `}
            style={{
                backgroundImage: `url(${!esBot ? !esReactIcon ? Icon : '' : ''})`,
                '--sentido': `${sentido}deg`
            }}
            draggable={!esBot ? true : puedeArrastrar ? true : false}
            onDragStart={handleDragStart}
        >
            {
                clasesExtra.includes('bot') &&
                <div className={`tool-fondo
                        ${debeVoltearse ? 'voltear' : ''}
                    `}
                    style={{
                        backgroundImage: `url(${botImg})`,
                    }}
                ></div>
            }
            {esReactIcon && <Icon size={tamanio} />}
        </div>
    )
}

export default Tool