import React from 'react'
import './PanelEditar.css'
import Tool from './Tool';
import bot from '../assets/static-bot.png';
import obstaculo from '../assets/muro2.jpg';
import { FaLightbulb } from "react-icons/fa6";
import { BiSolidSave } from "react-icons/bi";
import { IoClose } from "react-icons/io5";


function PanelEditar() {
    return (
        <div className='panel-editar' >
            <div className="herramientas">
                <div className="titulo-herramientas">
                    <h3>HERRAMIENTAS DE CONSTRUCCIÓN</h3>
                </div>
                <div className="herramientas-contenedor">
                    <Tool icono={bot}
                        clasesExtra='bot'
                        esReactIcon={false}
                    />

                    <Tool icono={obstaculo}
                        clasesExtra='muro'
                        esReactIcon={false}
                    />

                    <Tool icono={FaLightbulb}
                        clasesExtra='luz'
                        esReactIcon={true}
                        tamanio={50}
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