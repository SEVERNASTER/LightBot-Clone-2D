import React from 'react'
import './Input.css'

function Input({ label, tipo, name, value, onChange }) {
    return (
        <div className="input-group">
            <input type={`${tipo}`} name={`${name}`} id={`${name}-${tipo}`}
                required value={value} onChange={onChange}
            />
            <label htmlFor={`${name}-${tipo}`}>{label}</label>
        </div>
    )
}

export default Input