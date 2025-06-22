import { useState, useEffect } from 'react'
import './Toast.css'
import { TbAlertTriangle } from "react-icons/tb";
import { BsCheck2Circle } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";



function Toast({ mensaje, icono, mostrar, setMostrar }) {

    const icons = {
        check: BsCheck2Circle,
        alert: TbAlertTriangle,
        error: IoMdCloseCircleOutline
    }

    const Icono = icons[icono || 'check']

    useEffect(() => {
        if (mensaje && mensaje !== '' && mostrar) {
            setMostrar(true)
            const timeout = setTimeout(() => {
                setMostrar(false)
            }, 2500)

            return () => clearTimeout(timeout)
        }
    }, [mostrar])



    return (
        <div className='toast-container'>
            <div className={`mensaje 
                    ${icono}
                    ${mostrar ? 'mostrar' : ''}
                `}>
                <Icono size={30} />
                {mensaje}
            </div>
        </div>
    )
}

export default Toast