import React, { useState , useEffect} from 'react'
import './GrillaEditar.css'
import CeldaEditar from './CeldaEditar';

function GrillaEditar({mapa, setMapa, botSentido, direccionDesdeGrados, debeVoltearse}) {

    

    useEffect(() => {
        console.log(mapa);
    }, [mapa])


    const handleDrop = (fila, col, tool) => {
        const nuevoMapa = mapa.map((filaActual, i) =>
            filaActual.map((celda, j) => (i === fila && j === col ? tool : celda))
        );
        setMapa(nuevoMapa);
    };

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

                    {mapa.map((fila, i) =>
                        fila.map((celda, j) => (
                            <CeldaEditar
                                key={`${i}-${j}`}
                                contenido={celda}
                                onDropTool={(tool) => handleDrop(i, j, tool)}
                                mapa={mapa}
                                pos={{fila: `${i}`, columna: `${j}`}}
                                sentido={botSentido}
                                clasesExtra={direccionDesdeGrados(botSentido)}
                                debeVoltearse={debeVoltearse}
                                setMapa={setMapa}
                            />
                        ))
                    )}



                </div>
            </div>
        </div>
    )
}

export default GrillaEditar