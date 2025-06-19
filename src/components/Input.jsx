import React from 'react'
import './Input.css'

function Input({label, tipo, name}) {
    return (
        <div className="input-group">
            <input type={`${tipo}`} name={`${name}`} id={`${tipo}`} required />
            <label htmlFor={`${tipo}`}>{label}</label>
        </div>
    )
}

export default Input