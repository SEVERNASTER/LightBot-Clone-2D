import React from 'react';
import ModalResultado from './ModalResultado';
import './PantallaGanar.css';
import Confetti from "react-confetti";


export default function PantallaGanar({ onCerrar, todasEncendidas }) {
    return (
        <div className={`
            winner-modal-container
            ${todasEncendidas ? 'mostrar' : ''}
        `}>
            {
                todasEncendidas && <Confetti />
            }
            <div className={`
                winner-modal-animado
                ${todasEncendidas ? 'mostrar' : ''}
            `}>

                <div className="winner-modal">
                    <div className="header-winner">
                        <h2>🎉</h2>
                        <h3>¡NIVEL COMPLETADO!</h3>
                        <h4>¡Todas las luces están encendidas!</h4>
                    </div>

                    <div className="winner-info-wrapper">
                        <div className="winner-info">
                            <div className="winner-nivel-completado">
                                <h2>Nivel <span>7</span></h2>
                                <h2 className="estado-nivel-winner">
                                    COMPLETADO
                                </h2>
                            </div>

                            <div className="comandos-usados">
                                <h2>Comandos usados:</h2>
                                <h2>12/20</h2>
                            </div>
                        </div>

                    </div>

                    <div className="winner-buttons">
                        <button className="winner-btn next-winner">Siguiente Nivel</button>
                        <button className="winner-btn next-again">Reintentar</button>
                    </div>

                </div>
            </div>

        </div>
    );
}
