import React from 'react'
import './NivelCard.css'

function NivelCard({numero}) {
    return (
        <div className={`nivel`}>
            <h3>{numero}</h3>
        </div>
    )
}

export default NivelCard