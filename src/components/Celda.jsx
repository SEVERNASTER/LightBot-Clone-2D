import './Celda.css'

function Celda({fondo, colorFondo}) {
    // console.log(alto, ancho);
    
    return (
        <div className='celda' style={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: 'cover',
            backgroundColor: `${colorFondo}`
        }}></div>
        
    )
}

export default Celda