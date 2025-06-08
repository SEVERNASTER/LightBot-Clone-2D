
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
import { BiReset } from "react-icons/bi";
import { RiResetRightFill } from "react-icons/ri";


function Panel({ ejecutando, jugar, setSecuencia, secuencia, avanzar, girarDer, girarIzq,
    reiniciar, comandoActual
}) {

    const [comandos, setComandos] = useState([])

    const agregarComando = (comando) => {
        let res = {};
        switch (comando) {
            case 'avanzar':
                res = {
                    imagen: avanzarImg,
                    tipo: 'imagen'
                }
                break;
            case 'vueltaDer':
                res = {
                    imagen: girarImg,
                    tipo: 'imagen'
                }
                break;
            case 'vueltaIzq':
                res = {
                    imagen: girarIzqImg,
                    tipo: 'imagen'
                }
                break;
            case 'luz':
                res = {
                    imagen: FaLightbulb,
                    tipo: 'icono'
                }
                break;
            default:
                break;
        }
        return res
    }

    useEffect(() => {
        if (secuencia.length !== 0) {
            const nuevosComandos = secuencia.map(actual => {
                if (actual === 'avanzar') {
                    return agregarComando(actual);
                }
                if (actual === 'vueltaDer' || actual === 'vueltaIzq') {
                    return agregarComando(actual);
                }

                if (actual === 'luz') {
                    return agregarComando(actual);
                }
                return null;
            }).filter(Boolean)

            setComandos(nuevosComandos);
        }

    }, [secuencia]);


    const eliminarComando = (indiceAEliminar) => {
        setComandos(prev => prev.filter((_, indice) => indice !== indiceAEliminar))
        setSecuencia(prev => prev.filter((_, indice) => indice !== indiceAEliminar))
    }



    return (
        <div className="panel-principal" >

            <div className="comandos-contenedor" >
                {
                    comandos.map((actual, indice) => {
                        return <Comando
                            key={indice}
                            imagen={actual.tipo === 'imagen' ? actual.imagen : ''}
                            icono={actual.tipo === 'icono' ? actual.imagen : ''}
                            resaltar={indice + 1 === comandoActual}
                            eliminarComando={() => eliminarComando(indice)}
                            inhabilitar={ejecutando}
                        />
                    })
                }
            </div>

            <div className="botones-contenedor">
                <Button imgBg={avanzarImg} onClick={avanzar} inhabilitar={ejecutando}
                    extraClass={` ${ejecutando ? 'inhabilitar' : ''}`} />

                {/* girar a la derecha */}
                <Button imgBg={girarImg} onClick={girarDer} extraClass={`zoom ${ejecutando ? 'inhabilitar' : ''}`}
                    inhabilitar={ejecutando} />

                {/* girar a la izquierda */}
                <Button imgBg={girarIzqImg} onClick={girarIzq} extraClass={`zoom ${ejecutando ? 'inhabilitar' : ''}`}
                    inhabilitar={ejecutando} />

                {/* para encender la luz */}
                <Button icon={FaLightbulb} onClick={() => {
                    setSecuencia(prev => [...prev, 'luz']);
                }} extraClass={`zoom boton-luz ${ejecutando ? 'inhabilitar' : ''}`}
                    inhabilitar={ejecutando} />

                {/* para iniciar la secuencia */}
                <Button icon={ejecutando ? FaPause : FaPlay} onClick={jugar}
                    extraClass={`zoom boton-jugar ${ejecutando ? 'padding-icono' : ''}`}
                />

                <Button icon={RiResetRightFill} onClick={reiniciar}
                    extraClass={`zoom boton-reiniciar ${ejecutando ? 'inhabilitar' : ''}`}
                    inhabilitar={ejecutando}
                />

            </div>
        </div>
    )
}

export default Panel