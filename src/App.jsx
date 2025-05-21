
import './App.css'

import Grilla from './components/Grilla';
import { useState, useEffect } from 'react';
import Button from './components/Button';
import avanzarImg from './assets/avanzar.png';
import girarImg from './assets/girar.png';
import girarIzqImg from './assets/girarIzq.png';
import { PiPlayCircle } from "react-icons/pi";
import { CiPlay1 } from "react-icons/ci";
import { IoPlayOutline } from "react-icons/io5";


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
  const [posAux, setPosAux] = useState({ x: 0, y: -1 })
  // este es el sentido que sera en grados, en el sentido de las agujas del reloj y servira para
  // saber si se mueve arr abj izq der
  const [sentido, setSentido] = useState(0)
  const [sentidoAux, setSentidoAux] = useState(0)

  const [secuencia, setSecuencia] = useState([])


  // Aqui editamos el oficial directo para hacer los cambios y que se reflejen en la interfaz
  const ejecutarSecuencia = (indice = 0, sentidoActual = sentido, posActual = pos) => {
  if (indice >= secuencia.length) return;

  const direccion = secuencia[indice];
  let nuevoSentido = sentidoActual;
  let nuevaPos = { ...posActual };

  if (direccion.includes('vuelta')) {
    nuevoSentido += direccion === 'vueltaDer' ? 90 : -90;
    setSentido(nuevoSentido);
  } else {
    const angulo = ((nuevoSentido % 360) + 360) % 360;
    switch (angulo) {
      case 0:
        nuevaPos.y = nuevaPos.y < (filas - 1) * -1 ? nuevaPos.y : nuevaPos.y - 1;
        break;
      case 90:
        nuevaPos.x = nuevaPos.x < columnas - 1 ? nuevaPos.x + 1 : nuevaPos.x;
        break;
      case 180:
        nuevaPos.y = nuevaPos.y < -1 ? nuevaPos.y + 1 : nuevaPos.y;
        break;
      case 270:
        nuevaPos.x = nuevaPos.x > 0 ? nuevaPos.x - 1 : nuevaPos.x;
        break;
    }
    setPos(nuevaPos);
  }

  setTimeout(() => {
    ejecutarSecuencia(indice + 1, nuevoSentido, nuevaPos);
  }, 800); // puedes ajustar el tiempo
};


  useEffect(() => {
    console.log(secuencia);
  }, [secuencia])

  useEffect(() => {
    console.log(sentidoAux);
  }, [sentidoAux])

  // useEffect(() => {
  //   setTimeout(() => {
  //     mover()
  //   }, 1000);  
  // }, [sentido])
  






  return (
    <div className="app-contenedor">
      <Grilla pos={pos} sentido={sentido} filas={filas} columnas={columnas} />

      <div className="botones-contenedor">
        <Button imgBg={avanzarImg} onClick={() => {
          const angulo = ((sentidoAux % 360) + 360) % 360

          switch (angulo) {
            // arriba
            case 0:
              setPosAux({
                x: posAux.x,
                y: posAux.y < (filas - 1) * -1
                  ? posAux.y
                  : (setSecuencia(prev => [...prev, 'arriba']), posAux.y - 1)
              });
              break;

            // derecha
            case 90:
              setPosAux({
                x: posAux.x < columnas - 1
                  ? (setSecuencia(prev => [...prev, 'derecha']), posAux.x + 1)
                  : posAux.x,
                y: posAux.y
              });
              break;

            // abajo
            case 180:
              setPosAux({
                x: posAux.x,
                y: posAux.y < -1
                  ? (setSecuencia(prev => [...prev, 'abajo']), posAux.y + 1)
                  : posAux.y
              });
              break;

            // izquierda
            case 270:
              setPosAux({
                x: posAux.x > 0
                  ? (setSecuencia(prev => [...prev, 'izquierda']), posAux.x - 1)
                  : posAux.x,
                y: posAux.y
              });
              break;

            default:
              break;
          }


        }} />

        {/* girar a la derecha */}
        <Button imgBg={girarImg} onClick={() => {
          setSentidoAux(prev => prev + 90);
          setSecuencia(prev => [...prev, 'vueltaDer']);
        }} extraClass="zoom" />

        {/* girar a la izquierda */}
        <Button imgBg={girarIzqImg} onClick={() => {
          setSentidoAux(prev => prev - 90);
          setSecuencia(prev => [...prev, 'vueltaIzq']);
        }} extraClass="zoom" />

        <div className="jugarBtn" onClick={() => ejecutarSecuencia()}><IoPlayOutline /></div>

      </div>
    </div>
  );

}

export default App