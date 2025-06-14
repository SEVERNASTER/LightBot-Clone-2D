
import { useState, useEffect, useRef } from 'react'
import './Bot.css'

import botCaminando from '../assets/bot.gif';
import botStatic from '../assets/static-bot.png';
import { IoIosArrowUp } from "react-icons/io";
import frames from '../data/frames';


function Bot({ secuencia, indiceActual, ejecutando, sentido, reiniciar }) {

    const [botSentido, setBotSentido] = useState(0)
    const [debeVoltearse, setDebeVoltearse] = useState(false)

    const [frameIndex, setFrameIndex] = useState(0)
    const intervalRef = useRef(null)

    useEffect(() => {
        if (ejecutando && secuencia[indiceActual - 1] === 'avanzar') {
            intervalRef.current = setInterval(() => {
                setFrameIndex(prev => (prev + 1) % frames.length);
            }, 40);
        } else {
            clearInterval(intervalRef.current);
            // Si querés que se quede quieto en el primer frame:
            // setFrameIndex(0);
        }

        return () => clearInterval(intervalRef.current);
    }, [ejecutando, indiceActual]);

    useEffect(() => {
        if (botSentido === 270) {
            setDebeVoltearse(true)
        }

        if (botSentido === 90) {
            setDebeVoltearse(false)
        }
    }, [botSentido])


    useEffect(() => {
        const normalizado = ((sentido % 360) + 360) % 360;
        setBotSentido(normalizado)
    }, [sentido])


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

    return (
        <div className="bot-wrapper">
            {/* No se que honda con esta parte nomas se que si le pongo 
                        indiceActual - 1 da normal hahaha, de lo contrario se adelanta a la secuencia */}
            <img className={`bot ${debeVoltearse ? 'voltear' : ''}`}
                src={`${frames[frameIndex]}`}
                alt="bot"
            // style={{ transform: `rotate(${sentido}deg)` }}
            />

            <span className={`
                                bot-sentido
                                ${botDireccion(botSentido)}
                                ${reiniciar ? 'quitar-transition' : ''}
                            `}
                style={{
                    transform: `rotate(${sentido}deg)`
                }}
            ><IoIosArrowUp /></span>
        </div>
    )
}

export default Bot