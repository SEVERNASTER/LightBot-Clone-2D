import React from 'react';

function ModalResultado({ mensaje, tipo, onCerrar }) {
    return (
        <div className="modal-overlay">
            <div className={`modal-content ${tipo}`}>
                <h2>{mensaje}</h2>
                <button onClick={onCerrar}>Cerrar</button>
            </div>
        </div>
    );
}

export default ModalResultado;
