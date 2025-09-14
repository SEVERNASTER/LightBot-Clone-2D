import { useState, useEffect } from 'react';
import ModalResultado from './ModalResultado';
import './PantallaGanar.css';
import Confetti from "react-confetti";


export default function PantallaGanar({ onCerrar, todasEncendidas, setTodasEncendidas, handleSalir,
    setDebeReiniciar
}) {

    const [mostrarModal, setMostrarModal] = useState(false);

    useEffect(() => {
        if (todasEncendidas) {
            const timer = setTimeout(() => {
                setMostrarModal(true);
            }, 10);

            return () => clearTimeout(timer);
        } else {
            setMostrarModal(false);
        }
    }, [todasEncendidas]);

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
                ${mostrarModal ? 'mostrar' : ''}
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
                                📊 ESTADÍSTICAS
                            </div>

                            <div className="comandos-usados">
                                <h2>⏱️ Tiempo:</h2>
                                <h2>-</h2>
                            </div>
                            <div className="comandos-usados">
                                <h2>🔧 Comandos:</h2>
                                <h2>-</h2>
                            </div>
                            <div className="comandos-usados">
                                <h2>⭐ Puntuación:</h2>
                                <h2 className='total-puntos'>100 pts</h2>
                            </div>
                            
                        </div>

                    </div>

                    <div className="winner-buttons">
                        <button className="winner-btn next-winner"
                            onClick={() => {
                                handleSalir()
                                setTodasEncendidas(false)
                            }}
                        >Siguiente Nivel</button>
                        <button className="winner-btn next-again"
                            onClick={() => setDebeReiniciar(true)}
                        >Reintentar</button>
                    </div>

                </div>
            </div>

        </div>
    );
}
