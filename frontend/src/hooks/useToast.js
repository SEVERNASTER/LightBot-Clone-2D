import { useState } from 'react'

export default function useToast() {
    const [mensaje, setMensaje] = useState('')
    const [mostrar, setMostrar] = useState(false)
    const [icono, setIcono] = useState('check')

    const mostrarToast = (mensaje, icono = 'check') => {
        setMensaje(mensaje)
        setIcono(icono)
        setMostrar(true)
    }

    return {
        mensaje,
        icono,
        mostrar,
        setMostrar,
        mostrarToast,
    }
}
