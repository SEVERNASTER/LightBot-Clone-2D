
import './Comando.css'
import { IoIosCloseCircleOutline } from "react-icons/io"
import { IoCloseCircle } from "react-icons/io5";

function Comando({ imagen, icono: Icono, resaltar }) {
    return (
        <div className={`comando ${resaltar ? 'resaltar' : ''}`}
            style={{
                backgroundImage: imagen ? `url(${imagen})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>{Icono && <Icono size={35} />}
            {/* <span className='quitar-comando'><IoIosCloseCircleOutline /></span> */}
        </div>
    )
}

export default Comando