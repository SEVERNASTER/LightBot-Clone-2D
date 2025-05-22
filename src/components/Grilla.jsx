
import './Grilla.css'

import Celda from './Celda';
import flechaImg from '../assets/flecha.png';
import { useRef, useState, useEffect } from 'react';



function Grilla({ pos, sentido, filas, columnas }) {

    const grillaRef = useRef(null);
    const [dimensiones, setDimensiones] = useState({ ancho: 0, alto: 0 });

    useEffect(() => {
        if (grillaRef.current) {
            const { width, height } = grillaRef.current.getBoundingClientRect();
            setDimensiones({ ancho: width, alto: height });
            console.log(dimensiones);
        }

    }, []);

    useEffect(() => {
        console.log(dimensiones);
    }, [dimensiones]);

    let grilla = []

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            grilla = [...grilla, { x: i, y: j }]
        }
    }

    // console.log(grilla);

    const tranformStyle = `translateX(${pos.x * 100}%) translateY(${pos.y * 100}%)`

    return (
        <div className="grilla" ref={grillaRef} style={{
            gridTemplateColumns: `repeat(${columnas}, 1fr)`
        }}>
            {
                grilla.map(actual => (
                    <Celda
                        key={`{${actual.x}, ${actual.y}}`}
                        alto={dimensiones.alto / filas}
                        ancho={dimensiones.ancho / columnas}
                    />
                ))
            }
            {/* <Bot estilosExtra={{tranform: `${tranformStyle}`}}  alto={alto / filas} ancho={ancho / columnas} /> */}


            <div className="bot-contenedor" style={{
                transform: `${tranformStyle}`
            }}>
                <img src={flechaImg} alt="bot" style={{ transform: `rotate(${sentido}deg)` }} />
            </div>
        </div>
    )

}

export default Grilla