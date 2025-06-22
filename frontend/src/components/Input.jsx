import React from 'react'
import './Input.css'

function Input({ label, tipo, name, value, onChange, minLenght }) {
    return (
        <div className="input-group">
            <input type={`${tipo}`} name={`${name}`} id={`${name}-${tipo}`}
                required value={value} onChange={onChange} minLength={minLenght}
            />
            <label htmlFor={`${name}-${tipo}`}>{label}</label>
        </div>
    )
}

export default Input