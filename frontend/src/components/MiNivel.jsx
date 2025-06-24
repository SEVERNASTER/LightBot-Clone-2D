import React from 'react'
import './MiNivel.css'

function MiNivel({titulo, setMapa, setBot, setJugando}) {

    const handleJugar = () => {
        
    }

    return (
        <div className='mn-container'>
            <div className="mn-titulo">
                <h3>{titulo}</h3>
            </div>
            <div className="mn-botones">
                <button className="mn-button mn-jugar">Jugar</button>
                <button className="mn-button mn-eliminar">Eliminar</button>
            </div>
        </div>
    )
}

export default MiNivel