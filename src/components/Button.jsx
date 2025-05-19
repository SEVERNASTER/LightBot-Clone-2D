
import React from 'react'
import './Button.css'

function Button({imgBg, onClick, extraClass}) {
    
    return (
        <button onClick={onClick} className={`boton-funcional ${extraClass}`} style={{
            backgroundImage: `url(${imgBg})`,
        }}></button>
    )
}

export default Button