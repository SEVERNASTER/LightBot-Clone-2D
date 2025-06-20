import React from 'react'
import './Input.css'

function Input({label, tipo, name}) {
    return (
        <div className="input-group">
            <input type={`${tipo}`} name={`${name}`} id={`${name}-${tipo}`} required />
            <label htmlFor={`${name}-${tipo}`}>{label}</label>
        </div>
    )
}

export default Input