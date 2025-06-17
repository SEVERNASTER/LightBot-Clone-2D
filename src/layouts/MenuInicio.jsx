import React from 'react'
import './MenuInicio.css'

function MenuInicio({ clasesExtra, setVistaMenu, setCreando }) {
    return (
        <div className={`menu-inicio ${clasesExtra}`}>
            <div className="contenedor-menu-inicio">
                <div className="contenedor-titulo">
                    <h1>CODEPILOT</h1>
                </div>
                <div className="contenedor-menu-animado">
                    <div className="contenedor-opciones">
                        <button className="opcion-menu jugar"
                            onClick={() => setVistaMenu(prev => !prev)}
                        >Jugar</button>
                        <button className="opcion-menu instrucciones">Instrucciones</button>
                        <button className="opcion-menu opciones">Opciones</button>
                        <button className="opcion-menu crear"
                            onClick={() => setCreando(true)}
                        >Crear Nivel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuInicio