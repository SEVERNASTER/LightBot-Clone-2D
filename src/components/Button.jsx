import React from 'react';
import './Button.css';

function Button({ imgBg, icon: Icono, onClick, extraClass, estilosExtra }) {
    return (
        <button
            onClick={onClick}
            className={`boton-funcional ${extraClass}`}
            style={{
                backgroundImage: imgBg ? `url(${imgBg})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                
            }}
        >
            {Icono && <Icono size={35} />}
        </button>
    );
}

export default Button;
