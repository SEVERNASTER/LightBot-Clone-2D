import React from 'react'
import './NivelCard.css'

function NivelCard({numero, clasesExtra}) {
    return (
        <button className={`nivel ${clasesExtra}`}>
            <h3>{numero}</h3>
        </button>
    )
}

export default NivelCard