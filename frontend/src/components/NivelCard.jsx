import React from 'react'
import './NivelCard.css'

function NivelCard({numero, clasesExtra, onClick: eventoClick}) {
    return (
        <button className={`nivel ${clasesExtra}`}
            onClick={eventoClick}
        >
            <h3>{numero}</h3>
        </button>
    )
}

export default NivelCard