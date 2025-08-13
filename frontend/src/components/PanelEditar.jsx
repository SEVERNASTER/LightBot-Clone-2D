import { useEffect, useState } from 'react'
import './PanelEditar.css'
import Tool from './Tool';
import bot from '../assets/static-bot.png';
import obstaculo from '../assets/muro2.jpg';
import { FaLightbulb } from "react-icons/fa6";
import { BiSolidSave } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { IoArrowRedoSharp } from "react-icons/io5";
import { IoArrowUndoSharp } from "react-icons/io5";
import axios from 'axios';


function PanelEditar({ mapa, sentido, setSentido, direccionDesdeGrados, debeVoltearse,
    setCreando, reiniciarPantallaEdicion, titulo, mostrarToast, setHayNuevoNivel
}) {

    const [puedeArrastrarBot, setPuedeArrastrarBot] = useState(true)
    const [pidiendoDatos, setPidiendoDatos] = useState(false)
    const [tamanioGrilla, setTamanioGrilla] = useState(5)//numero de filas y columnas
    const [mecanica, setMecanica] = useState('normal')

    useEffect(() => {
        console.log(tamanioGrilla);
    }, [tamanioGrilla])

    useEffect(() => {
        console.log(mecanica);
    }, [mecanica])


    useEffect(() => {
        let puedeArrastrar = true
        mapa.map((fila) => {
            fila.map(celda => {
                if (celda === 4) {
                    puedeArrastrar = false
                }
            })
        })
        setPuedeArrastrarBot(puedeArrastrar)
    }, [mapa])

    // useEffect(() => {
    //     console.log(mapa);
    // }, [mapa])


    const handleGuardarMapa = async () => {
        if (!titulo || titulo?.trim() === '') return mostrarToast('El nivel necesita un nombre', 'alert');

        setPidiendoDatos(true)
        let pos = null;
        const mapaSanitizado = mapa.map((fila, i) =>
            fila.map((celda, j) => {
                if (celda === 4) {
                    pos = { fila: i, columna: j };
                    return 0;
                }
                return celda;
            })
        )

        console.log(mapaSanitizado);
        console.log(sentido);
        console.log(pos);

        try {
            const resultado = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/guardarMapa`,
                {
                    titulo,
                    mapaData: {
                        mapa: mapaSanitizado,
                        bot: {
                            pos,
                            direccionInicial: sentido
                        }
                    }
                },
                { withCredentials: true }
            )

            console.log(resultado.data.message);
            console.log(resultado.data.mapa);

            mostrarToast(resultado.data.message, 'check')
            setPidiendoDatos(false)
            setHayNuevoNivel(true)

            setTimeout(() => {
                reiniciarPantallaEdicion()
            }, 1000);
            setCreando(false)

        } catch (error) {
            console.log(error);
            mostrarToast('Algo salio mal intente mas tarde', 'error')
        }

        setPidiendoDatos(false)

    }



    return (
        <div className='panel-editar' >
            <div className="nivel-config">
                <div className="tamanio-grilla-container">
                    <h3>Tamaño de la Grilla</h3>
                    <div className="tamanios-opciones">
                        <button className={`
                            tamanio-opcion-btn
                            ${tamanioGrilla === 5 ? 'marcar' : ''}
                        `}
                            onClick={() => setTamanioGrilla(5)}
                        >5x5</button>

                        <button className={`
                            tamanio-opcion-btn
                            ${tamanioGrilla === 7 ? 'marcar' : ''}
                        `}
                            onClick={() => setTamanioGrilla(7)}
                        >7x7</button>

                        <button className={`
                            tamanio-opcion-btn
                            ${tamanioGrilla === 10 ? 'marcar' : ''}
                        `}
                            onClick={() => setTamanioGrilla(10)}
                        >10x10</button>
                    </div>
                </div>

                <div className="mecanicas-nivel">
                    <h3>Mecánicas del Nivel</h3>
                    <div className="mecanicas-container">
                        <button className={`
                            mecanica-label
                            ${mecanica === 'normal' ? 'marcar' : ''}
                        `}
                            onClick={() => setMecanica('normal')}
                        >Normal</button>
                        <button className={`
                            mecanica-label
                            ${mecanica === 'proc1' ? 'marcar' : ''}
                        `}
                            onClick={() => setMecanica('proc1')}
                        >Proc1</button>
                        <button className={`
                            mecanica-label
                            ${mecanica === 'proc1-proc2' ? 'marcar' : ''}
                        `}
                            onClick={() => setMecanica('proc1-proc2')}
                        >Proc1 + Proc2</button>
                        <button className={`
                            mecanica-label
                            ${mecanica === 'loop' ? 'marcar' : ''}
                        `}
                            onClick={() => setMecanica('loop')}
                        >Loop</button>
                        <button className={`
                            mecanica-label
                            ${mecanica === 'loop-proc1' ? 'marcar' : ''}
                        `}
                            onClick={() => setMecanica('loop-proc1')}
                        >Loop + Proc1</button>
                        <button className={`
                            mecanica-label
                            ${mecanica === 'loop-proc1-proc2' ? 'marcar' : ''}
                        `}
                            onClick={() => setMecanica('loop-proc1-proc2')}
                        >Loop + Proc1 + Proc2</button>
                    </div>
                    <div className="limite-comandos-crear">
                        <h3>Límite de Comandos</h3>
                        <div className="limite-comando limite-main">
                            <h4>Main:</h4>
                            <div className="limite-container">
                            <input type="number" min={1}/>
                            <label>
                                <input className='sin-limite' type="checkbox" />
                                Sin límite
                            </label>
                            </div>
                        </div>

                        <div className="limite-comando limite-proc1">
                            <h4>Proc1:</h4>
                            <div className="limite-container">
                            <input type="number" min={1}/>
                            <label>
                                <input className='sin-limite' type="checkbox" />
                                Sin límite
                            </label>
                            </div>
                        </div>

                        <div className="limite-comando limite-proc2">
                            <h4>Proc2:</h4>
                            <div className="limite-container">
                            <input type="number" min={1}/>
                            <label>
                                <input className='sin-limite' type="checkbox" />
                                Sin límite
                            </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="herramientas">
                <div className="titulo-herramientas">
                    <h3>HERRAMIENTAS DE CONSTRUCCIÓN</h3>
                </div>

                <div className="herramientas-contenedor">
                    <div className="bot-herramienta">
                        <Tool icono={bot}
                            clasesExtra={`bot 
                                ${!puedeArrastrarBot ? 'inhabilitar' : ''}
                                ${direccionDesdeGrados(sentido)}
                            `}
                            esReactIcon={false}
                            esBot={true}
                            puedeArrastrar={puedeArrastrarBot}
                            tipo={4}
                            sentido={sentido}
                            debeVoltearse={debeVoltearse}
                        />
                        <div className='girar-bot-herramienta'>
                            <div className={`girar-bot girar-bot-izq
                                ${!puedeArrastrarBot ? 'inhabilitar' : ''}
                            `}>
                                <IoArrowUndoSharp
                                    onClick={() => setSentido(prev => prev - 90)}
                                />
                            </div>
                            <div className={`girar-bot girar-bot-izq 
                                ${!puedeArrastrarBot ? 'inhabilitar' : ''}
                            `}>
                                <IoArrowRedoSharp
                                    onClick={() => setSentido(prev => prev + 90)}
                                />
                            </div>
                        </div>
                    </div>

                    <Tool icono={obstaculo}
                        clasesExtra='muro'
                        esReactIcon={false}
                        esBot={false}
                        tipo={1}
                    />

                    <Tool icono={FaLightbulb}
                        clasesExtra='luz'
                        esReactIcon={true}
                        tamanio={50}
                        esBot={false}
                        tipo={2}

                    />
                </div>
            </div>

            <div className="botones-editar">
                <button className={`boton-editar cancelar-editar 
                    ${pidiendoDatos ? 'cancelar-cargando' : ''}`
                }
                    onClick={() => {
                        setCreando(false)
                        setTimeout(() => {
                            reiniciarPantallaEdicion()
                        }, 1000);
                    }}
                >
                    <IoClose size={25} />CANCELAR
                </button>

                <button className={`boton-editar guardar-editar
                        ${pidiendoDatos ? 'cargando' : ''}
                    `}
                    onClick={handleGuardarMapa}
                >
                    {!pidiendoDatos && <BiSolidSave size={25} />}
                    {!pidiendoDatos && 'GUARDAR'}
                </button>
            </div>
        </div>
    )
}

export default PanelEditar