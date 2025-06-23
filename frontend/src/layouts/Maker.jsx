import { useState, useEffect } from 'react'
import './Maker.css'
import GrillaEditar from '../components/GrillaEditar';
import PanelEditar from '../components/PanelEditar';


function Maker({ creando, setCreando }) {

    const [filas, setFilas] = useState(5)
    const [columnas, setSolumnas] = useState(5)
    const [sentido, setSentido] = useState(0)
    const [debeVoltearse, setDebeVoltearse] = useState(false)


    const direccionDesdeGrados = (grados) => {
        const normalizado = ((grados % 360) + 360) % 360;

        switch (normalizado) {
            case 0:
                return 'arriba';
            case 90:
                return 'derecha';
            case 180:
                return 'abajo';
            case 270:
                return 'izquierda';
            default:
                return 'desconocido';
        }
    }


    const [mapa, setMapa] = useState(
        Array(filas)
            .fill(0)
            .map(() => Array(columnas).fill(0))
    )

    const reiniciarPantallaEdicion = () => {
        setSentido(0)
        setDebeVoltearse(false)
        setMapa(
            Array(filas)
            .fill(0)
            .map(() => Array(columnas).fill(0))
        )
    }

    

    useEffect(() => {
        const normalizado = ((sentido % 360) + 360) % 360;
        if (normalizado !== sentido) {
            setSentido(normalizado)
        }
    }, [sentido])


    useEffect(() => {
        if (sentido === 270) {
            setDebeVoltearse(true)
        }

        if (sentido === 90) {
            setDebeVoltearse(false)
        }
    }, [sentido])

    // useEffect(() => {
    //     console.log(sentido);
    // }, [sentido])

    // useEffect(() => {
    //     console.log(debeVoltearse);
    // }, [debeVoltearse])



    return (
        <div className={`creador ${creando ? 'mostrar' : ''}`} >
            <GrillaEditar mapa={mapa} setMapa={setMapa} botSentido={sentido}
                direccionDesdeGrados={direccionDesdeGrados} debeVoltearse={debeVoltearse}
            />
            <PanelEditar mapa={mapa} sentido={sentido} setSentido={setSentido}
                direccionDesdeGrados={direccionDesdeGrados} debeVoltearse={debeVoltearse}
                setCreando={setCreando} reiniciarPantallaEdicion={reiniciarPantallaEdicion}
            />
        </div>
    )
}


export default Maker