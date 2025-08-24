import { useEffect, useState } from 'react'
import './NivelesPantalla.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Niveles from '../components/Niveles';


function NivelesPantalla({ clasesExtra, setJugando, setMapaActual, jugando, jugandoMiNivel,
    mapas1, mapas2, mapas3, mapas4, setMapas
}) {

    const nivelesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    const [nivelActual, setNivelActual] = useState(1) //para saber en que card de nivel va

    useEffect(() => {
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
            case 4:
                setMapas(mapas4)
                break;
            default:
                break;
        }
    }, [nivelActual])


    return (
        <div className={`niveles-container 
            ${jugando && !jugandoMiNivel ? 'ocultar' : ''} 
            ${clasesExtra}
        `}>
            <div className={`niveles `}>
                {/* carta #1 */}
                <Niveles niveles={nivelesArray} setJugando={setJugando} setMapaActual={setMapaActual}
                    extraClases={`${nivelActual !== 1 ? 'ocultarIzq' : ''}`}
                    titulo='CONCEPTOS BÁSICOS'
                    subtitulo='Aprende movimiento y orientación'
                />


                {/* carta #2 */}
                <Niveles niveles={nivelesArray} setJugando={setJugando} setMapaActual={setMapaActual}
                    extraClases={`
                    proc1
                    ${nivelActual === 1 ? 'ocultarDer' : ''}
                    ${nivelActual === 2 ? 'segunda-card' : ''}
                    ${nivelActual === 3 ? 'ocultarIzq' : ''}
                    ${nivelActual === 4 ? 'ocultarIzq' : ''}
                `}
                    extraStyles={{
                        // background: 'linear-gradient(120deg, #2B236D, #580D43)'
                    }}
                    titulo='Procedimientos'
                    subtitulo='Resuelve los niveles usando estructuras más limpias y reutilizables con PROC1'
                    tipoNivel={'proc1'}
                />


                {/* carta #3 */}
                <Niveles niveles={nivelesArray} setJugando={setJugando} setMapaActual={setMapaActual}
                    extraClases={`
                        proc2
                        ${nivelActual === 1 ? 'ocultarDer' : ''}
                        ${nivelActual === 2 ? 'ocultarDer' : ''}
                        ${nivelActual === 3 ? 'segunda-card' : ''}
                        ${nivelActual === 4 ? 'ocultarIzq' : ''}
                    `}
                    extraStyles={{
                        // background: 'linear-gradient(120deg, #2B236D, #580D43)'
                    }}
                    titulo='Procedimientos Avanzados'
                    subtitulo='Resuelve los niveles combinando y anidando llamadas con PROC2 para soluciones más eficientes'
                    tipoNivel={'proc2'}
                />


                {/* carta #4 */}
                <Niveles niveles={nivelesArray} setJugando={setJugando} setMapaActual={setMapaActual}
                    extraClases={`loop ${nivelActual !== 4 ? 'ocultarDer' : ''}`}
                    extraStyles={{
                        // background: 'linear-gradient(120deg, #a90570, #300E82)'
                    }}
                    titulo='Bucles'
                    subtitulo='Supera los niveles repitiendo secuencias de acciones para resolverlos con menos instrucciones'
                    tipoNivel={'loop'}
                />


                {/* <div className="botones-cambiar"> */}

                {/* boton para cambiar a la izquierda */}
                <button className={`boton-cambiar izq-btn ${nivelActual <= 1 ? 'inhabilitar' : ''}`}
                    onClick={() => {
                        setNivelActual(prev => prev - 1)
                    }}
                    disabled={nivelActual <= 1}
                ><FaArrowLeft /></button>

                {/* boton para cambiar a la derecha */}
                <button className={`boton-cambiar der-btn ${nivelActual >= 4 ? 'inhabilitar' : ''}`}
                    onClick={() => {
                        setNivelActual(prev => prev + 1)
                    }}
                    disabled={nivelActual >= 4}
                ><FaArrowRight /></button>
                {/* </div> */}
            </div>
        </div>
    )
}

export default NivelesPantalla