import React from 'react';
import ModalResultado from './ModalResultado';
import './modal.css';

export default function PantallaGanar({ mensaje, tipo, onCerrar }) {
    return (
        <div>
            <ModalResultado
                mensaje={mensaje}
                tipo={tipo}
                onCerrar={onCerrar}
            />
        </div>
    );
}
