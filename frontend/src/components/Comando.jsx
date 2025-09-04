
import { useState } from 'react';
import './Comando.css'
import { IoIosCloseCircleOutline } from "react-icons/io"
import { IoCloseCircle } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Comando({ imagen, icono: Icono, resaltar, eliminarComando, inhabilitar, puedeEditar, texto }) {
    
    const [eliminado, setEliminado] = useState(false)
    
    return (
        <div className={`
                comando 
                ${resaltar ? 'resaltar' : ''}
                ${inhabilitar ? 'inhabilitar' : ''}
                ${texto === 'P1' ? 'p1' : ''}
                ${texto === 'P2' ? 'p2' : ''}
                ${eliminado ? 'eliminar' : ''}
            `}

            style={{
                backgroundImage: imagen ? `url(${imagen})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
                {Icono && <Icono size={35} />}
                {puedeEditar &&
                <span
                    onClick={() => {
                        setEliminado(true)
                        setTimeout(() => {
                            eliminarComando()
                            setEliminado(false)
                        }, 200);
                    }}
                    className={`quitar-comando`}><IoClose title='Eliminar este comando' />
                </span>}
                {
                    texto && <h3>{texto}</h3>
                }
        </div>
    )
}

export default Comando