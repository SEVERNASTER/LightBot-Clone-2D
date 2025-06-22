import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function useAuth() {
    const [user, setUser] = useState(null)
    const [cargando, setCargando] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const verificarSesion = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user`, {
                    withCredentials: true
                })
                setUser(res.data.user)                
            } catch (error) {
                setUser(null)
                navigate('/login')
            } finally {
                setCargando(false)
            }
        }

        verificarSesion()
    }, [])

    return { user, setUser, cargando }
}
