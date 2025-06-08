import React from 'react';
import './Button.css';

function Button({ imgBg, icon: Icono, onClick, extraClass, inhabilitar, label }) {
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
            title={label}
        >
            {Icono && <Icono size={35} />}
        </button>
    );
}

export default Button;
