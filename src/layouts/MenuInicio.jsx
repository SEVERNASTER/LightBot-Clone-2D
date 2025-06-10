import React from 'react'
import './MenuInicio.css'

function MenuInicio() {
    return (
        <div className='menu-inicio'>
            <div className="contenedor-menu-inicio">
                <div className="contenedor-titulo">
                    <h1>CODEPILOT</h1>
                </div>
                <div className="contenedor-menu-animado">
                    <div className="contenedor-opciones">
                        <div className="opcion-menu jugar">Jugar</div>
                        <div className="opcion-menu instrucciones">Instrucciones</div>
                        <div className="opcion-menu opciones">Opciones</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuInicio