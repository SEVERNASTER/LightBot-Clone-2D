import { useState, useEffect } from 'react'
import './Maker.css'
import GrillaEditar from '../components/GrillaEditar';
import PanelEditar from '../components/PanelEditar';
import Button from '../components/FormButton';



function Maker({ creando, setCreando, mostrarToast , setHayNuevoNivel}) {

    const [filas, setFilas] = useState(5)
    const [columnas, setSolumnas] = useState(5)
    const [sentido, setSentido] = useState(0)
    const [debeVoltearse, setDebeVoltearse] = useState(false)
    const [titulo, setTitulo] = useState('')
    const [tamanioGrilla, setTamanioGrilla] = useState(5)//numero de filas y columnas
    const [mapa, setMapa] = useState(
        Array(tamanioGrilla)
            .fill(0)
            .map(() => Array(tamanioGrilla).fill(0))
    )


    useEffect(() => {
        console.log(mapa);
    }, [mapa])

    useEffect(() => {
        setMapa(
            Array(tamanioGrilla)
                .fill(0)
                .map(() => Array(tamanioGrilla).fill(0))
        )
    }, [tamanioGrilla])
    



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


    

    const reiniciarPantallaEdicion = () => {
        setTitulo('')
        setSentido(0)
        setDebeVoltearse(false)
        setTamanioGrilla(5)
        setMapa(
            Array(tamanioGrilla)
                .fill(0)
                .map(() => Array(tamanioGrilla).fill(0))
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

    const regresarMoviles = () => {
        setCreando(false)
    }



    return (
        <div className={`creador ${creando ? 'mostrar' : ''}`} >
            <GrillaEditar mapa={mapa} setMapa={setMapa} botSentido={sentido}
                direccionDesdeGrados={direccionDesdeGrados} debeVoltearse={debeVoltearse}
                setTitulo={setTitulo} titulo={titulo} tamanioGrilla={tamanioGrilla} setTamanioGrilla={setTamanioGrilla}
            />
            <PanelEditar mapa={mapa} sentido={sentido} setSentido={setSentido}
                direccionDesdeGrados={direccionDesdeGrados} debeVoltearse={debeVoltearse}
                setCreando={setCreando} reiniciarPantallaEdicion={reiniciarPantallaEdicion}
                titulo={titulo} mostrarToast={mostrarToast} setHayNuevoNivel={setHayNuevoNivel}
                tamanioGrilla={tamanioGrilla} setTamanioGrilla={setTamanioGrilla}
            />

            <div className="no-disponible">
                <h2>⚠️ El constructor de niveles aún no está disponible para móviles</h2>
                <Button texto='Regresar' onClick={regresarMoviles} />
            </div>

        </div>
    )
}


export default Maker