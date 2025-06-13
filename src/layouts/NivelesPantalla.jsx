import { useState } from 'react'
import './NivelesPantalla.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Niveles from '../components/Niveles';


function NivelesPantalla({ clasesExtra, setJugando, mapaActual }) {

    const nivelesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    const [nivelActual, setNivelActual] = useState(1) //para saber en que card de nivel va

    return (
        <div className={`niveles ${clasesExtra}`}>
            <Niveles niveles={nivelesArray} setJugando={setJugando} mapaActual={mapaActual}
                extraClases={`${nivelActual !== 1 ? 'ocultarIzq' : ''}`}
                titulo='CONCEPTOS BÁSICOS'
                subtitulo='Aprende movimiento y orientación'
            />

            <Niveles niveles={nivelesArray} setJugando={setJugando} mapaActual={mapaActual}
                extraClases={`
                    ${nivelActual === 1 ? 'ocultarDer' : ''}
                    ${nivelActual === 2 ? 'segunda-card' : ''}
                    ${nivelActual === 3 ? 'ocultarIzq' : ''}
                `}
                extraStyles={{
                    background: 'linear-gradient(120deg, #2B236D, #580D43)'
                }}
                titulo='CONCEPTOS BÁSICOS'
                subtitulo='Aprende movimiento y orientación'
            />

            <Niveles niveles={nivelesArray} setJugando={setJugando} mapaActual={mapaActual}
                extraClases={`${nivelActual !== 3 ? 'ocultarDer' : ''}`}
                extraStyles={{
                    background: 'linear-gradient(120deg, #a90570, #300E82)'
                }}
                titulo='CONCEPTOS BÁSICOS'
                subtitulo='Aprende movimiento y orientación'
            />

            {/* <div className="botones-cambiar"> */}
            <button className={`boton-cambiar izq-btn ${nivelActual <= 1 ? 'inhabilitar' : ''}`}
                onClick={() => setNivelActual(prev => prev - 1)}
                disabled={nivelActual <= 1}
            ><FaArrowLeft /></button>

            <button className={`boton-cambiar der-btn ${nivelActual >= 3 ? 'inhabilitar' : ''}`}
                onClick={() => setNivelActual(prev => prev + 1)}
                disabled={nivelActual >= 3}
            ><FaArrowRight /></button>
            {/* </div> */}
        </div>
    )
}

export default NivelesPantalla