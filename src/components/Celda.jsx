import './Celda.css'

function Celda({alto, ancho}) {
    // console.log(alto, ancho);
    
    return (
        <div className='celda' style={{'--alto':`${alto}px`, width: `${ancho}px`}}></div>
        
    )
}

export default Celda