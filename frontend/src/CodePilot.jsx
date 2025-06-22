import {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function CodePilot() {

    const [user, setUser] = useState(null)

    return (
        <Routes>
            <Route path='/' element={<Main user={user} />} />
            <Route path='/login' element={<Login setUsuario={setUser} />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
    )
}

export default CodePilot