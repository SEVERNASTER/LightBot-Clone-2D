import React from 'react'
import './MiNivel.css'
import axios from 'axios';
import { useState } from 'react';

function MiNivel({ titulo, setMapa, setBot, setJugando, mapa, bot, setJugandoMiNivel, id,
    mostrarToast, eliminarNivelInterfaz, setFilas, setColumnas, setLimiteDeComandos,
    setLimiteDeComandosProc1, setLimiteDeComandosProc2, setProc1, setProc2,
    mapaInfo,
}) {

    const [eliminando, setEliminando] = useState(false)

    const handleJugar = () => {
        const { filas, columnas, proc1, proc2, limiteDeComandos,
            limiteDeComandosProc1, limiteDeComandosProc2
        } = mapaInfo
        setMapa(mapa)
        setBot(bot)
        setJugando(true)
        setJugandoMiNivel(true)

        setFilas(filas)
        setColumnas(columnas)
        setProc1(proc1)
        setProc2(proc2)
        setLimiteDeComandos(limiteDeComandos)
        setLimiteDeComandosProc1(limiteDeComandosProc1)
        setLimiteDeComandosProc2(limiteDeComandosProc2)
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