import React from 'react'
import './Niveles.css'
import NivelCard from '../components/NivelCard';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


function Niveles({ clasesExtra }) {

    const niveles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    return (
        <div className={`niveles ${clasesExtra}`}>
            <div className="niveles-card">
                <div className="contenido-niveles-card">
                    <header className="niveles-header">
                        <h2>CONCEPTOS BÁSICOS</h2>
                        <h3>Aprende movimiento y orientación</h3>
                    </header>
                    <div className="niveles-contenedor">
                        {niveles.map(nivel => {
                            return <NivelCard key={nivel * Math.random()} numero={nivel} />
                        })}
                    </div>
                    <footer className="niveles-footer">
                        <div className="barra-progreso"></div>
                        <h4>Progreso: 8/15 niveles completados</h4>
                    </footer>
                </div>
            </div>
            {/* <div className="botones-cambiar"> */}
                <button className='boton-cambiar izq-btn'><FaArrowLeft /></button>
                <button className='boton-cambiar der-btn'><FaArrowRight /></button>
            {/* </div> */}
        </div>
    )
}

export default Niveles