import React from 'react'
import './Niveles.css'
import NivelCard from '../components/NivelCard';


function Niveles({ niveles, mapaActual, extraClases, setJugando, extraStyles, titulo, subtitulo,
}) {
    return (
        <div className={`niveles-wrapper ${extraClases}
        `}>
            <div className={`niveles-card ${extraClases}`}>
                <div className={`contenido-niveles-card`} style={extraStyles}>
                    <header className="niveles-header">
                        <h2>{`${titulo}`}</h2>
                        <h3>{`${subtitulo}`}</h3>
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