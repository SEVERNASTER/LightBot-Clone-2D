
import './Comando.css'

function Comando({ imagen }) {
    return (
        <div className='comando' style={{
            backgroundImage: imagen ? `url(${imagen})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}></div>
    )
}

export default Comando