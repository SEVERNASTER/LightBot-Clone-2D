import React from 'react'
import './NivelCard.css'

function NivelCard({numero, clasesExtra, onClick: eventoClick, tipoNivel}) {
    return (
        <button className={`
            nivel 
            ${clasesExtra}
            ${tipoNivel}
        `}
            onClick={eventoClick}
        >
            <h3>{numero}</h3>
        </button>
    )
}

export default NivelCard