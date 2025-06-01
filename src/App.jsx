
import './App.css'

import Grilla from './components/Grilla';
import { useState, useEffect } from 'react';
import Button from './components/Button';
import avanzarImg from './assets/avanzar.png';
import girarImg from './assets/girar.png';
import girarIzqImg from './assets/girarIzq.png';
import { FaLightbulb } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";



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

  const [mapa, setMapa] = useState([
    [0, 0, 2, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 2, 0],
    [1, 2, 1, 0, 1],
    [0, 0, 0, 0, 0],
  ])





  const filas = 5
  const columnas = 5

  // y: -1 porque si esta en 0 sobresale de la grilla entonces para que este acomodado una casilla arriba
  const [pos, setPos] = useState({ fila: 0, columna: 0 })
  const [posAux, setPosAux] = useState({ fila: 0, columna: 0 })
  // este es el sentido que sera en grados, en el sentido de las agujas del reloj y servira para
  // saber si se mueve arr abj izq der
  const [sentido, setSentido] = useState(0)
  const [sentidoAux, setSentidoAux] = useState(0)

  const [secuencia, setSecuencia] = useState([])

  const [botAnimado, setBotAnimado] = useState(false)
  const [ejecutando, setEjecutando] = useState(false)



  const ejecutarSecuencia = (indice = 0, sentidoActual = sentido, posActual = pos) => {
    if (indice >= secuencia.length) {
      setSecuencia([]);
      setEjecutando(false)
      return;
    }

    const direccion = secuencia[indice];
    let nuevoSentido = sentidoActual;
    let nuevaPos = { ...posActual };

    // Giro
    if (direccion === 'vueltaDer' || direccion === 'vueltaIzq') {
      nuevoSentido += direccion === 'vueltaDer' ? 90 : -90;
      setSentido(nuevoSentido);
    }

    // Encender luz
    if (direccion === 'luz') {
      if (mapa[nuevaPos.fila][nuevaPos.columna] === 2) {
        const nuevoMapa = mapa.map(fila => [...fila])
        nuevoMapa[nuevaPos.fila][nuevaPos.columna] = 3
        setMapa(prevMapa => {
          const nuevoMapa = prevMapa.map(fila => [...fila]);
          nuevoMapa[nuevaPos.fila][nuevaPos.columna] = 3;

          const todasEncendidas = nuevoMapa.every(fila =>
            fila.every(celda => celda !== 2)
          );

          if (todasEncendidas) {
            console.log('¡Todas las luces han sido encendidas!');
          }

          return nuevoMapa;
        });
      }
      setBotAnimado(true)
      setTimeout(() => {
        setBotAnimado(false)
      }, 500);
    }

    // Movimiento según texto
    if (['arriba', 'abajo', 'izquierda', 'derecha'].includes(direccion)) {
      switch (direccion) {
        case 'arriba':
          nuevaPos.fila = nuevaPos.fila > 0 ? nuevaPos.fila - 1 : nuevaPos.fila;
          break;
        case 'abajo':
          nuevaPos.fila = nuevaPos.fila < filas - 1 ? nuevaPos.fila + 1 : nuevaPos.fila;
          break;
        case 'izquierda':
          nuevaPos.columna = nuevaPos.columna > 0 ? nuevaPos.columna - 1 : nuevaPos.columna;
          break;
        case 'derecha':
          nuevaPos.columna = nuevaPos.columna < columnas - 1 ? nuevaPos.columna + 1 : nuevaPos.columna;
          break;
      }
      setPos(nuevaPos);
    }

    // Continuar
    setTimeout(() => {
      ejecutarSecuencia(indice + 1, nuevoSentido, nuevaPos);
    }, 800);
  };

  const jugar = () => {
    if (secuencia.length > 0) {
      ejecutarSecuencia()
      setEjecutando(true)
    }
  }



  useEffect(() => {
    console.log(secuencia);
  }, [secuencia])

  // useEffect(() => {
  //   console.log(mapa);
  // }, [mapa])

  useEffect(() => {
    console.log('fila: ' + posAux.fila, 'columna:' + posAux.columna);
  }, [posAux])

  // useEffect(() => {
  //   setTimeout(() => {
  //     mover()
  //   }, 1000);  
  // }, [sentido])


  return (
    <div className="app-contenedor">
      <Grilla pos={pos} sentido={sentido} filas={filas} columnas={columnas} mapa={mapa} botAnimado={botAnimado} />

      <div className="botones-contenedor">

        <Button imgBg={avanzarImg} onClick={() => {
          const angulo = ((sentidoAux % 360) + 360) % 360
          const noChocaArriba = mapa[posAux.fila === 0 ? 0 : posAux.fila - 1][posAux.columna] !== 1
          const noChocaAbajo = mapa[posAux.fila === filas - 1 ? posAux.fila : posAux.fila + 1][posAux.columna] !== 1
          const noChocaDerecha = mapa[posAux.fila][posAux.columna < columnas - 1 ? posAux.columna + 1 : posAux.columna] !== 1
          const noChocaIzquierda = mapa[posAux.fila][posAux.columna > 0 ? posAux.columna - 1 : posAux.columna] !== 1
          // console.log(mapa[filaActual][posAux.x + 1], noChocaDerecha);

          // { console.log(posAux.fila, posAux.columna); }
          switch (angulo) {
            // arriba
            case 0:
              setPosAux({
                fila: (posAux.fila > 0) && noChocaArriba
                  ? (setSecuencia(prev => [...prev, 'arriba']), posAux.fila - 1)
                  : posAux.fila,
                columna: posAux.columna
              });
              break;

            // derecha
            case 90:
              setPosAux({
                fila: posAux.fila,
                columna: posAux.columna < columnas - 1 && noChocaDerecha
                  ? (setSecuencia(prev => [...prev, 'derecha']), posAux.columna + 1)
                  : posAux.columna
              });
              break;

            // abajo
            case 180:
              setPosAux({
                fila: posAux.fila < filas - 1 && noChocaAbajo
                  ? (setSecuencia(prev => [...prev, 'abajo']), posAux.fila + 1)
                  : posAux.fila,
                columna: posAux.columna
              });
              break;

            // izquierda
            case 270:
              setPosAux({
                fila: posAux.fila,
                columna: posAux.columna > 0 && noChocaIzquierda
                  ? (setSecuencia(prev => [...prev, 'izquierda']), posAux.columna - 1)
                  : posAux.columna,
              });
              break;

            default:
              break;
          }
        }} inhabilitar={ejecutando}
          extraClass={` ${ejecutando ? 'inhabilitar' : ''}`}/>

        {/* girar a la derecha */}
        <Button imgBg={girarImg} onClick={() => {
          setSentidoAux(prev => prev + 90);
          setSecuencia(prev => [...prev, 'vueltaDer']);
        }} extraClass={`zoom ${ejecutando ? 'inhabilitar' : ''}`}
        inhabilitar={ejecutando}/>

        {/* girar a la izquierda */}
        <Button imgBg={girarIzqImg} onClick={() => {
          setSentidoAux(prev => prev - 90);
          setSecuencia(prev => [...prev, 'vueltaIzq']);
        }} extraClass={`zoom ${ejecutando ? 'inhabilitar' : ''}`} 
        inhabilitar={ejecutando}/>

        {/* para encender la luz */}
        <Button icon={FaLightbulb} onClick={() => {
          setSecuencia(prev => [...prev, 'luz']);
        }} extraClass={`zoom boton-luz ${ejecutando ? 'inhabilitar' : ''}`} 
        inhabilitar={ejecutando}/>

        <Button icon={ejecutando ? FaPause : FaPlay} onClick={jugar}
          extraClass={`zoom boton-jugar ${ejecutando ? 'inhabilitar' : ''}`}
          inhabilitar={ejecutando}/>

      </div>
    </div>
  );

}

export default App