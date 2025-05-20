
import './App.css'

import Grilla from './components/Grilla';
import { useState } from 'react';
import Button from './components/Button';
import avanzarImg from './assets/avanzar.png';
import girarImg from './assets/girar.png';
import girarIzqImg from './assets/girarIzq.png';


/** idea para corregir que al llegar al limite de derecha, osea 270 grados evite hacer una 
 * vuelta completa para volver a la siguiente posicion o posicion original entonces:
 * en el switch case, en lugar de casos especificos deberiamos manejarlo como si fueran
 * multiplos de ese caso especifico, es decir, en lugar de hacer case 90 hariamos un case
 * para cualquier numero que sea multiplo de 90, pero como vamos sumando de 90 en 90 entonces 
 * todos los grados que estamos manejando como 'sentido' serian multiplos de 90, solucion,
 * tendriamos que controlar un numero multiplo de 90 pero completado un ciclo o vuelta, 
 * es decir, que si que si empezamos en 90 una vuelta completa seria 360 + 90 = 450, entonces
 * se tomaria 450 como 'multiplo' de 90 porque es un numero valido donde ya se ha conmpletado 
 * un ciclo o vuelta, y asi para los demas 
 */


function App() {

  const filas = 5
  const columnas = 5

  // y: -1 porque si esta en 0 sobresale de la grilla entonces para que este acomodado una casilla arriba
  const [pos, setPos] = useState({ x: 0, y: -1 })
  // este es el sentido que sera en grados, en el sentido de las agujas del reloj y servira para
  // saber si se mueve arr abj izq der
  const [sentido, setSentido] = useState(0)

  return (
    <div className="app-contenedor">
      <Grilla pos={pos} sentido={sentido} filas={filas} columnas={columnas} />

      <div className="botones-contenedor">
        <Button imgBg={avanzarImg} onClick={() => {
          const angulo = ((sentido % 360) + 360) % 360;

          switch (angulo) {
            // arriba
            case 0:
              setPos({ x: pos.x, y: pos.y < (filas - 1) * -1 ? pos.y : pos.y - 1 })
              console.log(pos.y);
              break;
            // derecha
            case 90:
              setPos({ x: pos.x < columnas - 1 ? pos.x + 1 : pos.x, y: pos.y })
              break;
            // abajo
            case 180:
              setPos({ x: pos.x, y: pos.y < - 1 ? pos.y + 1 : pos.y })
              break;
            // izquierda
            case 270:
              setPos({ x: pos.x > 0 ? pos.x - 1 : pos.x, y: pos.y })
              break;

            default:
              break;
          }
        }} />

        {/* girar a la derecha */}
        <Button imgBg={girarImg} onClick={() => {
          const sentidoActual = sentido
          setSentido(sentidoActual + 90)

        }} extraClass='zoom' />

        {/* girar a la izquierda */}
        <Button imgBg={girarIzqImg} onClick={() => {
          const sentidoActual = sentido
          setSentido(sentidoActual - 90)
          
        }} extraClass='zoom' />

      </div>
    </div>
  )
}

export default App