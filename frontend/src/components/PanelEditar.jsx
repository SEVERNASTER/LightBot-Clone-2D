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
    setCreando, reiniciarPantallaEdicion, titulo, mostrarToast, setHayNuevoNivel,
    tamanioGrilla, setTamanioGrilla
}) {

    const [puedeArrastrarBot, setPuedeArrastrarBot] = useState(true)
    const [pidiendoDatos, setPidiendoDatos] = useState(false)
    const [mecanica, setMecanica] = useState('normal')
    const [limiteMain, setlimiteMain] = useState(12)
    const [limiteProc1, setLimiteProc1] = useState(8)
    const [limiteProc2, setLimiteProc2] = useState(8)
    const [mecanicaInfo, setMecanicaInfo] = useState({})
    const [sinLimites, setSinLimites] = useState({
        main: false,
        proc1: false,
        proc2: false
    })

    useEffect(() => {
        switch (mecanica) {
            case 'normal':
                setMecanicaInfo({
                    proc1: false,
                    proc2: false,
                    limiteDeComandos: limiteMain,
                    limiteDeComandosProc1: 0,
                    limiteDeComandosProc2: 0
                })
                document.getElementById('sinLimiteProc1').checked = false
                document.getElementById('sinLimiteProc2').checked = false
                sinLimites.proc1 = false
                sinLimites.proc2 = false
                break;
            case 'proc1':
                setMecanicaInfo({
                    proc1: true,
                    proc2: false,
                    limiteDeComandos: limiteMain,
                    limiteDeComandosProc1: limiteProc1,
                    limiteDeComandosProc2: 0
                })
                document.getElementById('sinLimiteProc2').checked = false
                sinLimites.proc2 = false
                break;
            case 'proc1-proc2':
                setMecanicaInfo({
                    proc1: true,
                    proc2: true,
                    limiteDeComandos: limiteMain,
                    limiteDeComandosProc1: limiteProc1,
                    limiteDeComandosProc2: limiteProc2
                })
                break;
            case 'loop-proc1':
                setMecanicaInfo({
                    proc1: true,
                    proc2: false,
                    // 1 uno directo y manualmente desde aqui porque el usuario puede cambiar
                    // el valor desde las devtools, aunque no se pudo cuando lo intentamos 
                    // pero para prevenir errores
                    limiteDeComandos: 1,
                    limiteDeComandosProc1: limiteProc1,
                    limiteDeComandosProc2: 0
                })
                document.getElementById('sinLimiteMain').checked = false
                sinLimites.main = false
                document.getElementById('sinLimiteProc2').checked = false
                sinLimites.proc2 = false
                break;
            case 'loop-proc1-proc2':
                setMecanicaInfo({
                    proc1: true,
                    proc2: true,
                    limiteDeComandos: 1,
                    limiteDeComandosProc1: limiteProc1,
                    limiteDeComandosProc2: limiteProc2
                })
                document.getElementById('sinLimiteMain').checked = false
                sinLimites.main = false
                break;

            default:
                break;
        }
    }, [limiteMain, limiteProc1, limiteProc2, mecanica])


    // useEffect(() => {
    //     console.log(mecanicaInfo);
    // }, [mecanicaInfo])

    // useEffect(() => {
    //     console.log(tamanioGrilla);
    // }, [tamanioGrilla])

    // useEffect(() => {
    //     console.log(mecanica);
    // }, [mecanica])


    // useEffect(() => {
    //     console.log(limiteMain);
    // }, [limiteMain])

    // useEffect(() => {
    //     console.log(limiteProc1);
    // }, [limiteProc1])

    // useEffect(() => {
    //     console.log(limiteProc2);
    // }, [limiteProc2])


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
        if (puedeArrastrarBot) return mostrarToast('El nivel necesita un bot para poder jugar', 'alert');
        if (!tieneLuz) return mostrarToast('¡Falta la luz! Coloca al menos una', 'alert');

        setPidiendoDatos(true)
        let pos = null;

        // para sacar al bot (4) del mapa y dejarlo como espacio vacio/libre
        const mapaSanitizado = mapa.map((fila, i) =>
            fila.map((celda, j) => {
                if (celda === 4) {
                    pos = { fila: i, columna: j };
                    return 0;
                }
                return celda;
            })
        )

        // console.log(mapaSanitizado);
        // console.log(sentido);
        // console.log(pos);

        const infoFinal = {
            titulo,
            mapaData: {
                mapa: mapaSanitizado,
                bot: {
                    pos,
                    direccionInicial: sentido
                },
                filas: tamanioGrilla,
                columnas: tamanioGrilla,
                ...mecanicaInfo
            }
        }

        console.log(infoFinal);


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
                        },
                        filas: tamanioGrilla,
                        columnas: tamanioGrilla,
                        ...mecanicaInfo
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


    const tieneLuz = () => {
        return mapa.some(fila => fila.some(celda => celda === 2))
    }

    const handleNumberChange = (setter, defaultValue = 0) => (e) => {
        const value = e.target.value;
        const num = parseInt(value, 10);

        setter(isNaN(num) ? defaultValue : num);
    };


    return (
        <div className='panel-editar' >
            <div className="nivel-config">
                {/* para el tamanio de la grilla */}
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
                            ${tamanioGrilla === 6 ? 'marcar' : ''}
                        `}
                            onClick={() => setTamanioGrilla(6)}
                        >6x6</button>

                        <button className={`
                            tamanio-opcion-btn
                            ${tamanioGrilla === 7 ? 'marcar' : ''}
                        `}
                            onClick={() => setTamanioGrilla(7)}
                        >7x7</button>
                    </div>
                </div>

                {/* para las mecanicas del nivel */}
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

                    {/* para el limite de comandos */}
                    <div className="limite-comandos-crear">
                        <h3>Límite de Comandos</h3>

                        <div className={`limite-comando limite-main
                            ${mecanica === 'normal' ? 'habilitar' : ''}
                        `}>

                            <h4>Main:</h4>
                            <div className={`limite-container
                                    ${sinLimites.main ? 'inhabilitar' : ''}
                                `}
                            >
                                <input type="number" min={1} disabled={mecanica.includes('loop')}
                                    step={1} required
                                    value={mecanica.includes('loop') ? 1 : limiteMain}
                                    onChange={handleNumberChange(setlimiteMain, 12)}
                                />
                                <label className={`sin-limites-main ${mecanica.includes('loop') ? 'inhabilitar' : ''}`}>
                                    <input id='sinLimiteMain' className='sin-limite' type="checkbox" required
                                        disabled={mecanica.includes('loop')}
                                        onClick={(e) => {
                                            setMecanicaInfo(prev => ({
                                                ...prev,
                                                limiteDeComandos: e.target.checked ? -1 : limiteMain
                                            }))

                                            setSinLimites(prev => ({
                                                ...prev,
                                                main: e.target.checked ? true : false
                                            }))
                                        }}
                                    />
                                    Sin límite
                                </label>
                            </div>
                        </div>

                        <div className={`limite-comando limite-proc1
                            ${mecanica.includes('proc1') ? 'habilitar' : ''}
                        `}>

                            <h4>Proc1:</h4>
                            <div className={`limite-container
                                ${sinLimites.proc1 ? 'inhabilitar' : ''}
                            `}>
                                <input type="number" min={1}
                                    step={1}
                                    value={limiteProc1}
                                    onChange={handleNumberChange(setLimiteProc1, 8)}
                                />
                                <label>
                                    <input id='sinLimiteProc1' className='sin-limite' type="checkbox" required
                                        onClick={(e) => {
                                            setMecanicaInfo(prev => ({
                                                ...prev,
                                                limiteDeComandosProc1: e.target.checked ? -1 : limiteProc1
                                            }))

                                            setSinLimites(prev => ({
                                                ...prev,
                                                proc1: e.target.checked ? true : false
                                            }))
                                        }}
                                    />
                                    Sin límite
                                </label>
                            </div>
                        </div>

                        <div className={`limite-comando limite-proc2
                            ${mecanica.includes('proc2') ? 'habilitar' : ''}
                        `}>

                            <h4>Proc2:</h4>
                            <div className={`limite-container
                                ${sinLimites.proc2 ? 'inhabilitar' : ''}
                            `}>
                                <input type="number" min={1}
                                    step={1}
                                    value={limiteProc2}
                                    onChange={handleNumberChange(setLimiteProc2, 8)}
                                />
                                <label>
                                    <input id='sinLimiteProc2' className='sin-limite' type="checkbox" required
                                        onClick={(e) => {

                                            setMecanicaInfo(prev => ({
                                                ...prev,
                                                limiteDeComandosProc2: e.target.checked ? -1 : limiteProc2
                                            }))

                                            setSinLimites(prev => ({
                                                ...prev,
                                                proc2: e.target.checked ? true : false
                                            }))
                                        }}
                                    />
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
                            document.querySelectorAll('.sin-limite').forEach(checkbox => checkbox.checked = false);

                            reiniciarPantallaEdicion()
                            setMecanica('normal')
                            setlimiteMain(12)
                            setLimiteProc1(8)
                            setLimiteProc2(8)
                            setMecanicaInfo({})
                            setSinLimites({
                                main: false,
                                proc1: false,
                                proc2: false
                            })

                        }, 1000);
                    }}
                >
                    <IoClose size={25} />CANCELAR
                </button>

                <button className={`boton-editar guardar-editar
                        ${pidiendoDatos ? 'cargando' : ''}
                    `}
                    onClick={handleGuardarMapa}
                // onClick={() => {
                //     console.log(tieneLuz() ? 'tiene luz' : 'no tiene luz');

                // }}
                >
                    {!pidiendoDatos && <BiSolidSave size={25} />}
                    {!pidiendoDatos && 'GUARDAR'}
                </button>
            </div>
        </div>
    )
}

export default PanelEditar