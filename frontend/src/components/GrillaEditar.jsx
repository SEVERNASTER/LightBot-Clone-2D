import React, { useState, useEffect } from 'react'
import './GrillaEditar.css'
import CeldaEditar from './CeldaEditar';

function GrillaEditar({ mapa, setMapa, botSentido, direccionDesdeGrados,
    debeVoltearse, setTitulo, titulo, tamanioGrilla
}) {



    // useEffect(() => {
    //     console.log(mapa);
    // }, [mapa])


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
            <div className="titulo-mapa-contenedor">
                <input type="text" name="nombreMapa" id="nombreMapa" required
                    onChange={(e) => setTitulo(e.target.value)}
                    value={!titulo || titulo?.trim() === '' ? '' : titulo}
                />
                <label htmlFor="nombreMapa">Nombre del Mapa</label>
            </div>
            <div className={`grilla-editar-wrapper
                    ${tamanioGrilla === 6 ? 'x6' : ''}
                    ${tamanioGrilla === 7 ? 'x7' : ''}
                `}
            >
                <div className={`grilla-editar
                        ${tamanioGrilla === 6 ? 'x6' : ''}
                        ${tamanioGrilla === 7 ? 'x7' : ''}
                    `} 
                    style={{
                        '--tamanioGrilla': `${tamanioGrilla}`
                        // gridTemplateColumns: `repeat(${tamanioGrilla}, 1fr)`,
                        // gridTemplateRows: `repeat(${tamanioGrilla}, 1fr)`
                    }}
                >

                    {mapa.map((fila, i) =>
                        fila.map((celda, j) => (
                            <CeldaEditar
                                key={`${i}-${j}`}
                                contenido={celda}
                                onDropTool={(tool) => handleDrop(i, j, tool)}
                                mapa={mapa}
                                pos={{ fila: `${i}`, columna: `${j}` }}
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