import './Celda.css'

function Celda({alto, ancho}) {
    
    return (
        <div className='celda' style={{'--alto':`${alto}px`, '--ancho': `${ancho}px`}}></div>
        
    )
}

export default Celda