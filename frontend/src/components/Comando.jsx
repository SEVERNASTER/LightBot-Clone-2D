
import './Comando.css'
import { IoIosCloseCircleOutline } from "react-icons/io"
import { IoCloseCircle } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Comando({ imagen, icono: Icono, resaltar, eliminarComando, inhabilitar, puedeEditar, texto }) {
    return (
        <div className={`
                comando 
                ${resaltar ? 'resaltar' : ''}
                ${inhabilitar ? 'inhabilitar' : ''}
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
                    onClick={eliminarComando}
                    className='quitar-comando'><IoClose title='Eliminar este comando' />
                </span>}
                {
                    texto && <h3>{texto}</h3>
                }
        </div>
    )
}

export default Comando