
import './Panel.css'

import { useEffect, useState } from 'react';
import Button from './Button';
import avanzarImg from '../assets/avanzar.png';
import girarImg from '../assets/girar.png';
import girarIzqImg from '../assets/girarIzq.png';
import { FaLightbulb } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import Comando from './Comando';


function Panel({ posAux, setPosAux, sentidoAux, setSentidoAux, ejecutando, jugar, setSecuencia,
    secuencia, mapa, filas, columnas

}) {

    const [comandos, setComandos] = useState([avanzarImg, avanzarImg, avanzarImg, avanzarImg, avanzarImg, avanzarImg])

    const agregarComando = (comando) => {
        let comandoImagen = null;
        switch (comando) {
            case 'avanzar':
                comandoImagen = avanzarImg
                break;
            case 'vueltaDer':
                comandoImagen = girarImg
                break;
            case 'vueltaIzq':
                comandoImagen = girarIzqImg
                break;
            default:
                break;
        }
        return comandoImagen
    }

    useEffect(() => {
        const nuevosComandos = secuencia.map(actual => {
            if (['arriba', 'abajo', 'izquierda', 'derecha'].includes(actual)) {
                return agregarComando('avanzar');
            }
            if (actual === 'vueltaDer' || actual === 'vueltaIzq') {
                return agregarComando(actual);
            }
            return null;
        }).filter(Boolean)

        setComandos(prev => [...prev, ...nuevosComandos]);
    }, [secuencia]);




    return (
        <div className="panel-principal">

            <div className="comandos-contenedor">
                {
                    comandos.map((actual, indice) => {
                        return <Comando key={indice} imagen={actual} />
                    })
                }
            </div>




            <div className="botones-contenedor">
                <Button imgBg={avanzarImg} onClick={() => {
                    const angulo = ((sentidoAux % 360) + 360) % 360
                    const noChocaArriba = mapa[posAux.fila === 0 ? 0 : posAux.fila - 1][posAux.columna] !== 1
                    const noChocaAbajo = mapa[posAux.fila === filas - 1 ? posAux.fila : posAux.fila + 1][posAux.columna] !== 1
                    const noChocaDerecha = mapa[posAux.fila][posAux.columna < columnas - 1 ? posAux.columna + 1 : posAux.columna] !== 1
                    const noChocaIzquierda = mapa[posAux.fila][posAux.columna > 0 ? posAux.columna - 1 : posAux.columna] !== 1
                    // console.log(mapa[filaActual][posAux.x + 1], noChocaDerecha);

                    // { console.log(posAux.fila, posAux.columna); }
                    switch (angulo) {
                        // arriba
                        case 0:
                            setPosAux({
                                fila: (posAux.fila > 0) && noChocaArriba
                                    ? (setSecuencia(prev => [...prev, 'arriba']), posAux.fila - 1)
                                    : posAux.fila,
                                columna: posAux.columna
                            });
                            break;

                        // derecha
                        case 90:
                            setPosAux({
                                fila: posAux.fila,
                                columna: posAux.columna < columnas - 1 && noChocaDerecha
                                    ? (setSecuencia(prev => [...prev, 'derecha']), posAux.columna + 1)
                                    : posAux.columna
                            });
                            break;

                        // abajo
                        case 180:
                            setPosAux({
                                fila: posAux.fila < filas - 1 && noChocaAbajo
                                    ? (setSecuencia(prev => [...prev, 'abajo']), posAux.fila + 1)
                                    : posAux.fila,
                                columna: posAux.columna
                            });
                            break;

                        // izquierda
                        case 270:
                            setPosAux({
                                fila: posAux.fila,
                                columna: posAux.columna > 0 && noChocaIzquierda
                                    ? (setSecuencia(prev => [...prev, 'izquierda']), posAux.columna - 1)
                                    : posAux.columna,
                            });
                            break;

                        default:
                            break;
                    }
                }} inhabilitar={ejecutando}
                    extraClass={` ${ejecutando ? 'inhabilitar' : ''}`} />

                {/* girar a la derecha */}
                <Button imgBg={girarImg} onClick={() => {
                    setSentidoAux(prev => prev + 90);
                    setSecuencia(prev => [...prev, 'vueltaDer']);
                }} extraClass={`zoom ${ejecutando ? 'inhabilitar' : ''}`}
                    inhabilitar={ejecutando} />

                {/* girar a la izquierda */}
                <Button imgBg={girarIzqImg} onClick={() => {
                    setSentidoAux(prev => prev - 90);
                    setSecuencia(prev => [...prev, 'vueltaIzq']);
                }} extraClass={`zoom ${ejecutando ? 'inhabilitar' : ''}`}
                    inhabilitar={ejecutando} />

                {/* para encender la luz */}
                <Button icon={FaLightbulb} onClick={() => {
                    setSecuencia(prev => [...prev, 'luz']);
                }} extraClass={`zoom boton-luz ${ejecutando ? 'inhabilitar' : ''}`}
                    inhabilitar={ejecutando} />

                <Button icon={ejecutando ? FaPause : FaPlay} onClick={jugar}
                    extraClass={`zoom boton-jugar ${ejecutando ? 'inhabilitar' : ''}`}
                    inhabilitar={ejecutando} />

            </div>
        </div>
    )
}

export default Panel