

import tourBot1 from '../assets/tourbot1.png';
import tourBot2 from '../assets/tourbot2.png';
import tourBot3 from '../assets/tourbot3.png';
import tourBot4 from '../assets/tourbot4.png';
import tourBot5 from '../assets/tourbot5.png';
import tourBot6 from '../assets/tourbot6.png';
import tourBot7 from '../assets/tourbot7.png';
import tourBot8 from '../assets/tourbot8.png';



const getSteps = (nivel) => {
    switch (nivel) {
        case 1:
            return [
                {
                    element: '#apppContenedor',
                    popover: {
                        title: 'Lightbot',
                        description: `
                <div style="display:flex; align-items:center; gap:10px;">
                  <img src=${tourBot1} alt="Bot" style="width:100px; height:150px;"/>
                  <span 
                    style="text-align:center"
                  >¡Hola! Bienvenido a LightBot. ¡Qué bueno tenerte aquí!</span>
                </div>  
              `
                    }
                },
                {
                    // 16 por que el bot cuenta igual
                    element: '.grilla .celda:nth-child(16)',
                    popover: {
                        title: 'Lightbot',
                        description: `
                <div style="display:flex; align-items:center; gap:10px;">
                  <img src=${tourBot2} alt="Bot" style="width:100px; height:150px;"/>
                  <span 
                    style="text-align:center"
                  >Necesito tu ayuda para enceder todas las luces</span>
                </div>  
              `
                    }
                },
                {
                    element: '.grilla',
                    popover: {
                        title: 'Lightbot',
                        description: `
                <div style="display:flex; align-items:center; gap:10px;">
                  <img src=${tourBot7} alt="Bot" style="width:100px; height:150px;"/>
                  <span 
                    style="text-align:center"
                  >Este es el mapa que recorreré</span>
                </div>  
              `
                    }
                },
                {
                    element: '.grilla .celda:nth-child(8)',
                    popover: {
                        title: 'Lightbot',
                        description: `
                <div style="display:flex; align-items:center; gap:10px;">
                  <img src=${tourBot8} alt="Bot" style="width:100px; height:150px;"/>
                  <span 
                    style="text-align:center"
                  >Estos son obstáculos y no puedo atravesarlos</span>
                </div>  
              `
                    }
                },
                {
                    element: '.botones-contenedor .boton-funcional:first-child',
                    popover: {
                        title: 'Lightbot',
                        description: `
                <div style="display:flex; align-items:center; gap:10px;">
                  <img src=${tourBot5} alt="Bot" style="width:100px; height:150px;"/>
                  <span 
                    style="text-align:center"
                  >El comando AVANZAR hace que me mueva un paso hacia adelante</span>
                </div>  
              `
                    }
                },
                {
                    element: '.botones-contenedor .boton-funcional:nth-child(2)',
                    popover: {
                        title: 'Lightbot',
                        description: `
                <div style="display:flex; align-items:center; gap:10px;">
                  <img src=${tourBot3} alt="Bot" style="width:100px; height:150px;"/>
                  <span 
                    style="text-align:center"
                  >El comando ENCENDER me dice que encienda la luz</span>
                </div>  
              `
                    }
                },
                {
                    element: '.bot-contenedor',
                    popover: {
                        title: 'Lightbot',
                        description: `
                <div style="display:flex; align-items:center; gap:10px;">
                  <img src=${tourBot8} alt="Bot" style="width:100px; height:150px;"/>
                  <span 
                    style="text-align:center"
                  >👀 Fíjate en la flecha junto a mí: indica hacia dónde me moveré</span>
                </div>  
              `
                    }
                },
                {
                    element: '#appContenedor',
                    popover: {
                        title: 'Lightbot',
                        description: `
                <div style="display:flex; align-items:center; gap:10px;">
                  <img src=${tourBot6} alt="Bot" style="width:100px; height:150px;"/>
                  <span 
                    style="text-align:center"
                  >Buena Suerte!</span>
                </div>  
              `
                    }
                },
            ]

        case 2:
            return [
                {
                    element: '#apppContenedor',
                    popover: {
                    title: 'Lightbot',
                    description: `
                        <div style="display:flex; align-items:center; gap:10px;">
                            <img src=${tourBot6} alt="Bot" style="width:100px; height:150px;"/>
                            <span 
                                style="text-align:center"
                            >Buen Trabajo!!</span>
                        </div>  
                    `
                    }
                },
                {
                    element: '.botones-contenedor',
                    popover: {
                    title: 'Lightbot',
                    description: `
                        <div style="display:flex; align-items:center; gap:10px;">
                            <img src=${tourBot1} alt="Bot" style="width:100px; height:150px;"/>
                            <span 
                                style="text-align:center"
                            >Aqui hay algunos comandos nuevos!</span>
                        </div>  
                    `
                    }
                },
                {
                    element: '.botones-contenedor .boton-funcional:nth-child(3)',
                    popover: {
                    title: 'Lightbot',
                    description: `
                        <div style="display:flex; align-items:center; gap:10px;">
                            <img src=${tourBot1} alt="Bot" style="width:100px; height:150px;"/>
                            <span 
                                style="text-align:center"
                            >El comando IZQUIERDA me dice que de vuelta a la izquierda (contrario a las agujas del reloj)</span>
                        </div>  
                    `
                    }
                },
                {
                    element: '.botones-contenedor .boton-funcional:nth-child(4)',
                    popover: {
                    title: 'Lightbot',
                    description: `
                        <div style="display:flex; align-items:center; gap:10px;">
                            <img src=${tourBot7} alt="Bot" style="width:100px; height:150px;"/>
                            <span 
                                style="text-align:center"
                            >Y el comando DERECHA me dice que de vuelta a la derecha (en el sentido de las agujas del reloj)</span>
                        </div>  
                    `,
                    }
                },
                {
                    element: '#appContenedor',
                    popover: {
                    title: 'Lightbot',
                    description: `
                        <div style="display:flex; align-items:center; gap:10px;">
                            <img src=${tourBot4} alt="Bot" style="width:100px; height:150px;"/>
                            <span 
                                style="text-align:center"
                            >Buena Suerte!!</span>
                        </div>  
                    `,
                    
                    }
                },
            ]

        default:
            break;
    }

}

export default getSteps;