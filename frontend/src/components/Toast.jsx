import { useState, useEffect } from 'react'
import './Toast.css'
import { TbAlertTriangle } from "react-icons/tb";
import { BsCheck2Circle } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";



function Toast({ mensaje, tipoIcono }) {
    const [mostrar, setMostrar] = useState(false)

    const icons = {
        check: BsCheck2Circle,
        alert: TbAlertTriangle,
        error: IoMdCloseCircleOutline
    }

    const Icono = icons[tipoIcono || 'check']

    useEffect(() => {
        if (mensaje) {
            setMostrar(true)
            const timeout = setTimeout(() => {
                setMostrar(false)
            }, 2000)

            return () => clearTimeout(timeout)
        }
    }, [mensaje])



    return (
        <div className='toast-container'>
            <div className={`mensaje 
                    ${tipoIcono}
                    ${mostrar ? 'mostrar' : ''}
                `}>
                <Icono size={30} />
                {mensaje}
            </div>
        </div>
    )
}

export default Toast