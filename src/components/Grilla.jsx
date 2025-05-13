
import './Grilla.css'

import Celda from './Celda';
import flechaImg from '../assets/flecha.png';


function Grilla() {

    const filas = 5
    const columnas = 5
    const alto = 550
    const ancho = 550
    let grilla = []

    for(let i = 0; i < filas; i++){
        for(let j = 0; j < columnas; j++){
            grilla = [...grilla, {x: i, y: j}]
        }
    }

    console.log(grilla);

    return (
        <div className="grilla" style={{'--alto': `${alto}px`, '--ancho': `${ancho}px`}}>
            {
                grilla.map(actual => {
                return <Celda key={`{${actual.x}, ${actual.y}}`} alto={alto / filas} ancho={ancho / columnas} />
            })
            }
            <div className="flecha-contenedor">
                <img src={flechaImg} alt="flecha" />
            </div>
        </div>
    )


    

}

export default Grilla