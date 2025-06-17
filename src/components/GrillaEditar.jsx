import React, { useState } from 'react'
import './GrillaEditar.css'
import CeldaEditar from './CeldaEditar';

function GrillaEditar() {

    const [filas, setFilas] = useState(5)
    const [columnas, setSolumnas] = useState(5)
    const [mapa, setMapa] = useState(
        Array(filas)
            .fill(0)
            .map(() => Array(columnas).fill(0))
    )



    return (
        <div className='grilla-editar-contenedor' >
            <div className="editar-titulo">
                <h2>CONSTRUCCIÓN DEL NIVEL</h2>
            </div>
            <div className="grilla-editar-wrapper">
                <div className="grilla-editar" style={{
                    // gridTemplateColumns: `repeat(${columnas}, 1fr)`,
                    // gridTemplateRows: `repeat(${columnas}, 1fr)`
                }}>

                    {mapa.map((fila, indiceFila) => (
                        fila.map((celda, indiceColumna) => (
                            <CeldaEditar key={`${indiceFila} ${indiceColumna}`}

                            />
                        ))
                    ))}


                </div>
            </div>
        </div>
    )
}

export default GrillaEditar