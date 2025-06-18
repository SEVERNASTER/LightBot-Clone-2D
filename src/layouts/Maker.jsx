import { useState, useEffect } from 'react'
import './Maker.css'
import GrillaEditar from '../components/GrillaEditar';
import PanelEditar from '../components/PanelEditar';

function Maker({ creando }) {

    const [filas, setFilas] = useState(5)
    const [columnas, setSolumnas] = useState(5)
    

    const [mapa, setMapa] = useState(
        Array(filas)
            .fill(0)
            .map(() => Array(columnas).fill(0))
    )

    return (
        <div className={`creador ${creando ? 'mostrar' : ''}`} >
            <GrillaEditar mapa={mapa} setMapa={setMapa} />
            <PanelEditar mapa={mapa}  />
        </div>
    )
}


export default Maker