import { useEffect, useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion';
import './Celda.css'

function Celda({ fondo, colorFondo, todasEncendidas, esLuz, delay, esLaUltimaLuz,
    setTodasEncendidas }) {

    // if(esLaUltimaLuz && todasEncendidas) {
    //     setTimeout(() => {
    //         setTodasEncendidas(true)
    //     }, 200);
    // }

    // const [mostrarConfetti, setMostrarConfetti] = useState(false);

    // useEffect(() => {
    //     if (todasEncendidas && esLuz) {
    //         const timer = setTimeout(() => {
    //             setMostrarConfetti(true);
    //         }, delay * 500);

    //         return () => clearTimeout(timer);
    //     } else {
    //         setMostrarConfetti(false);
    //     }
    // }, [todasEncendidas, esLuz, delay]);

    return (
        <div className={`
                celda
                ${esLuz ? 'es-luz' : ''}
                ${todasEncendidas ? 'animar' : ''}
            `} style={{
                backgroundImage: `url(${fondo})`,
                background: `${colorFondo}`,
                '--delay': `${delay * 200}ms`,
            }}>
            {/* {
                mostrarConfetti &&
                <ConfettiExplosion
                    particleCount={50}
                    width={500}
                    colors={['#f43f5e', '#10b981', '#3b82f6', '#f59e0b']}
                />
            } */}
        </div>
    )
}

export default Celda