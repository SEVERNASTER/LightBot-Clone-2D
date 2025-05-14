
import './App.css'

import Grilla from './components/Grilla';
import { useState } from 'react';


function App() {

  const [pos, setPos] = useState({ x: 0, y: -1 })

  return (
    <div className="app-contenedor">
      <Grilla pos={pos} />

      <div className="botones-contenedor">
        <button onClick={() => setPos({ x: pos.x, y: pos.y - 1 })}>Arriba</button>
        <button onClick={() => setPos({ x: pos.x, y: pos.y + 1 })}>Abajo</button>
        <button onClick={() => setPos({ x: pos.x + 1, y: pos.y })}>Derecha</button>
        <button onClick={() => setPos({ x: pos.x - 1, y: pos.y })}>Izquierda</button>
        <button onClick={() => setPos({ x: pos.x, y: pos.y })}>Girar Der</button>
        <button onClick={() => setPos({ x: pos.x, y: pos.y })}>Girar Izq</button>
      </div>
    </div>
  )
}

export default App