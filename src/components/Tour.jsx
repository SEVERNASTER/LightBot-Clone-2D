import Joyride from 'react-joyride';
import { useState } from 'react';

export default function Tour() {
    const [run, setRun] = useState(true);

    const pasosTour = [
        {
            target: '.grilla',
            content: 'Este es el mapa por donde se movera el bot'
        },
        {
            target: '.bot-contenedor',
            content: 'Este sera el bot que seguira tus comandos'
        },
        {
            target: '.botones-contenedor',
            content: 'Puedes agregar comandos para armar la secuencia que seguira el bot'
        },
        {
            target: '.boton-luz',
            content: 'Usa este boton encender las luces, que es el objetivo en este momento'
        },
        {
            target: '.boton-jugar',
            content: 'Presiona este boton cuando estes listo para iniciar la secuencia'
        },
        {
            target: '.boton-reiniciar',
            content: 'Presiona este boton para reiniciar y volver a la posicion original'
        },
        {
            target: '.grilla',
            content: 'Habra obstaculos en el mapa, no podras atravesarlos, buena suerte'
        }
    ]

    return (
        <Joyride
            steps={pasosTour}
            run={run}
            continuous
            scrollToFirstStep
            showProgress
            showSkipButton
            styles={{
                options: {
                    zIndex: 10000,
                },
            }}
        />
    );
}
