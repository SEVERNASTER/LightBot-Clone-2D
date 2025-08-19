import { useEffect, useState } from 'react'
import './MenuInicio.css'
import MiNivel from '../components/MiNivel';
import axios from 'axios';
import { IoClose } from "react-icons/io5";


function MenuInicio({ clasesExtra, setVistaMenu, setCreando, setMapa, setBot, setJugando,
    jugandoMiNivel, setJugandoMiNivel, mostrarToast, hayNuevoNivel, setHayNuevoNivel,
    setFilas, setColumnas, setLimiteDeComandos, setLimiteDeComandosProc1, setLimiteDeComandosProc2,
    setProc1, setProc2
}) {

    const [girar, setGirar] = useState(false)
    const [pidiendoDatos, setPidiendoDatos] = useState(false)
    const [mapasUsuario, setMapasUsuario] = useState([])
    const [noTieneNiveles, setNoTieneNiveles] = useState(false)

    const eliminarNivelInterfaz = (id) => {
        setMapasUsuario(prev => prev.filter(nivel => nivel.id !== id));
    };


    const handlePedirNiveles = async () => {
        setGirar(true)
        if (!hayNuevoNivel) return;

        setPidiendoDatos(true)

        try {

            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/getNiveles`,
                { withCredentials: true }
            );

            console.log('Niveles:', response.data.niveles);
            setMapasUsuario(response.data.niveles)
            setHayNuevoNivel(false)
        } catch (error) {
            console.error('Error al obtener niveles:', error.response?.data || error.message);
            setPidiendoDatos(false)
        }
        setPidiendoDatos(false)
    }

    useEffect(() => {
        if (!mapasUsuario || mapasUsuario.length === 0) {
            setNoTieneNiveles(true)
        } else {
            setNoTieneNiveles(false)
        }
    }, [mapasUsuario])



    return (
        <div className={`menu-inicio ${clasesExtra}
            ${jugandoMiNivel ? 'ocultar-para-mi-nivel' : ''}
        `}>
            <div className="inicio-flip-container">
                <div className="inicio-flip">
                    <div className={`contenedor-menu-inicio ${girar ? 'girar' : ''}`}>
                        <div className="contenedor-titulo">
                            <h1>CODEPILOT</h1>
                        </div>
                        <div className="contenedor-menu-animado">
                            <div className="contenedor-opciones">
                                <button className="opcion-menu jugar"
                                    onClick={() => setVistaMenu(prev => !prev)}
                                >Jugar</button>
                                {/* <button className="opcion-menu instrucciones">Instrucciones</button> */}
                                <button className="opcion-menu opciones"
                                    onClick={handlePedirNiveles}
                                >Mis Niveles</button>
                                <button className="opcion-menu crear"
                                    onClick={() => setCreando(true)}
                                >Crear Nivel</button>
                            </div>
                        </div>
                    </div>

                    <div className={`mis-niveles-container ${girar ? 'girar' : ''}`}>
                        <div className="mis-niveles-titulo">
                            <h2>Mis Niveles</h2>
                            <div className="mis-niveles-regresar"
                                onClick={() => setGirar(false)}
                            >
                                <IoClose size={35} />
                            </div>
                        </div>
                        <div className={`mis-niveles-wrapper
                                ${pidiendoDatos? 'cargando' : ''}
                            `}>

                            <div className={`mis-niveles 
                            ${pidiendoDatos ? 'cargando' : ''}
                            ${noTieneNiveles ? 'sin-niveles' : ''}
                        `}>
                                {/* <MiNivel titulo='Mi nivel' />
                            <MiNivel titulo='Mi nivel' />
                            <MiNivel titulo='Mi nivel' /> */}
                                {
                                    !pidiendoDatos && noTieneNiveles &&
                                    <h2 className='sin-niveles'>No tienes niveles creados</h2>
                                }
                                {
                                    // mandar aqui tambien el bot y el mapa y setearlos dentro de la 
                                    // funcion del componente MiNivel
                                    mapasUsuario.map((mapa, index) => {
                                        return <MiNivel titulo={mapa.titulo} key={index}
                                            setMapa={setMapa} setBot={setBot} setJugando={setJugando}
                                            mapa={mapa.mapa_data.mapa} bot={mapa.mapa_data.bot}
                                            mapaInfo={mapa.mapa_data}
                                            setJugandoMiNivel={setJugandoMiNivel} id={mapa.id}
                                            mostrarToast={mostrarToast}
                                            eliminarNivelInterfaz={() => eliminarNivelInterfaz(mapa.id)}
                                            setFilas={setFilas} setColumnas={setColumnas} setProc1={setProc1}
                                            setProc2={setProc2} setLimiteDeComandos={setLimiteDeComandos} 
                                            setLimiteDeComandosProc1={setLimiteDeComandosProc1}
                                            setLimiteDeComandosProc2={setLimiteDeComandosProc2}
                                        />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuInicio