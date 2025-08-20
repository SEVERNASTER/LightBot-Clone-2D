
import './Grilla.css'

import Celda from './Celda';
import { useState, useRef, useEffect, useMemo, act } from 'react';
import muroImg from '../assets/muro2.jpg';
import Bot from '../components/Bot';



function Grilla({ pos, sentido, filas, columnas, mapa, botAnimado, colisionArriba,
    colisionAbajo, colisionDerecha, colisionIzquierda, reiniciar, ejecutando, secuencia,
    indice, jugando, secuenciaProc1, indiceProc1, todasEncendidas
}) {


    const contadorDeLuces = useRef(1)

    const colorFondo = (valor) => {
        if (valor === 0) {// camino libre
            return 'linear-gradient(#0954D1, #18B1F8)'
        }

        if (valor === 0) {// obstaculo
            return 'none'
        }

        if (valor === 2) {//si luz
            return 'linear-gradient(#CB23D6, #6C4BEA)'
        }

        if (valor === 3) {// si es luz prendida
            return '#FFFC00'
        }

    }


    const grillaRef = useRef(null);



    // useEffect(() => {
    //     console.log(dimensiones);
    // }, [dimensiones]);

    const grilla = useMemo(() => {
        const nuevaGrilla = [];
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                nuevaGrilla.push({ x: i, y: j });
            }
        }
        return nuevaGrilla;
    }, [filas, columnas]);



    // console.log(grilla);


    // verificamos si esa posicion del mapa existe porque el useEffect que esta en el Main.jsx
    // no garantiza que cambie los useState inmediatamente y en el orden en el que esta
    const obtenerValorCelda = (x, y) => {
        if (!mapa[x] || mapa[x][y] === undefined) {
            return 0; // valor por defecto para camino libre
        }
        return mapa[x][y];
    };

    const obtenerIndiceLuz = (x, y) => {
        let indice = 0;
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                if (i === x && j === y) return indice;
                if (obtenerValorCelda(i, j) === 2 || obtenerValorCelda(i, j) === 3) {
                    indice++;
                }
            }
        }
        return 0;
    };

    const esLuz = (x, y) => {
        return obtenerValorCelda(x, y) === 2 ||
                obtenerValorCelda(x, y) === 3
    }



    return (
        <div className={`grilla-contenedor ${jugando ? 'mostrar' : ''}`}>

            <div className="grilla" ref={grillaRef} style={{
                gridTemplateColumns: `repeat(${columnas}, 1fr)`,
            }}>


                <Bot secuencia={secuencia} indiceActual={indice}
                    secuenciaProc1={secuenciaProc1} indiceActualProc1={indiceProc1}
                    ejecutando={ejecutando} sentido={sentido} reiniciar={reiniciar}
                    botAnimado={botAnimado} colisionArriba={colisionArriba}
                    colisionAbajo={colisionAbajo} colisionDerecha={colisionDerecha}
                    colisionIzquierda={colisionIzquierda} pos={pos} filas={filas}
                    columnas={columnas}
                />


                {

                    grilla.map((actual, index) => (
                        <Celda
                            key={`${actual.x}-${actual.y}`}
                            fondo={obtenerValorCelda(actual.x, actual.y) === 1 ? muroImg : ''}
                            colorFondo={colorFondo(obtenerValorCelda(actual.x, actual.y))}
                            todasEncendidas={esLuz(actual.x, actual.y) ? todasEncendidas : null}
                            esLuz={esLuz(actual.x , actual.y)}
                            delay={esLuz(actual.x, actual.y) ? obtenerIndiceLuz(actual.x, actual.y) : 0}
                        />
                    ))

                }
                {/* <Bot estilosExtra={{tranform: `${tranformStyle}`}}  alto={alto / filas} ancho={ancho / columnas} /> */}



            </div>
        </div>

    )

}

export default Grilla