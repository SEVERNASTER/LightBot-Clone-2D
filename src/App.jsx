
import './App.css'

import Grilla from './components/Grilla';
import { useState } from 'react';
import Button from './components/Button';
import avanzarImg from './assets/avanzar.png';
import girarImg from './assets/girar.png';
import girarIzqImg from './assets/girarIzq.png';


function App() {

  const [pos, setPos] = useState({ x: 0, y: -1 })
  // este es el sentido que sera en grados, en el sentido de las agujas del reloj y servira para
  // saber si se mueve arr abj izq der
  const [sentido, setSentido] = useState(0)

  return (
    <div className="app-contenedor">
      <Grilla pos={pos} sentido={sentido} />

      <div className="botones-contenedor">
        <Button imgBg={avanzarImg} onClick={() => {
          switch (sentido) {
            // arriba
            case 0:
              setPos({ x: pos.x, y: pos.y - 1 })
              break;
            // derecha
            case 90:
              setPos({ x: pos.x + 1, y: pos.y })
              break;
            // abajo
            case 180:
              setPos({ x: pos.x, y: pos.y + 1 })
              break;
            // izquierda
            case 270:
              setPos({ x: pos.x - 1, y: pos.y })
              break;

            default:
              break;
          }
        }} />

        <Button imgBg={girarImg} onClick={() => {
          const sentidoActual = sentido
          setSentido(sentidoActual + 90)
        }} extraClass='zoom' />

        <Button imgBg={girarIzqImg} onClick={() => {
          const sentidoActual = sentido
          setSentido(sentidoActual - 90)
        }} extraClass='zoom' />

      </div>
    </div>
  )
}

export default App