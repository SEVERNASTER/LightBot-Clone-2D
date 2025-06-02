
import './Comando.css'

function Comando({ imagen, icono: Icono }) {
    return (
        <div className='comando' style={{
            backgroundImage: imagen ? `url(${imagen})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>{Icono && <Icono size={35}/>}</div>
    )
}

export default Comando