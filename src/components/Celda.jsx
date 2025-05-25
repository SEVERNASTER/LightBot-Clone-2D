import './Celda.css'

function Celda({fondo}) {
    // console.log(alto, ancho);
    
    return (
        <div className='celda' style={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: 'cover'
        }}></div>
        
    )
}

export default Celda