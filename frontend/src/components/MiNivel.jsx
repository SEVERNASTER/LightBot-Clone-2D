import React from 'react'
import './MiNivel.css'
import axios from 'axios';
import { useState } from 'react';

function MiNivel({ titulo, setMapa, setBot, setJugando, mapa, bot, setJugandoMiNivel, id,
    mostrarToast, eliminarNivelInterfaz
}) {

    const [eliminando, setEliminando] = useState(false)

    const handleJugar = () => {
        setMapa(mapa)
        setBot(bot)
        setJugando(true)
        setJugandoMiNivel(true)
    }

    const handleEliminarNivel = async () => {
        setEliminando(true)
        try {
            const response = await axios.delete(`
                ${import.meta.env.VITE_BACKEND_URL}/api/eliminarNivel/${id}`,
                { withCredentials: true, }
            );

            console.log('Nivel eliminado:', response.data.message);
            eliminarNivelInterfaz()
            mostrarToast(response.data.message, 'check')
        } catch (error) {
            console.error('Error al eliminar nivel:', error.response?.data || error.message);
            setEliminando(false)
            mostrarToast(error.response.data.message, 'error')
        }
        setEliminando(false)
    };

    return (
        <div className='mn-container'>
            <div className="mn-titulo">
                <h3>{titulo}</h3>
            </div>
            <div className={`mn-botones`}>
                <button className={`mn-button mn-jugar 
                    ${eliminando ? 'eliminando' : ''}
                `}
                    onClick={handleJugar}
                >Jugar</button>
                <button className={`mn-button mn-eliminar
                    ${eliminando ? 'eliminando' : ''}
                `}
                    onClick={handleEliminarNivel}
                >
                    {!eliminando && 'Eliminar'}
                </button>
            </div>
        </div>
    )
}

export default MiNivel