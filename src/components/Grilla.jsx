
import './Grilla.css'

import Celda from './Celda';
import flechaImg from '../assets/flecha.png';



function Grilla({ pos, sentido }) {

    const filas = 5
    const columnas = 5
    const alto = 550
    const ancho = 550

    let grilla = []

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            grilla = [...grilla, { x: i, y: j }]
        }
    }

    // console.log(grilla);

    const tranformStyle = `translateX(${pos.x * 100}%) translateY(${pos.y * 100}%)`

    return (
        <div className="grilla" style={{
            '--alto': `${alto}px`,
            '--ancho': `${ancho}px`
        }}>
            {
                grilla.map(actual => {
                    return <Celda key={`{${actual.x}, ${actual.y}}`} alto={alto / filas} ancho={ancho / columnas} />
                })
            }
            {/* <Bot estilosExtra={{tranform: `${tranformStyle}`}}  alto={alto / filas} ancho={ancho / columnas} /> */}
            <div className="bot-contenedor" style={{
                '--alto': `${alto}px`, 
                '--ancho': `${ancho}px`,
                transform: `${tranformStyle}`
            }}>
                <img src={flechaImg} alt="bot" style={{transform: `rotate(${sentido}deg)`}} />
            </div>
        </div>
    )

}

export default Grilla