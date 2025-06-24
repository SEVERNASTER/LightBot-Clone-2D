import React from 'react'
import './MiNivel.css'

function MiNivel({titulo, setMapa, setBot, setJugando, mapa, bot, setJugandoMiNivel}) {

    const handleJugar = () => {
        setMapa(mapa)
        setBot(bot)
        setJugando(true)
        setJugandoMiNivel(true)
    }

    return (
        <div className='mn-container'>
            <div className="mn-titulo">
                <h3>{titulo}</h3>
            </div>
            <div className="mn-botones">
                <button className="mn-button mn-jugar"
                    onClick={handleJugar}
                >Jugar</button>
                <button className="mn-button mn-eliminar">Eliminar</button>
            </div>
        </div>
    )
}

export default MiNivel