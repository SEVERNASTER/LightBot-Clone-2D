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


function PanelEditar({ mapa, sentido, setSentido, direccionDesdeGrados, debeVoltearse }) {

    const [puedeArrastrarBot, setPuedeArrastrarBot] = useState(true)

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
    

    return (
        <div className='panel-editar' >
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
                <button className="boton-editar guardar-editar"><BiSolidSave size={25} /> CANCELAR</button>
                <button className="boton-editar cancelar-editar"><IoClose size={25} /> GUARDAR</button>
            </div>
        </div>
    )
}

export default PanelEditar