import { useEffect, useState } from 'react'
import './NivelesPantalla.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Niveles from '../components/Niveles';


function NivelesPantalla({ clasesExtra, setJugando, setMapaActual, jugando, jugandoMiNivel,
    mapas1, mapas2, mapas3, setMapas
}) {

    const nivelesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    const [nivelActual, setNivelActual] = useState(1) //para saber en que card de nivel va

    useEffect(() => {
        // console.log(nivelActual);
        hanldeSetMapasActuales();
    }, [nivelActual])

    const hanldeSetMapasActuales = () => {
        switch (nivelActual) {
            case 1:
                setMapas(mapas1)
                break;
            case 2:
                setMapas(mapas2)
                break;
            case 3:
                setMapas(mapas3)
                break;
            default:
                break;
        }
    }


    return (
        <div className={`niveles-container 
            ${jugando && !jugandoMiNivel ? 'ocultar' : ''} 
            ${clasesExtra}
        `}>
            <div className={`niveles `}>
                <Niveles niveles={nivelesArray} setJugando={setJugando} setMapaActual={setMapaActual}
                    extraClases={`${nivelActual !== 1 ? 'ocultarIzq' : ''}`}
                    titulo='CONCEPTOS BÁSICOS'
                    subtitulo='Aprende movimiento y orientación'
                />

                <Niveles niveles={nivelesArray} setJugando={setJugando} setMapaActual={setMapaActual}
                    extraClases={`
                    ${nivelActual === 1 ? 'ocultarDer' : ''}
                    ${nivelActual === 2 ? 'segunda-card' : ''}
                    ${nivelActual === 3 ? 'ocultarIzq' : ''}
                `}
                    extraStyles={{
                        background: 'linear-gradient(120deg, #2B236D, #580D43)'
                    }}
                    titulo='Procedimientos'
                    subtitulo='Resuelve los niveles usando estructuras más limpias y reutilizables con PROC1'
                />

                <Niveles niveles={nivelesArray} setJugando={setJugando} setMapaActual={setMapaActual}
                    extraClases={`${nivelActual !== 3 ? 'ocultarDer' : ''}`}
                    extraStyles={{
                        background: 'linear-gradient(120deg, #a90570, #300E82)'
                    }}
                    titulo='RUTINAS VARIADAS'
                    subtitulo='Aplica lo aprendido resolviendo versiones alternativas con nuevas rutas y ubicaciones'
                />

                {/* <div className="botones-cambiar"> */}
                <button className={`boton-cambiar izq-btn ${nivelActual <= 1 ? 'inhabilitar' : ''}`}
                    onClick={() => {
                        setNivelActual(prev => prev - 1)
                    }}
                    disabled={nivelActual <= 1}
                ><FaArrowLeft /></button>

                <button className={`boton-cambiar der-btn ${nivelActual >= 3 ? 'inhabilitar' : ''}`}
                    onClick={() => {
                        setNivelActual(prev => prev + 1)
                    }}
                    disabled={nivelActual >= 3}
                ><FaArrowRight /></button>
                {/* </div> */}
            </div>
        </div>
    )
}

export default NivelesPantalla