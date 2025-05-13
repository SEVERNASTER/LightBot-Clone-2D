
import './App.css'

import Grilla from './components/Grilla';


function App() {
  return (
    <div className="app-contenedor">
        <Grilla />
        <div className="botones-contenedor">
          <button>Arriba</button>
          <button>Abajo</button>
          <button>Derecha</button>
          <button>Izquierda</button>
          <button>Girar Der</button>
          <button>Girar Izq</button>
        </div>
    </div>
  )
}

export default App