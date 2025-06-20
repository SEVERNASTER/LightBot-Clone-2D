import React from 'react'
import './FormButton.css'

function FormButton({texto, onClick: eventoClick}) {
    return (
            <button className="login-btn"
                onClick={eventoClick}
            >{texto}</button>

    )
}

export default FormButton