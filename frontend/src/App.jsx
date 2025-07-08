
import './App.css'

import Grilla from './components/Grilla';
import Panel from './components/Panel';
import { useState, useEffect, useRef } from 'react';
import Tour from './components/Tour';

import PantallaGanar from './components/PantallaGanar';



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


function App({ mapa, setMapa, jugando, mapaActual, bot, limiteDeComandos, proc1,
  limiteDeComandosProc1
}) {

  // 0 = camino libre
  // 1 = obstaculo
  // 2 = objetivo / luz para prender
  // 3 = luz ya prendida
  // 4 = bot

  useEffect(() => {
    reiniciarJuego()
    reiniciarFuncionBtn()
  }, [mapaActual])

  useEffect(() => {
    reiniciarJuego()
    reiniciarFuncionBtn()
  }, [bot])


  // console.log('este es el bot:', bot);


  const reiniciarJuego = () => {
    setPos(posInicial);
    setPosAux(posInicial);
    setSentido(sentidoInicial);
    setSentidoAux(sentidoInicial);
    // setPos(bot.pos)
    // setPosAux(bot.pos)
    // setSentido(bot.direccionInicial)
    // setSentidoAux(bot.direccionInicial)

    setSecuencia([]);
    setBotAnimado(false);
    setEjecutando(false);
    setColisionArriba(false);
    setColisionAbajo(false);
    setColisionDerecha(false);
    setColisionIzquierda(false);
    setReiniciar(false);
    setComandoActual(0);
    setPuedeEditar(true);
    setListoParaEjecutar(false);
    indiceActualRef.current = 0;
    pausadoRef.current = false;
  }



  const filas = 5
  const columnas = 5

  // este es el sentido que sera en grados, en el sentido de las agujas del reloj y servira para
  // saber si se mueve arr abj izq der

  const [pos, setPos] = useState(bot.pos)
  const [posAux, setPosAux] = useState(bot.pos)


  const [sentido, setSentido] = useState(bot.direccionInicial)
  const [sentidoAux, setSentidoAux] = useState(bot.direccionInicial)
  // const posInicial = useRef(bot.pos)
  // const sentidoInicial = useRef(bot.direccionInicial)
  const posInicial = bot.pos
  const sentidoInicial = bot.direccionInicial

  // useEffect(() => {
  //   if (bot) {
  //     setPos(bot.pos)
  //     setPosAux(bot.pos)
  //     setSentido(bot.direccionInicial)
  //     setSentidoAux(bot.direccionInicial)
  //   }
  // }, [bot])




  const [secuencia, setSecuencia] = useState([])
  const [secuenciaProc1, setSecuenciaProc1] = useState([])

  const [botAnimado, setBotAnimado] = useState(false)
  const [ejecutando, setEjecutando] = useState(false)
  const ejecutandoRef = useRef(ejecutando)
  const [colisionArriba, setColisionArriba] = useState(false)
  const [colisionAbajo, setColisionAbajo] = useState(false)
  const [colisionDerecha, setColisionDerecha] = useState(false)
  const [colisionIzquierda, setColisionIzquierda] = useState(false)
  const [reiniciar, setReiniciar] = useState(false)
  const [comandoActual, setComandoActual] = useState(0)
  const [puedeEditar, setPuedeEditar] = useState(true)
  const [listoParaEjecutar, setListoParaEjecutar] = useState(false);
  const indiceActualRef = useRef(0);
  const pausadoRef = useRef(false)
  const [mensajeLuz, setMensajeLuz] = useState(false)
  const [comandosRestantes, setComandosRestantes] = useState(limiteDeComandos)
  const [comandosRestantesProc1, setComandosRestantesProc1] = useState(limiteDeComandosProc1)


  const [secuenciaTerminada, setSecuenciaTerminada] = useState(false);

  useEffect(() => {
    if (secuenciaTerminada) {
      const quedanLuces = mapa.some(fila => fila.some(celda => celda === 2));
      if (!quedanLuces) {
        terminarJuego(true);
      } else {
        terminarJuego(false);
      }
      setSecuenciaTerminada(false);
    }
  }, [mapa, secuenciaTerminada]);


  useEffect(() => {
    ejecutandoRef.current = ejecutando
  }, [ejecutando])











  const ejecutarSecuenciaMain = (indice = 0, sentidoActual = sentido, posActual = pos) => {


    if (indice >= secuencia.length) {
      setPuedeEditar(true)
      setEjecutando(false)
      setSecuenciaTerminada(true);
      return;
    }

    if (!ejecutando) {
      setEjecutando(false)
      return;
    }

    indiceActualRef.current = indice + 1;
    setComandoActual(indice + 1)



    const comandoActual = secuencia[indice];
    let nuevoSentido = sentidoActual;
    let nuevaPos = { ...posActual };

    // Giro

    nuevoSentido = girarBot(comandoActual, setSentido, nuevoSentido)

    // Encender luz

    encenderLuzBot(comandoActual, nuevaPos)

    // Movimiento para avanzar

    nuevaPos = moverBot(comandoActual, nuevoSentido, nuevaPos)

    // Continuar
    setTimeout(() => {
      // if (comandoActual === 'p1') {
      //   let indiceProc1 = -1
      //   while(indiceProc1 < secuenciaProc1.length){
      //     ejecutarSecuencia(indiceProc1 + 1, nuevoSentido, nuevaPos, secuenciaProc1);
      //   }
      // }else {

      // }
      if (ejecutandoRef.current) {
        let indiceProc1 = -1
        let indiceMain = indice
        if (comandoActual === 'p1') {


        } else {
          ejecutarSecuenciaMain(indiceMain + 1, nuevoSentido, nuevaPos)
        }
      }
    }, 1000);//500
  };


  // para girar el bot
  const girarBot = (comandoActual, setSentido, nuevoSentido) => {
    if (comandoActual === 'vueltaDer' || comandoActual === 'vueltaIzq') {
      nuevoSentido += comandoActual === 'vueltaDer' ? 90 : -90;
      setSentido(nuevoSentido);
    }
    return nuevoSentido
  }

  // para encender la luz

  const encenderLuzBot = (comandoActual, nuevaPos) => {

    if (comandoActual === 'luz') {
      setMapa(prevMapa => {
        const nuevoMapa = prevMapa.map(fila => [...fila]);
        const celdaActual = nuevoMapa[nuevaPos.fila][nuevaPos.columna];

        if (celdaActual === 2) {
          nuevoMapa[nuevaPos.fila][nuevaPos.columna] = 3;

          const todasEncendidas = nuevoMapa.every(fila =>
            fila.every(celda => celda !== 2)
          );

          if (todasEncendidas) {
            console.log('¡Todas las luces han sido encendidas!');
            setMensajeLuz(true);
          }

        } else if (celdaActual === 3) {
          nuevoMapa[nuevaPos.fila][nuevaPos.columna] = 2;
        }

        return nuevoMapa;
      });

      setBotAnimado(true);
      setTimeout(() => {
        setBotAnimado(false);
      }, 500);
    }

  }

  // para avanzar 

  const moverBot = (comandoActual, nuevoSentido, nuevaPos) => {
    if (comandoActual === 'avanzar') {
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
    return nuevaPos
  }






  useEffect(() => {
    console.log(secuencia);
  }, [secuencia])



  const agregarComando = (comando, secuenciaActual, setSecuenciaActual, limiteDeComandosActual, setComandosRestantesActual) => {
    // console.log(secuenciaActual, limiteDeComandosActual);

    if (secuenciaActual.length >= limiteDeComandosActual) return;
    setComandosRestantesActual(prev => prev - 1)
    switch (comando) {
      case 'avanzar':
        avanzar(setSecuenciaActual)
        break;
      case 'girarDer':
        girarDer(setSecuenciaActual)
        break;
      case 'girarIzq':
        girarIzq(setSecuenciaActual)
        break;
      case 'luz':
        setSecuenciaActual(prev => [...prev, 'luz']);
        break;
      case 'p1':
        setSecuenciaActual(prev => [...prev, 'p1'])
        break;
      default:
        break;
    }
  }


  const avanzar = (setSecuenciaActual) => {

    const angulo = ((sentidoAux % 360) + 360) % 360;

    setSecuenciaActual(prev => [...prev, 'avanzar']);

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



  const girarDer = (setSecuenciaActual) => {
    setSentidoAux(prev => prev + 90);
    setSecuenciaActual(prev => [...prev, 'vueltaDer']);
  }


  const girarIzq = (setSecuenciaActual) => {
    setSentidoAux(prev => prev - 90);
    setSecuenciaActual(prev => [...prev, 'vueltaIzq']);
  }


  useEffect(() => {
    if (reiniciar) {
      setPos(posInicial)
      setSentido(sentidoInicial)
    }
  }, [reiniciar])

  useEffect(() => {
    if (listoParaEjecutar) {
      setEjecutando(true);
      ejecutarSecuenciaMain(0, sentidoInicial, posInicial);
      setListoParaEjecutar(false);
    }
  }, [listoParaEjecutar]);

  const apagarLuces = () => {
    const nuevoMapa = mapa.map(actual => {
      return actual.map(celda => celda = celda === 3 ? 2 : celda)
    })
    setMapa(nuevoMapa)
  }

  const jugar = () => {
    if (secuencia.length === 0) return;

    if (!ejecutando) {
      // Si ya terminó la secuencia o es la primera vez, reiniciar desde el inicio
      setEjecutando(true)
      setPuedeEditar(false)
      setReiniciar(true)
      apagarLuces()
      setTimeout(() => {
        setReiniciar(false)
        setPos(posInicial);
        setSentido(sentidoInicial);
        indiceActualRef.current = 0;
        setListoParaEjecutar(true);
      }, 200);

    } else if (ejecutando) {
      setEjecutando(false);
      setReiniciar(true);
      setMensajeLuz(false); // mensaje de éxito
      setComandoActual(-1)

      setTimeout(() => {
        setReiniciar(false);
        setPos(posInicial);
        setSentido(sentidoInicial);
        apagarLuces();
        setPuedeEditar(true);
      }, 200);
    }
  }

  const reiniciarFuncionBtn = () => {
    setPuedeEditar(true)
    setComandoActual(-1)
    setReiniciar(true)
    // para que devuevla el transition
    setTimeout(() => {
      setReiniciar(false)
    }, 200);
    apagarLuces()
    indiceActualRef.current = 0
  }

  // useEffect(() => {
  //   console.log('fila: ' + posAux.fila, 'columna:' + posAux.columna);
  // }, [posAux])

  const [mostrarModal, setMostrarModal] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [tipo, setTipo] = useState(''); // "ganar" o "perder"

  const terminarJuego = (gano) => {
    console.log(`${gano ? 'ganaste' : 'perdiste'}`);

    // if (gano) {
    //   setMensaje('¡Ganaste! 🎉');
    //   setTipo('ganar');
    // } else {
    //   setMensaje('Perdiste 😢');
    //   setTipo('perder');
    // }
    // setMostrarModal(true);
  };


  return (
    <div className={`app-wrapper ${jugando ? 'mostrar' : ''}`}>

      <div className="app-contenedor">
        {/* <Tour /> */}
        <Grilla pos={pos} sentido={sentido} filas={filas} columnas={columnas} mapa={mapa}
          botAnimado={botAnimado} colisionArriba={colisionArriba} colisionAbajo={colisionAbajo}
          colisionDerecha={colisionDerecha} colisionIzquierda={colisionIzquierda}
          reiniciar={reiniciar} ejecutando={ejecutando} secuencia={secuencia}
          indice={indiceActualRef.current}
          jugando={jugando}
        />

        <Panel posAux={posAux} setPosAux={setPosAux} sentidoAux={sentidoAux}
          setSentidoAux={setSentidoAux}
          ejecutando={ejecutando} jugar={jugar} setSecuencia={setSecuencia}
          mapa={mapa} filas={filas} columnas={columnas} secuencia={secuencia}
          agregarComando={agregarComando} reiniciar={reiniciarFuncionBtn}
          comandoActual={comandoActual} puedeEditar={puedeEditar} jugando={jugando}
          limiteDeComandos={limiteDeComandos} comandosRestantes={comandosRestantes}
          setComandosRestantes={setComandosRestantes} proc1={proc1} secuenciaProc1={secuenciaProc1}
          setSecuenciaProc1={setSecuenciaProc1} limiteDeComandosProc1={limiteDeComandosProc1}
          comandosRestantesProc1={comandosRestantesProc1} setComandosRestantesProc1={setComandosRestantesProc1}
        />

      </div>
      <div>

        {mostrarModal && (
          <PantallaGanar
            mensaje={mensaje}
            tipo={tipo}
            onCerrar={() => setMostrarModal(false)}
          />
        )}
      </div>


    </div>
  );

}

export default App