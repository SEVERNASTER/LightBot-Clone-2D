
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
    reiniciar, comandoActualMain, puedeEditar, jugando, limiteDeComandos,
    comandosRestantes, setComandosRestantes,
    proc1, secuenciaProc1, setSecuenciaProc1, limiteDeComandosProc1,
    comandosRestantesProc1, setComandosRestantesProc1, comandoActualProc1,

    proc2, secuenciaProc2, setSecuenciaProc2, limiteDeComandosProc2, comandosRestantesProc2,
    setComandosRestantesProc2, comandoActualProc2
}) {

    const [comandos, setComandos] = useState([])
    const [comandosProc1, setcomandosProc1] = useState([])
    const [comandosProc2, setcomandosProc2] = useState([])
    const [contenedorActivo, setContenedorActivo] = useState('main')

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
            case 'p1':
                res = {
                    imagen: 'P1',
                    tipo: 'texto'
                }
                break;

            case 'p2':
                res = {
                    imagen: 'P2',
                    tipo: 'texto'
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

                if (actual === 'p1') {
                    return agregarComandoImg(actual)
                }

                if (actual === 'p2') {
                    return agregarComandoImg(actual)
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

                if (actual === 'p1') {
                    return agregarComandoImg(actual)
                }

                if (actual === 'p2') {
                    return agregarComandoImg(actual)
                }

                return null;
            }).filter(Boolean)

            setcomandosProc1(nuevosComandos);
        } else {
            setcomandosProc1([])
        }

    }, [secuenciaProc1]);

    useEffect(() => {
        if (secuenciaProc2.length !== 0) {
            const nuevosComandos = secuenciaProc2.map(actual => {
                if (actual === 'avanzar') {
                    return agregarComandoImg(actual);
                }
                if (actual === 'vueltaDer' || actual === 'vueltaIzq') {
                    return agregarComandoImg(actual);
                }

                if (actual === 'luz') {
                    return agregarComandoImg(actual);
                }

                if (actual === 'p1') {
                    return agregarComandoImg(actual)
                }

                if (actual === 'p2') {
                    return agregarComandoImg(actual)
                }

                return null;
            }).filter(Boolean)

            setcomandosProc2(nuevosComandos);
        } else {
            setcomandosProc2([])
        }

    }, [secuenciaProc2]);


    const eliminarComando = (indiceAEliminar, setComandos, setSecuencia, setComandosRestantes) => {
        setComandos(prev => prev.filter((_, indice) => indice !== indiceAEliminar))
        setSecuencia(prev => prev.filter((_, indice) => indice !== indiceAEliminar))
        setComandosRestantes(prev => prev + 1)
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

    useEffect(() => {
        console.log('restantes ' + comandosRestantes, 'res proc1 ' + comandosRestantesProc1);

    }, [])


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

    const crearPseudoComandosProc2 = () => {
        let pseudo = []
        let inicio = limiteDeComandosProc2 - comandosRestantesProc2 - 1
        for (let i = 0; i < limiteDeComandosProc2; i++) {
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
            case 'proc2':
                res = secuenciaProc2
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
            case 'proc2':
                res = setSecuenciaProc2
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
            case 'proc2':
                res = limiteDeComandosProc2
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
            case 'proc2':
                res = setComandosRestantesProc2
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
                        <h3>SECUENCIA MAIN</h3>
                    </div>
                    <div className={`comandos-contenedor ${contenedorActivo === 'main' ? 'activar' : ''}`}
                        onClick={() => setContenedorActivo('main')}
                    >
                        {/* para cuado no hay comandos */}
                        {
                            comandos.length === 0 && limiteDeComandos === -1 &&
                            <h3 className='sin-comandos'>Aqui verás tus comandos</h3>
                        }

                        {/* para el boton de eliminar todos los comandos */}
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

                        {/* para mostrar los comandos en main */}
                        {
                            comandos.map((actual, indice) => {
                                return <Comando
                                    key={indice}
                                    imagen={actual.tipo === 'imagen' ? actual.imagen : ''}
                                    icono={actual.tipo === 'icono' ? actual.imagen : ''}
                                    texto={actual.tipo === 'texto' ? `${actual.imagen}` : ''}
                                    resaltar={indice + 1 === comandoActualMain}
                                    eliminarComando={() => {
                                        eliminarComando(indice, setComandos, setSecuencia, setComandosRestantes)
                                    }}
                                    inhabilitar={ejecutando}
                                    puedeEditar={puedeEditar}
                                />
                            })
                        }

                        {/* para los pseudocomandos */}
                        {
                            limiteDeComandos !== -1 &&
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

                            {/* para eliminar todos los comandos de proc1 */}
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

                            {/* para los comandos de proc1 */}
                            {comandosProc1.map((actual, indice) => {
                                return <Comando
                                    key={indice}
                                    imagen={actual.tipo === 'imagen' ? actual.imagen : ''}
                                    icono={actual.tipo === 'icono' ? actual.imagen : ''}
                                    texto={actual.tipo === 'texto' ? `${actual.imagen}` : ''}
                                    resaltar={indice + 1 === comandoActualProc1}
                                    eliminarComando={() => {
                                        eliminarComando(indice, setcomandosProc1, setSecuenciaProc1, setComandosRestantesProc1)
                                    }}
                                    inhabilitar={ejecutando}
                                    puedeEditar={puedeEditar}
                                />
                            })}

                            {/* para los pseudocomandos */}
                            {
                                limiteDeComandosProc1 !== -1 &&
                                crearPseudoComandosProc1().map((actual, indice) => {
                                    return <div key={indice} className='pseudo'>{actual}</div>
                                })
                            }
                        </div>
                    </div>
                }



                {
                    proc2 &&
                    <div className="proc1-contenedor">
                        <div className="proc1-titulo proc2-titulo">
                            <h3>COMANDOS DE PROC2</h3>
                        </div>
                        <div className={`proc1-comandos ${contenedorActivo === 'proc2' ? 'activar' : ''}`}
                            onClick={() => setContenedorActivo('proc2')}
                        >

                            {/* para eliminar todos los comandos de proc2 */}
                            {
                                comandosProc2.length > 0 &&
                                <button className={`boton-limpiar ${!puedeEditar ? 'inhabilitar' : ''}`}
                                    title='Eliminar todos los comandos'
                                    onClick={() => {
                                        setcomandosProc2([])
                                        setSecuenciaProc2([])
                                        reiniciar()
                                        setComandosRestantesProc2(limiteDeComandosProc2)

                                    }}
                                    disabled={!puedeEditar}
                                >
                                    {puedeEditar && <BsFillTrash3Fill />}
                                    {!puedeEditar && <TbTrashOff />}
                                </button>
                            }

                            {/* para los comandos de proc2 */}
                            {comandosProc2.map((actual, indice) => {
                                return <Comando
                                    key={indice}
                                    imagen={actual.tipo === 'imagen' ? actual.imagen : ''}
                                    icono={actual.tipo === 'icono' ? actual.imagen : ''}
                                    texto={actual.tipo === 'texto' ? `${actual.imagen}` : ''}
                                    resaltar={indice + 1 === comandoActualProc2}
                                    eliminarComando={() => {
                                        eliminarComando(indice, setcomandosProc2, setSecuenciaProc2, setComandosRestantesProc2)
                                    }}
                                    inhabilitar={ejecutando}
                                    puedeEditar={puedeEditar}
                                />
                            })}

                            {/* para los pseudocomandos */}
                            {
                                limiteDeComandosProc2 !== -1 &&
                                crearPseudoComandosProc2().map((actual, indice) => {
                                    return <div key={indice} className='pseudo'>{actual}</div>
                                })
                            }
                        </div>
                    </div>
                }



                <div className={`
                    comandos-disponibles
                    ${!proc1 && !proc2 ? 'diseno-simple' : ''}
                `}>
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

                        {
                            proc1 &&
                            <Button titulo={'P1'}
                                onClick={() =>
                                    agregarComando(
                                        'p1',
                                        seleccionarSecuencia(),
                                        seleccionarSetSecuencia(),
                                        seleccionarLimiteComandos(),
                                        seleccionarSetComandosRestantes()
                                    )
                                }
                                extraClass={`
                                    zoom 
                                    ${!puedeEditar ? 'inhabilitar' : ''} 
                                    p1-button`
                                }
                                label='Agregar P1'
                                inhabilitar={!puedeEditar}
                            />
                        }

                        {
                            proc2 &&
                            <Button titulo={'P2'}
                                onClick={() =>
                                    agregarComando(
                                        'p2',
                                        seleccionarSecuencia(),
                                        seleccionarSetSecuencia(),
                                        seleccionarLimiteComandos(),
                                        seleccionarSetComandosRestantes()
                                    )
                                }
                                extraClass={`
                                    zoom 
                                    ${!puedeEditar ? 'inhabilitar' : ''} 
                                    p2-button`
                                }
                                label='Agregar P2'
                                inhabilitar={!puedeEditar}
                            />
                        }

                        {/* para iniciar la secuencia */}
                        <Button icon={ejecutando ? FaPause : FaPlay}
                            onClick={jugar}
                            extraClass={`
                                zoom
                                boton-jugar 
                                ${ejecutando ? 'padding-icono' : ''}
                                ${!proc1 ? 'proc1' : ''}
                                ${proc1 && proc2 ? 'proc2' : ''}
                            `}
                            label='Ejecutar Comandos'
                        />



                    </div>
                </div>

            </div>
        </div>
    )
}

export default Panel