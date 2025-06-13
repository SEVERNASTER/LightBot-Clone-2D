import React from 'react';
import './Button.css';

function Button({ icon: Icono, onClick, extraClass, inhabilitar, label, titulo }) {
    return (
        <button
            onClick={onClick}
            className={`boton-funcional ${extraClass}`}
            disabled={inhabilitar}
            title={label}
        >
            {Icono && <Icono size={35} />}
            {titulo}
        </button>
    );
}

export default Button;
