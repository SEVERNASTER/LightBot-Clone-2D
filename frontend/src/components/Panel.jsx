
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
import { BsFillTrash3Fill } from "react-icons/bs";
import { TbTrashOff } from "react-icons/tb";
import { FaArrowUp } from "react-icons/fa";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { HiArrowUturnRight } from "react-icons/hi2";


function Panel({ ejecutando, jugar, setSecuencia, secuencia, agregarComando,
    reiniciar, comandoActual, puedeEditar, jugando
}) {

    const [comandos, setComandos] = useState([])

    const agregarComandoImg = (comando) => {
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
                    return agregarComandoImg(actual);
                }
                if (actual === 'vueltaDer' || actual === 'vueltaIzq') {
                    return agregarComandoImg(actual);
                }

                if (actual === 'luz') {
                    return agregarComandoImg(actual);
                }
                return null;
            }).filter(Boolean)

            setComandos(nuevosComandos);
        } else {
            setComandos([])
        }

    }, [secuencia]);


    const eliminarComando = (indiceAEliminar) => {
        setComandos(prev => prev.filter((_, indice) => indice !== indiceAEliminar))
        setSecuencia(prev => prev.filter((_, indice) => indice !== indiceAEliminar))
    }



    return (
        <div className={`panel-contenedor ${jugando ? 'mostrar' : ''}`}>

            <div className="panel-principal" >
                <div className="secuencia-contenedor">
                    <div className="secuencia-titulo">
                        <h3>SECUENCIA DE COMANDOS</h3>
                    </div>
                    <div className="comandos-contenedor" >
                        {
                            comandos.length === 0 &&
                            <h3 className='sin-comandos'>Aqui verás tus comandos</h3>
                        }
                        {
                            comandos.length > 0 &&
                            <button className={`boton-limpiar ${!puedeEditar ? 'inhabilitar' : ''}`}
                                title='Eliminar todos los comandos'
                                onClick={() => {
                                    setComandos([])
                                    setSecuencia([])
                                    reiniciar()
                                }}
                                disabled={!puedeEditar}
                            >
                                {puedeEditar && <BsFillTrash3Fill />}
                                {!puedeEditar && <TbTrashOff />}
                            </button>
                        }
                        {
                            comandos.map((actual, indice) => {
                                return <Comando
                                    key={indice}
                                    imagen={actual.tipo === 'imagen' ? actual.imagen : ''}
                                    icono={actual.tipo === 'icono' ? actual.imagen : ''}
                                    resaltar={indice + 1 === comandoActual}
                                    eliminarComando={() => eliminarComando(indice)}
                                    inhabilitar={ejecutando}
                                    puedeEditar={puedeEditar}
                                />
                            })
                        }
                    </div>
                </div>

                <div className="comandos-disponibles">
                    <div className="comandos-titulo">
                        <h3>COMANDOS DISPONIBLES</h3>
                    </div>

                    <div className="botones-contenedor">
                        {/* para avanzar */}
                        <Button icon={FaArrowUp}
                            onClick={() => agregarComando('avanzar')}
                            extraClass={` ${!puedeEditar ? 'inhabilitar' : ''}`}
                            inhabilitar={!puedeEditar}
                            label='Avanzar'
                            titulo='AVANZAR'
                        />

                        {/* para encender la luz */}
                        <Button icon={FaLightbulb}
                            onClick={() => agregarComando('luz')}
                            extraClass={`zoom boton-luz ${!puedeEditar ? 'inhabilitar' : ''}`}
                            inhabilitar={!puedeEditar}
                            label='Encender Luz'
                            titulo='ENCENDER'
                        />

                        {/* girar a la izquierda */}
                        <Button icon={HiArrowUturnLeft}
                            onClick={() => agregarComando('girarIzq')}
                            extraClass={`zoom ${!puedeEditar ? 'inhabilitar' : ''}`}
                            inhabilitar={!puedeEditar}
                            label='Girar Izquierda'
                            titulo='GIRAR IZQ'
                        />

                        {/* girar a la derecha */}
                        <Button icon={HiArrowUturnRight}
                            onClick={() => agregarComando('girarDer')}
                            extraClass={`zoom ${!puedeEditar ? 'inhabilitar' : ''}`}

                            inhabilitar={!puedeEditar}
                            label='Girar Derecha'
                            titulo='GIRAR DER'
                        />

                        {/* para reiniciar la secuencia */}
                        <Button icon={RiResetRightFill}
                            onClick={reiniciar}
                            extraClass={`zoom boton-reiniciar ${ejecutando ? 'inhabilitar' : ''}`}
                            inhabilitar={ejecutando}
                            label='Reiniciar'
                        />

                        {/* para iniciar la secuencia */}
                        <Button icon={ejecutando ? FaPause : FaPlay}
                            onClick={jugar}
                            extraClass={`zoom boton-jugar ${ejecutando ? 'padding-icono' : ''}`}
                            label='Ejecutar Comandos'
                        />



                    </div>
                </div>

            </div>
        </div>
    )
}

export default Panel