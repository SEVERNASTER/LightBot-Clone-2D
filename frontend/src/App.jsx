
import './App.css'

import Grilla from './components/Grilla';
import Panel from './components/Panel';
import { useState, useEffect, useRef } from 'react';
import Tour from './components/Tour';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';
import './driver-custom.css';
import getSteps from './config/tourConfig.js';





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



// mapaActual es el indice de la lista de mapas
function App({ mapa, setMapa, jugando, mapaActual, bot, limiteDeComandos, proc1, proc2,
  limiteDeComandosProc1, limiteDeComandosProc2, filas: mapaFilas, columnas: mapaColumnas,
  todasEncendidas, setTodasEncendidas, handleSalir, debeReiniciar, setDebeReiniciar, cartaDeNivelActual
}) {

  // 0 = camino libre
  // 1 = obstaculo
  // 2 = objetivo / luz para prender
  // 3 = luz ya prendida
  // 4 = bot


  useEffect(() => {
    if (debeReiniciar) {
      reiniciarJuego()
      reiniciarFuncionBtn()
      setDebeReiniciar(false)
    }
  }, [debeReiniciar])



  useEffect(() => {
    reiniciarJuego()
    reiniciarFuncionBtn()
    setFilas(mapaFilas)
    setColumnas(mapaColumnas)
  }, [bot, mapaActual, proc1, proc2, limiteDeComandos, limiteDeComandosProc1,
    limiteDeComandosProc2, mapaFilas, mapaColumnas])



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
    setSecuenciaProc1([])
    setSecuenciaProc2([])
    setBotAnimado(false);
    setEjecutando(false);
    setColisionArriba(false);
    setColisionAbajo(false);
    setColisionDerecha(false);
    setColisionIzquierda(false);
    setReiniciar(false);
    setComandoActual(0);
    setComandoActualProc1(0);
    setComandoActualProc2(0);
    setPuedeEditar(true);
    setListoParaEjecutar(false);
    indiceActualRef.current = 0;
    indiceActualProc1Ref.current = 0;
    indiceActualProc2Ref.current = 0;
    pausadoRef.current = false;
    setComandosRestantes(limiteDeComandos)
    setComandosRestantesProc1(limiteDeComandosProc1)
    setComandosRestantesProc2(limiteDeComandosProc2)
    setTodasEncendidas(false)
    setAnimarCeldaLuces(false)
  }


  // para las filas y columnas
  const [filas, setFilas] = useState(mapaFilas)
  const [columnas, setColumnas] = useState(mapaColumnas)

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
  const [secuenciaProc2, setSecuenciaProc2] = useState([])

  const [botAnimado, setBotAnimado] = useState(false)
  const [ejecutando, setEjecutando] = useState(false)
  const ejecutandoRef = useRef(ejecutando)
  const [colisionArriba, setColisionArriba] = useState(false)
  const [colisionAbajo, setColisionAbajo] = useState(false)
  const [colisionDerecha, setColisionDerecha] = useState(false)
  const [colisionIzquierda, setColisionIzquierda] = useState(false)
  const [reiniciar, setReiniciar] = useState(false)
  const [comandoActualMain, setComandoActual] = useState(0)
  const [comandoActualProc1, setComandoActualProc1] = useState(0)
  const [comandoActualProc2, setComandoActualProc2] = useState(0)
  const [puedeEditar, setPuedeEditar] = useState(true)
  const [listoParaEjecutar, setListoParaEjecutar] = useState(false);
  const indiceActualRef = useRef(0);
  const indiceActualProc1Ref = useRef(0);
  const indiceActualProc2Ref = useRef(0);
  const pausadoRef = useRef(false)
  const [mensajeLuz, setMensajeLuz] = useState(false)
  const [comandosRestantes, setComandosRestantes] = useState(limiteDeComandos)
  const [comandosRestantesProc1, setComandosRestantesProc1] = useState(limiteDeComandosProc1)
  const [comandosRestantesProc2, setComandosRestantesProc2] = useState(limiteDeComandosProc1)
  const [animarCeldaLuces, setAnimarCeldaLuces] = useState(false)

  const [secuenciaTerminada, setSecuenciaTerminada] = useState(false);

  // ref para Driver.js
  const driverRef = useRef(null);


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









  // ← CAMBIO: Main ahora también recibe un callback (puede ser null si es la función principal)
  const ejecutarSecuenciaMain = (indice = 0, sentidoActual = sentido, posActual = pos, callbackCuandoTermine = null) => {
    // si ya no hay comandos para ejecutar ya no hacer nada
    if (indice >= secuencia.length) {
      setPuedeEditar(true)
      setEjecutando(false)
      setSecuenciaTerminada(true);

      // ← CAMBIO: Si hay callback, ejecutarlo
      if (callbackCuandoTermine) {
        callbackCuandoTermine(sentidoActual, posActual);
      }
      return;
    }

    // para ver en que comando va
    indiceActualRef.current = indice + 1;
    setComandoActual(indice + 1)

    // auxiliares para la logica
    const comandoActualMain = secuencia[indice];
    let nuevoSentido = sentidoActual;
    let nuevaPos = { ...posActual };

    // Giro
    nuevoSentido = girarBot(comandoActualMain, setSentido, nuevoSentido)

    // Encender luz
    encenderLuzBot(comandoActualMain, nuevaPos)

    // Movimiento para avanzar
    nuevaPos = moverBot(comandoActualMain, nuevoSentido, nuevaPos)

    // Continuar
    setTimeout(() => {
      if (ejecutandoRef.current) {
        if (comandoActualMain === 'p1') {
          ejecutarProc1(0, nuevoSentido, nuevaPos, (sentidoCuandoTermine, posCuandoTermine) => {
            // ← CAMBIO: Pasar el callback original cuando continúe
            ejecutarSecuenciaMain(indice + 1, sentidoCuandoTermine, posCuandoTermine, callbackCuandoTermine);
          });
        } else if (comandoActualMain === 'p2') {
          ejecutarProc2(0, nuevoSentido, nuevaPos, (sentidoCuandoTermine, posCuandoTermine) => {
            // ← CAMBIO: Pasar el callback original cuando continúe
            ejecutarSecuenciaMain(indice + 1, sentidoCuandoTermine, posCuandoTermine, callbackCuandoTermine);
          });
        } else {
          // ← CAMBIO: Pasar el callback original
          ejecutarSecuenciaMain(indice + 1, nuevoSentido, nuevaPos, callbackCuandoTermine)
        }
      }
    }, 1000);
  };













  const ejecutarProc1 = (indice, sentidoActual, posActual, callbackCuandoTermine) => {
    if (indice >= secuenciaProc1.length) {
      indiceActualProc1Ref.current = -1
      setComandoActualProc1(-1)

      if (callbackCuandoTermine) {
        callbackCuandoTermine(sentidoActual, posActual);
      }
      return;
    }

    indiceActualProc1Ref.current = indice + 1;
    setComandoActualProc1(indice + 1)

    const comandoActual = secuenciaProc1[indice]
    let nuevoSentido = sentidoActual
    let nuevaPos = { ...posActual }

    nuevoSentido = girarBot(comandoActual, setSentido, nuevoSentido)
    encenderLuzBot(comandoActual, nuevaPos)
    nuevaPos = moverBot(comandoActual, nuevoSentido, nuevaPos)

    setTimeout(() => {
      if (ejecutandoRef.current) {
        if (comandoActual === 'p1') {
          ejecutarProc1(0, nuevoSentido, nuevaPos, callbackCuandoTermine)
        } else if (comandoActual === 'p2') {
          ejecutarProc2(0, nuevoSentido, nuevaPos, (sentidoCuandoTermine, posCuandoTermine) => {
            ejecutarProc1(indice + 1, sentidoCuandoTermine, posCuandoTermine, callbackCuandoTermine)
          });
        } else {
          ejecutarProc1(indice + 1, nuevoSentido, nuevaPos, callbackCuandoTermine)
        }
      }
    }, 1000);
  }












  const ejecutarProc2 = (indice, sentidoActual, posActual, callbackCuandoTermine) => {
    if (indice >= secuenciaProc2.length) {
      indiceActualProc2Ref.current = -1
      setComandoActualProc2(-1)

      if (callbackCuandoTermine) {
        callbackCuandoTermine(sentidoActual, posActual);
      }
      return;
    }

    indiceActualProc2Ref.current = indice + 1;
    setComandoActualProc2(indice + 1)

    const comandoActual = secuenciaProc2[indice]
    let nuevoSentido = sentidoActual
    let nuevaPos = { ...posActual }

    nuevoSentido = girarBot(comandoActual, setSentido, nuevoSentido)
    encenderLuzBot(comandoActual, nuevaPos)
    nuevaPos = moverBot(comandoActual, nuevoSentido, nuevaPos)

    setTimeout(() => {
      if (ejecutandoRef.current) {
        if (comandoActual === 'p1') {
          ejecutarProc1(0, nuevoSentido, nuevaPos, (sentidoCuandoTermine, posCuandoTermine) => {
            ejecutarProc2(indice + 1, sentidoCuandoTermine, posCuandoTermine, callbackCuandoTermine)
          });
        } else if (comandoActual === 'p2') {
          ejecutarProc2(0, nuevoSentido, nuevaPos, callbackCuandoTermine)
        } else {
          ejecutarProc2(indice + 1, nuevoSentido, nuevaPos, callbackCuandoTermine)
        }
      }
    }, 1000);
  }

  // ← Para iniciar la ejecución (sin callback porque es la función principal):
  const iniciarEjecucion = () => {
    setPuedeEditar(false);
    setEjecutando(true);
    setSecuenciaTerminada(false);

    // Sin callback porque es la función principal
    ejecutarSecuenciaMain(0, sentido, pos, null);
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
            ejecutandoRef.current = false
            setPuedeEditar(true)
            setEjecutando(false)
            setAnimarCeldaLuces(true)
            setTimeout(() => {
              setTodasEncendidas(true)
            }, 1000);
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






  // useEffect(() => {
  //   console.log(secuencia);
  // }, [secuencia])



  const agregarComando = (comando, secuenciaActual, setSecuenciaActual, limiteDeComandosActual, setComandosRestantesActual) => {
    // console.log(secuenciaActual, limiteDeComandosActual);

    if (limiteDeComandosActual !== -1 &&
      secuenciaActual.length >= limiteDeComandosActual) return;
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
      case 'p2':
        setSecuenciaActual(prev => [...prev, 'p2'])
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
      // para quitar el comando marcado en proc1 cuando se vuelve a correr toda la secuencia
      setComandoActualProc1(-1)
      setEjecutando(true);
      // ejecutarSecuenciaMain(0, sentidoInicial, posInicial);
      iniciarEjecucion()
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
        indiceActualProc1Ref.current = 0;
        indiceActualProc2Ref.current = 0;
        setListoParaEjecutar(true);
      }, 200);

    } else if (ejecutando) {
      setEjecutando(false);
      setReiniciar(true);
      setMensajeLuz(false); // mensaje de éxito
      setComandoActual(-1)
      setComandoActualProc1(-1)
      setComandoActualProc2(-1)

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
    setComandoActualProc1(-1)
    setComandoActualProc2(-1)
    setReiniciar(true)
    // para que devuevla el transition
    setTimeout(() => {
      setReiniciar(false)
    }, 200);
    apagarLuces()
    indiceActualRef.current = 0
    indiceActualProc1Ref.current = 0
    indiceActualProc2Ref.current = 0
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


  // para hacer el tour con Driver.js

  useEffect(() => {
    if (!jugando) return;

    const steps = getSteps(mapaActual, cartaDeNivelActual);

    if (!steps || steps.length === 0) return;

    if (!driverRef.current) {

      driverRef.current = driver({
        showProgress: true,
        animate: true,
        allowClose: false,
        doneBtnText: 'Listo',
        nextBtnText: 'Siguiente',
        prevBtnText: 'Anterior',
        steps
      });


    }

    driverRef.current.drive();

    return () => {
      if (driverRef.current) {
        driverRef.current = null;
      }
    };
  }, [jugando]);



  return (
    <div className={`app-wrapper ${jugando ? 'mostrar' : ''}`}>

      {/* <Tour /> */}
      <div /*id='apppContenedor'*/ className={`
        app-contenedor
        ${!proc1 && !proc2 ? 'diseno-simple' : ''}
      `} >
        <Grilla pos={pos} sentido={sentido} filas={filas} columnas={columnas} mapa={mapa}
          botAnimado={botAnimado} colisionArriba={colisionArriba} colisionAbajo={colisionAbajo}
          colisionDerecha={colisionDerecha} colisionIzquierda={colisionIzquierda}
          reiniciar={reiniciar} ejecutando={ejecutando} secuencia={secuencia}
          indice={indiceActualRef.current} indiceProc1={indiceActualProc1Ref.current}
          jugando={jugando} secuenciaProc1={secuenciaProc1} todasEncendidas={animarCeldaLuces}
          setTodasEncendidas={setTodasEncendidas}

        />

        <Panel
          nivelActual={mapaActual}
          ejecutando={ejecutando} jugar={jugar} setSecuencia={setSecuencia} secuencia={secuencia}
          agregarComando={agregarComando} reiniciar={reiniciarFuncionBtn}
          comandoActualMain={comandoActualMain} comandoActualProc1={comandoActualProc1}
          puedeEditar={puedeEditar} jugando={jugando}
          limiteDeComandos={limiteDeComandos} comandosRestantes={comandosRestantes}
          setComandosRestantes={setComandosRestantes}

          proc1={proc1} secuenciaProc1={secuenciaProc1}
          setSecuenciaProc1={setSecuenciaProc1} limiteDeComandosProc1={limiteDeComandosProc1}
          comandosRestantesProc1={comandosRestantesProc1}
          setComandosRestantesProc1={setComandosRestantesProc1}

          proc2={proc2} secuenciaProc2={secuenciaProc2}
          setSecuenciaProc2={setSecuenciaProc2} limiteDeComandosProc2={limiteDeComandosProc2}
          comandosRestantesProc2={comandosRestantesProc2}
          setComandosRestantesProc2={setComandosRestantesProc2}
          comandoActualProc2={comandoActualProc2}

        />

      </div>
      <div>

        <PantallaGanar
          mensaje={mensaje}
          tipo={tipo}
          onCerrar={() => setTodasEncendidas(false)}
          todasEncendidas={todasEncendidas} handleSalir={handleSalir}
          setTodasEncendidas={setTodasEncendidas} setDebeReiniciar={setDebeReiniciar}
        />
      </div>


    </div>
  );

}

export default App