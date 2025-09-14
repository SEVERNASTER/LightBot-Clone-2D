
import { useState, useEffect, useRef } from 'react'
import './Bot.css'

import botCaminando from '../assets/bot.gif';
import botStatic from '../assets/static-bot.png';
import { IoIosArrowUp } from "react-icons/io";
import frames from '../data/frames';


function Bot({ secuencia, secuenciaProc1, indiceActual, indiceActualProc1, ejecutando, sentido, reiniciar, botAnimado,
    colisionArriba, colisionAbajo, colisionDerecha, colisionIzquierda, pos, filas,
    columnas
}) {

    const [botSentido, setBotSentido] = useState(0)
    const [debeVoltearse, setDebeVoltearse] = useState(false)
    const [quitarBotAnimacion, setQuitarBotAnimacion] = useState(false)
    const [valorColisionX, setValorColisionX] = useState(0)
    const [valorColisionY, setValorColisionY] = useState(0)



    const [frameIndex, setFrameIndex] = useState(0)
    const intervalRef = useRef(null)
    const preloadedImages = useRef([]);


    // para pre-cargar las imagenes de los frames


    useEffect(() => {
        preloadedImages.current = frames.map((src) => {
            const img = new Image();
            img.src = src;
            return img;
        });
    }, []);

    useEffect(() => {
        if (colisionArriba) {
            setValorColisionY(50)
        } else if (colisionAbajo) {
            setValorColisionY(-50)
        } else if (colisionDerecha) {
            setValorColisionX(-50)
        } else if (colisionIzquierda) {
            setValorColisionX(50)
        } else {
            setValorColisionX(0)
            setValorColisionY(0)
        }
    }, [colisionArriba, colisionAbajo, colisionDerecha, colisionIzquierda])




    /**en esta parte se ve el tiempo de animacion de los frames
     * ver si se anima solamente cuando esta avanzando 
     * o tambien cuando gira y tambien ver cuando se pausa
     * o tal vez no pausamos frames sino reducimos la velocidad
     */
    useEffect(() => {
        const esLuzOVuelta =
            ejecutando && (secuencia[indiceActual - 1]?.includes('vuelta') || secuencia[indiceActual - 1]?.includes('luz'))
            ||
            ejecutando && (secuenciaProc1[indiceActualProc1 - 1]?.includes('vuelta') || secuenciaProc1[indiceActualProc1 - 1]?.includes('luz'))

        const noEsLuzOVuelta =
            ejecutando && (secuencia[indiceActual - 1] !== 'luz')
            ||
            ejecutando && (secuenciaProc1[indiceActualProc1 - 1] !== 'luz')

        if (esLuzOVuelta) {
            intervalRef.current = setInterval(() => {
                setFrameIndex(prev => (prev + 1) % frames.length);
            }, 70);// 50

        } else if (noEsLuzOVuelta) {
            intervalRef.current = setInterval(() => {
                setFrameIndex(prev => (prev + 1) % frames.length);
            }, 25);// 15
        } else {
            clearInterval(intervalRef.current);
            // Si querés que se quede quieto en el primer frame:
            // setFrameIndex(0);
        }

        return () => clearInterval(intervalRef.current);
    }, [ejecutando, indiceActual, indiceActualProc1]);

    // para que gire izq o der
    useEffect(() => {
        if (botSentido === 270) {
            setDebeVoltearse(true)
        }

        if (botSentido === 90) {
            setDebeVoltearse(false)
        }
    }, [botSentido])


    // para normalizar el angulo y siempre este entre 0 y 270
    useEffect(() => {
        const normalizado = ((sentido % 360) + 360) % 360;
        setBotSentido(normalizado)
    }, [sentido])

    // para quitar la animacion si se pone en pausa la ejecucion

    // descomentar esta parte para quitar el transition cuando el usuario hace pausa
    // en medio de una secuencia

    // useEffect(() => {
    //     setQuitarBotAnimacion(true)
    //     setTimeout(() => {
    //         setQuitarBotAnimacion(false)
    //     }, 200);
    // }, [ejecutando])


    const botDireccion = (angulo) => {
        let res = ''
        switch (angulo) {
            case 0:
                res = 'arriba'
                break;
            case 90:
                res = 'derecha'
                break;
            case 180:
                res = 'abajo'
                break;
            case 270:
                res = 'izquierda'
                break;
            default:
                res = ''
                break;
        }
        return res
    }

    const tranformStyle = `translateY(${pos.fila * 100}%) translateX(${pos.columna * 100}%)`


    return (
        <div className={`bot-contenedor ${botAnimado ? 'animar' : ''} 
                ${colisionArriba ? 'colisionar-arr' : ''}
                ${colisionAbajo ? 'colisionar-abj' : ''}
                ${colisionDerecha ? 'colisionar-der' : ''}
                ${colisionIzquierda ? 'colisionar-izq' : ''}
                ${reiniciar ? 'quitar-transition' : ''}
                ${quitarBotAnimacion ? 'quitar-transition' : ''}
            `
        }
            id='bot'
            style={{
                transform: `${tranformStyle}`,
                width: `calc(100% / ${columnas})`,
                height: `calc(100% / ${filas})`
                // width: `${ancho}px`,
            }}
        >
            <div className="bot-wrapper">
                {/* No se que honda con esta parte nomas se que si le pongo 
                        indiceActual - 1 da normal hahaha, de lo contrario se adelanta a la secuencia */}
                <img
                    className={`bot ${debeVoltearse ? 'voltear' : ''}`}
                    src={preloadedImages.current[frameIndex]?.src || frames[0]}
                    alt="bot"
                // style={{ transform: `rotate(${sentido}deg)` }}
                />

                <span className={`
                        bot-sentido
                        ${botDireccion(botSentido)}
                        ${reiniciar ? 'quitar-transition' : ''}
                        ${colisionArriba ? 'colisionar-arr' : ''}
                        ${colisionAbajo ? 'colisionar-abj' : ''}
                        ${colisionDerecha ? 'colisionar-der' : ''}
                        ${colisionIzquierda ? 'colisionar-izq' : ''}
                    `}
                    style={{
                        transform: ` translateX(${valorColisionX}%) translateY(${valorColisionY}%) rotate(${sentido}deg)`
                    }}
                ><IoIosArrowUp /></span>
            </div>
        </div>
    )
}

export default Bot