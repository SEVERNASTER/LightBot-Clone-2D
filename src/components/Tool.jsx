import React from 'react'
import './Tool.css'

function Tool({icono: Icon, clasesExtra, esReactIcon, tamanio}) {

    const handleDragStart = (e) => {
        e.dataTransfer.setData('tool', clasesExtra); // enviamos el tipo
    };

    return (
        <div className={`tool ${clasesExtra}`} style={{
                backgroundImage: `url(${!esReactIcon ? Icon : ''})`,
            }}
            draggable
            onDragStart={handleDragStart}
        >
            {esReactIcon && <Icon size={tamanio} />}
        </div>
    )
}

export default Tool