
import './Grilla.css'

import Celda from './Celda';
import flechaImg from '../assets/flecha.png';
import { useRef, useState, useEffect } from 'react';
import muroImg from '../assets/muro.jpg';
import sueloImg from '../assets/suelo.jpg';
import botImg from '../assets/bot.png';
import bot2Img from '../assets/bot2.png';



function Grilla({ pos, sentido, filas, columnas, mapa, botAnimado, colisionArriba,
    colisionAbajo, colisionDerecha, colisionIzquierda, reiniciar
}) {

    const textura = (tipo) => {
        let textura = null;
        switch (tipo) {
            case 0:
                textura = 'sueloImg'
                break;
            case 1:
                textura = muroImg
                break;

            default:
                break;
        }
        return textura
    }

    const colorFondo = (valor) => {
        if (valor === 2) {
            return '#4E9CD4'
        }

        if (valor === 3) {
            return '#FFFC00'
        }
    }


    const grillaRef = useRef(null);
    const [dimensiones, setDimensiones] = useState({ ancho: 0, alto: 0 });

    useEffect(() => {
        if (grillaRef.current) {
            const { width, height } = grillaRef.current.getBoundingClientRect();
            setDimensiones({ ancho: width, alto: height });
        }

    }, []);



    // useEffect(() => {
    //     console.log(dimensiones);
    // }, [dimensiones]);

    let grilla = []

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            grilla = [...grilla, { x: i, y: j }]
        }
    }

    // console.log(grilla);

    const alto = dimensiones.alto / filas
    const ancho = dimensiones.ancho / columnas
    const tranformStyle = `translateY(${pos.fila * 100}%) translateX(${pos.columna * 100}%)`


    return (
        <div className="grilla" ref={grillaRef} style={{
            gridTemplateColumns: `repeat(${columnas}, 1fr)`,
        }}>


            <div className={`bot-contenedor ${botAnimado ? 'animar' : ''} 
                ${colisionArriba ? 'colisionar-arr' : ''}
                ${colisionAbajo ? 'colisionar-abj' : ''}
                ${colisionDerecha ? 'colisionar-der' : ''}
                ${colisionIzquierda ? 'colisionar-izq' : ''}
                ${reiniciar ? 'quitar-transition' : ''}`
            } id='bot' style={{
                transform: `${tranformStyle}`,
                width: `calc(100% / ${columnas})`,
                height: `calc(100% / ${filas})`
                // width: `${ancho}px`,
            }}>
                <img src={flechaImg} alt="bot" style={{ transform: `rotate(${sentido}deg)` }} />
            </div>


            {
                grilla.map(actual => (
                    <Celda
                        key={`{${actual.x}, ${actual.y}}`}
                        alto={`${alto}px`}
                        ancho={`${ancho}px`}
                        // fondo= {textura(mapa[actual.x][actual.y])}
                        fondo={mapa[actual.x][actual.y] === 1 ? muroImg : ''}
                        colorFondo={colorFondo(mapa[actual.x][actual.y])}
                    />
                ))
            }
            {/* <Bot estilosExtra={{tranform: `${tranformStyle}`}}  alto={alto / filas} ancho={ancho / columnas} /> */}



        </div>
    )

}

export default Grilla