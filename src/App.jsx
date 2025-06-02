
import './App.css'

import Grilla from './components/Grilla';
import Panel from './components/Panel';
import { useState, useEffect } from 'react';




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
  const [colisionArriba, setColisionArriba] = useState(false)
  const [colisionAbajo, setColisionAbajo] = useState(false)
  const [colisionDerecha, setColisionDerecha] = useState(false)
  const [colisionIzquierda, setColisionIzquierda] = useState(false)



  const ejecutarSecuencia = (indice = 0, sentidoActual = sentido, posActual = pos) => {
    if (indice >= secuencia.length) {
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

    // Movimiento para avanzar
    if (direccion === 'avanzar') {
      const angulo = ((nuevoSentido % 360) + 360) % 360;

      const filaActual = nuevaPos.fila;
      const colActual = nuevaPos.columna;

      const noChocaArriba = filaActual > 0 && mapa[filaActual - 1][colActual] !== 1;
      const noChocaAbajo = filaActual < filas - 1 && mapa[filaActual + 1][colActual] !== 1;
      const noChocaDerecha = colActual < columnas - 1 && mapa[filaActual][colActual + 1] !== 1;
      const noChocaIzquierda = colActual > 0 && mapa[filaActual][colActual - 1] !== 1;

      switch (angulo) {
        case 0: // arriba
          if (noChocaArriba) {
            nuevaPos.fila--
          } else {
            setColisionArriba(true)
            setTimeout(() => {
              setColisionArriba(false)
            }, 300);
          }
          break;
        case 90: // derecha
          if (noChocaDerecha) {
            nuevaPos.columna++
          } else {
            setColisionDerecha(true)

            setTimeout(() => {
              setColisionDerecha(false)
            }, 300);
          }
          break;
        case 180: // abajo
          if (noChocaAbajo) {
            nuevaPos.fila++
          } else {
            setColisionAbajo(true)

            setTimeout(() => {
              setColisionAbajo(false)
            }, 300);
          }
          break;
        case 270: // izquierda
          if (noChocaIzquierda) {
            nuevaPos.columna--
          } else {
            setColisionIzquierda(true)
            setTimeout(() => {
              setColisionIzquierda(false)
            }, 300);
          }
          break;
      }

      setPos(nuevaPos);
    }




    // Continuar
    setTimeout(() => {
      ejecutarSecuencia(indice + 1, nuevoSentido, nuevaPos);
    }, 800);
  };



  const avanzar = () => {
    const angulo = ((sentidoAux % 360) + 360) % 360;

    setSecuencia(prev => [...prev, 'avanzar']);

    switch (angulo) {
      case 0: // arriba
        setPosAux({
          fila: posAux.fila - 1,
          columna: posAux.columna
        });
        break;

      case 90: // derecha
        setPosAux({
          fila: posAux.fila,
          columna: posAux.columna + 1
        });
        break;

      case 180: // abajo
        setPosAux({
          fila: posAux.fila + 1,
          columna: posAux.columna
        });
        break;

      case 270: // izquierda
        setPosAux({
          fila: posAux.fila,
          columna: posAux.columna - 1
        });
        break;

      default:
        break;
    }
  };



  const girarDer = () => {
    setSentidoAux(prev => prev + 90);
    setSecuencia(prev => [...prev, 'vueltaDer']);
  }


  const girarIzq = () => {
    setSentidoAux(prev => prev - 90);
    setSecuencia(prev => [...prev, 'vueltaIzq']);
  }

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
      <Grilla pos={pos} sentido={sentido} filas={filas} columnas={columnas} mapa={mapa}
        botAnimado={botAnimado} colisionArriba={colisionArriba} colisionAbajo={colisionAbajo}
        colisionDerecha={colisionDerecha} colisionIzquierda={colisionIzquierda} />

      <Panel posAux={posAux} setPosAux={setPosAux} sentidoAux={sentidoAux}
        setSentidoAux={setSentidoAux}
        ejecutando={ejecutando} jugar={jugar} setSecuencia={setSecuencia}
        mapa={mapa} filas={filas} columnas={columnas} secuencia={secuencia}
        avanzar={avanzar} girarDer={girarDer} girarIzq={girarIzq} />

    </div>
  );

}

export default App