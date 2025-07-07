
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
    reiniciar, comandoActual, puedeEditar, jugando, limiteDeComandos, comandosRestantes,
    setComandosRestantes, proc1, secuenciaProc1, setSecuenciaProc1, limiteDeComandosProc1,
    comandosRestantesProc1, setComandosRestantesProc1
}) {

    const [comandos, setComandos] = useState([])
    const [comandosProc1, setcomandosProc1] = useState([])
    const [contenedorActivo, setContenedorActivo] = useState('main')

    // useEffect(() => {
    //     console.log(comandosRestantes);

    // }, [comandosRestantes])


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

    useEffect(() => {
        if (secuenciaProc1.length !== 0) {
            const nuevosComandos = secuenciaProc1.map(actual => {
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

            setcomandosProc1(nuevosComandos);
        } else {
            setcomandosProc1([])
        }

    }, [secuenciaProc1]);


    const eliminarComando = (indiceAEliminar) => {
        setComandos(prev => prev.filter((_, indice) => indice !== indiceAEliminar))
        setSecuencia(prev => prev.filter((_, indice) => indice !== indiceAEliminar))
    }

    const crearPseudoComandos = () => {
        let pseudo = []
        let inicio = limiteDeComandos - comandosRestantes - 1
        for (let i = 0; i < limiteDeComandos; i++) {
            if (i > inicio) {
                pseudo.push(i + 1)
            }
        }
        return pseudo
    }

    const crearPseudoComandosProc1 = () => {
        let pseudo = []
        let inicio = limiteDeComandosProc1 - comandosRestantesProc1 - 1
        for (let i = 0; i < limiteDeComandosProc1; i++) {
            if (i > inicio) {
                pseudo.push(i + 1)
            }
        }
        return pseudo
    }

    const seleccionarSecuencia = () => {
        let res = []
        switch (contenedorActivo) {
            case 'main':
                res = secuencia
                break;
            case 'proc1':
                res = secuenciaProc1
                break;
            default:
                break;
        }
        return res;
    }

    const seleccionarSetSecuencia = () => {
        let res = () => { }
        switch (contenedorActivo) {
            case 'main':
                res = setSecuencia
                break;
            case 'proc1':
                res = setSecuenciaProc1
                break;
            default:
                break;
        }
        return res;
    }

    const seleccionarLimiteComandos = () => {
        let res = -1
        switch (contenedorActivo) {
            case 'main':
                res = limiteDeComandos
                break;
            case 'proc1':
                res = limiteDeComandosProc1
                break;
            default:
                break;
        }
        return res;
    }

    const seleccionarSetComandosRestantes = () => {
        let res = -1
        switch (contenedorActivo) {
            case 'main':
                res = setComandosRestantes
                break;
            case 'proc1':
                res = setComandosRestantesProc1
                break;
            default:
                break;
        }
        return res;
    }



    return (
        <div className={`panel-contenedor ${jugando ? 'mostrar' : ''}`}>

            <div className="panel-principal" >
                <div className="secuencia-contenedor">
                    <div className="secuencia-titulo">
                        <h3>SECUENCIA DE COMANDOS</h3>
                    </div>
                    <div className={`comandos-contenedor ${contenedorActivo === 'main' ? 'activar' : ''}`}
                        onClick={() => setContenedorActivo('main')}
                    >
                        {
                            comandos.length === 0 && !limiteDeComandos &&
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
                                    setComandosRestantes(limiteDeComandos)

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
                                    eliminarComando={() => {
                                        eliminarComando(indice)
                                        setComandosRestantes(prev => prev + 1)
                                    }}
                                    inhabilitar={ejecutando}
                                    puedeEditar={puedeEditar}
                                />
                            })
                        }

                        {
                            limiteDeComandos &&
                            crearPseudoComandos().map((actual, indice) => {
                                return <div key={indice} className='pseudo'>{actual}</div>
                            })
                        }
                    </div>
                </div>







                {
                    proc1 &&
                    <div className="proc1-contenedor">
                        <div className="proc1-titulo">
                            <h3>COMANDOS DE PROC1</h3>
                        </div>
                        <div className={`proc1-comandos ${contenedorActivo === 'proc1' ? 'activar' : ''}`}
                            onClick={() => setContenedorActivo('proc1')}
                        >

                            {
                                comandosProc1.length > 0 &&
                                <button className={`boton-limpiar ${!puedeEditar ? 'inhabilitar' : ''}`}
                                    title='Eliminar todos los comandos'
                                    onClick={() => {
                                        setcomandosProc1([])
                                        setSecuenciaProc1([])
                                        reiniciar()
                                        setComandosRestantesProc1(limiteDeComandosProc1)

                                    }}
                                    disabled={!puedeEditar}
                                >
                                    {puedeEditar && <BsFillTrash3Fill />}
                                    {!puedeEditar && <TbTrashOff />}
                                </button>
                            }

                            {comandosProc1.map((actual, indice) => {
                                return <Comando
                                    key={indice}
                                    imagen={actual.tipo === 'imagen' ? actual.imagen : ''}
                                    icono={actual.tipo === 'icono' ? actual.imagen : ''}
                                    resaltar={indice + 1 === comandoActual}
                                    eliminarComando={() => {
                                        eliminarComando(indice)
                                        // setComandosRestantes(prev => prev + 1)
                                    }}
                                    inhabilitar={ejecutando}
                                    puedeEditar={puedeEditar}
                                />
                            })}

                            {
                                limiteDeComandosProc1 &&
                                crearPseudoComandosProc1().map((actual, indice) => {
                                    return <div key={indice} className='pseudo'>{actual}</div>
                                })
                            }
                        </div>
                    </div>
                }
                <div className="comandos-disponibles">
                    <div className="comandos-titulo">
                        <h3>COMANDOS DISPONIBLES</h3>
                    </div>

                    <div className="botones-contenedor">
                        {/* para avanzar */}
                        <Button icon={FaArrowUp}
                            onClick={() =>
                                agregarComando(
                                    'avanzar',
                                    seleccionarSecuencia(),
                                    seleccionarSetSecuencia(),
                                    seleccionarLimiteComandos(),
                                    seleccionarSetComandosRestantes()
                                )
                            }
                            extraClass={` ${!puedeEditar ? 'inhabilitar' : ''}`}
                            inhabilitar={!puedeEditar}
                            label='Avanzar'
                            titulo='AVANZAR'
                        />

                        {/* para encender la luz */}
                        <Button icon={FaLightbulb}
                            onClick={() =>
                                agregarComando(
                                    'luz',
                                    seleccionarSecuencia(),
                                    seleccionarSetSecuencia(),
                                    seleccionarLimiteComandos(),
                                    seleccionarSetComandosRestantes()

                                )
                            }
                            extraClass={`zoom boton-luz ${!puedeEditar ? 'inhabilitar' : ''}`}
                            inhabilitar={!puedeEditar}
                            label='Encender Luz'
                            titulo='ENCENDER'
                        />

                        {/* girar a la izquierda */}
                        <Button icon={HiArrowUturnLeft}
                            onClick={() =>
                                agregarComando(
                                    'girarIzq',
                                    seleccionarSecuencia(),
                                    seleccionarSetSecuencia(),
                                    seleccionarLimiteComandos(),
                                    seleccionarSetComandosRestantes()

                                )
                            }
                            extraClass={`zoom ${!puedeEditar ? 'inhabilitar' : ''}`}
                            inhabilitar={!puedeEditar}
                            label='Girar Izquierda'
                            titulo='GIRAR IZQ'
                        />

                        {/* girar a la derecha */}
                        <Button icon={HiArrowUturnRight}
                            onClick={() =>
                                agregarComando(
                                    'girarDer',
                                    seleccionarSecuencia(),
                                    seleccionarSetSecuencia(),
                                    seleccionarLimiteComandos(),
                                    seleccionarSetComandosRestantes()

                                )
                            }
                            extraClass={`zoom ${!puedeEditar ? 'inhabilitar' : ''}`}

                            inhabilitar={!puedeEditar}
                            label='Girar Derecha'
                            titulo='GIRAR DER'
                        />

                        {/* para reiniciar la secuencia */}
                        {/* <Button icon={RiResetRightFill}
                            onClick={reiniciar}
                            extraClass={`zoom boton-reiniciar ${ejecutando ? 'inhabilitar' : ''}`}
                            inhabilitar={ejecutando}
                            label='Reiniciar'
                        /> */}

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