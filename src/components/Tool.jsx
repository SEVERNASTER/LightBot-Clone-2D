import React from 'react'
import './Tool.css'

function Tool({icono: Icon, clasesExtra, esReactIcon, tamanio, esBot, puedeArrastrar, tipo, sentido}) {

    const handleDragStart = (e) => {
        e.dataTransfer.setData('tool', tipo); // enviamos el tipo
    };

    return (
        <div className={`tool ${clasesExtra}`} style={{
                backgroundImage: `url(${!esReactIcon ? Icon : ''})`,
                '--sentido': `${sentido}deg`
            }}
            draggable={!esBot ? true : puedeArrastrar ? true : false}
            onDragStart={handleDragStart}
        >
            {esReactIcon && <Icon size={tamanio} />}
        </div>
    )
}

export default Tool