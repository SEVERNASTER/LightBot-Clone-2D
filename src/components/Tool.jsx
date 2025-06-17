import React from 'react'
import './Tool.css'

function Tool({icono}) {
    return (
        <div className='tool' style={{
            backgroundImage: `url(${icono})`
        }}>
            
        </div>
    )
}

export default Tool