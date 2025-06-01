import React from 'react';
import './Button.css';

function Button({ imgBg, icon: Icono, onClick, extraClass, inhabilitar }) {
    return (
        <button
            onClick={onClick}
            className={`boton-funcional ${extraClass}`}
            style={{
                backgroundImage: imgBg ? `url(${imgBg})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                
            }}
            disabled={inhabilitar}
        >
            {Icono && <Icono size={35} />}
        </button>
    );
}

export default Button;
