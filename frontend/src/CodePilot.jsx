import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { useAuth } from './hooks/useAuth'

function CodePilot() {

    const { user, setUser, loading } = useAuth()

    // const [user, setUser] = useState(null)
    if (loading) return <div className="cargando">Cargando...</div>

    return (
        <Routes>
            <Route path='/' element={<Main user={user} />} />
            <Route path='/login' element={<Login setUsuario={setUser} />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
    )
}

export default CodePilot