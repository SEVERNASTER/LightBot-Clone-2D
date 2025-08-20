import './Celda.css'

function Celda({fondo, colorFondo, todasEncendidas, esLuz, numCelda}) {
    // console.log(alto, ancho);
    
    return (
        <div className={`
                celda
                ${esLuz ? 'es-luz' : ''}
                ${todasEncendidas ? 'animar' : ''}
            `} style={{
            backgroundImage: `url(${fondo})`,
            background: `${colorFondo}`,
            '--num-celda': `${numCelda * 100}ms`
        }}></div>
        
    )
}

export default Celda