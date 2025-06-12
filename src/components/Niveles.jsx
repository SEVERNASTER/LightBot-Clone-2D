import React from 'react'
import './Niveles.css'
import NivelCard from '../components/NivelCard';


function Niveles({ niveles, mapaActual, extraClases }) {
    return (
        <div className={`niveles-wrapper ${extraClases}`}>
            <div className={`niveles-card ${extraClases}`}>
                <div className="contenido-niveles-card">
                    <header className="niveles-header">
                        <h2>CONCEPTOS BÁSICOS</h2>
                        <h3>Aprende movimiento y orientación</h3>
                    </header>
                    <div className="niveles-contenedor">
                        {niveles.map(nivel => {
                            return <NivelCard key={nivel * Math.random()}
                                numero={nivel}
                                onClick={() => {
                                    setJugando(prev => !prev)
                                    mapaActual.current = nivel
                                }}
                            />
                        })}
                    </div>
                    <footer className="niveles-footer">
                        <div className="barra-progreso"></div>
                        <h4>Progreso: 8/15 niveles completados</h4>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Niveles