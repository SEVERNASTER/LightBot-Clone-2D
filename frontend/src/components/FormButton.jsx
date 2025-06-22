import {useState} from 'react'
import './FormButton.css'

function FormButton({texto, onClick: eventoClick, clasesExtra}) {
    
    return (
            <button className={`login-btn ${clasesExtra}`}
                onClick={eventoClick}
            >{clasesExtra.includes('cargando') ? '' : texto}</button>

    )
}

export default FormButton