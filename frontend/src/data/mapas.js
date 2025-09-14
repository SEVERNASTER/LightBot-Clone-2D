

export const mapas1 = [
    // NIVEL 1: Primer contacto - solo avanzar y encender
    {
        mapa: [
            [0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 0, 0, 0, 2],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5,
        bot: {
            pos: { fila: 2, columna: 0 },
            direccionInicial: 90
        },
        limiteDeComandos: -1,
        proc1: false,
        limiteDeComandosProc1: -1,
        proc2: false,
        limiteDeComandosProc2: -1
    },

    // NIVEL 2: Introducir el giro - movimiento en L
    {
        mapa: [
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 0, 0],
            [2, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
        ],
        filas: 5,
        columnas: 5,
        bot: {
            pos: { fila: 1, columna: 0 },
            direccionInicial: 90
        },
        limiteDeComandos: -1,
        proc1: false,
        limiteDeComandosProc1: -1,
        proc2: false,
        limiteDeComandosProc2: -1
    },

    // NIVEL 3: Primer obstáculo
    {
        mapa: [
            [1, 1, 1, 1, 1],
            [2, 0, 2, 1, 1],
            [0, 0, 0, 0, 0],
            [1, 1, 2, 0, 2],
            [1, 1, 1, 1, 1],
        ],
        filas: 5,
        columnas: 5,
        bot: {
            pos: { fila: 3, columna: 4 },
            direccionInicial: 270
        },
        limiteDeComandos: -1,
        proc1: false,
        limiteDeComandosProc1: -1,
        proc2: false,
        limiteDeComandosProc2: -1
    },

    // NIVEL 4: Camino en S
    {
        mapa: [
            [0, 2, 0, 2, 0],
            [1, 1, 1, 0, 0],
            [0, 2, 0, 2, 0],
            [0, 0, 1, 1, 1],
            [0, 2, 0, 2, 0],
        ],
        filas: 5,
        columnas: 5,
        bot: {
            pos: { fila: 4, columna: 3 },
            direccionInicial: 270
        },
        limiteDeComandos: -1,
        proc1: false,
        limiteDeComandosProc1: -1,
        proc2: false,
        limiteDeComandosProc2: -1
    },

    // NIVEL 6: Dos luces - concepto múltiple
    {
        mapa: [
            [0, 0, 0, 2, 0],
            [1, 1, 1, 0, 1],
            [0, 0, 0, 0, 0],
            [1, 0, 1, 1, 1],
            [0, 0, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5,
        bot: {
            pos: { fila: 4, columna: 0 },
            direccionInicial: 90
        },
        limiteDeComandos: -1,
        proc1: false,
        limiteDeComandosProc1: -1,
        proc2: false,
        limiteDeComandosProc2: -1
    },

    // NIVEL 7: Pasillo con obstáculos
    {
        mapa: [
            [2, 1, 0, 1, 0],
            [0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 1, 3, 1, 0],
        ],
        filas: 5,
        columnas: 5,
        bot: {
            pos: { fila: 0, columna: 0 },
            direccionInicial: 180
        },
        limiteDeComandos: -1,
        proc1: false,
        limiteDeComandosProc1: -1,
        proc2: false,
        limiteDeComandosProc2: -1
    },

    // NIVEL 8: Laberinto simple
    {
        mapa: [
            [2, 1, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 0, 0, 1, 0],
            [1, 1, 0, 1, 0],
            [0, 0, 0, 0, 3],
        ],
        filas: 5,
        columnas: 5,
        bot: {
            pos: { fila: 0, columna: 0 },
            direccionInicial: 180
        },
        limiteDeComandos: -1,
        proc1: false,
        limiteDeComandosProc1: -1,
        proc2: false,
        limiteDeComandosProc2: -1
    },

    // NIVEL 9: Patrón en cruz - posición central
    {
        mapa: [
            [1, 1, 2, 1, 1],
            [1, 0, 0, 0, 1],
            [2, 0, 2, 0, 2],
            [1, 0, 0, 0, 0],
            [1, 1, 2, 1, 1],
        ],
        filas: 5,
        columnas: 5,
        bot: {
            pos: { fila: 2, columna: 2 },
            direccionInicial: 0
        },
        limiteDeComandos: -1,
        proc1: false,
        limiteDeComandosProc1: -1,
        proc2: false,
        limiteDeComandosProc2: -1
    },

    // NIVEL 13: Múltiples luces con obstáculos (CON LÍMITE)
    {
        mapa: [
            [0, 1, 3, 1, 0],
            [0, 0, 0, 0, 0],
            [1, 0, 1, 0, 1],
            [0, 0, 0, 0, 0],
            [0, 1, 3, 1, 3],
        ],
        filas: 5,
        columnas: 5,
        bot: {
            pos: { fila: 0, columna: 0 },
            direccionInicial: 90
        },
        limiteDeComandos: -1,
        proc1: false,
        limiteDeComandosProc1: -1,
        proc2: false,
        limiteDeComandosProc2: -1
    },

    // NIVEL 14: Patrón complejo (CON LÍMITE)
    {
        mapa: [
            [2, 1, 1, 1, 2],
            [0, 0, 1, 0, 0],
            [1, 0, 0, 0, 1],
            [0, 0, 1, 0, 0],
            [2, 1, 1, 1, 2],
        ],
        filas: 5,
        columnas: 5,
        bot: {
            pos: { fila: 2, columna: 2 },
            direccionInicial: 270
        },
        limiteDeComandos: -1,
        proc1: false,
        limiteDeComandosProc1: -1,
        proc2: false,
        limiteDeComandosProc2: -1
    },

    // NIVEL 15: Desafío final (CON LÍMITE ESTRICTO)
    {
        mapa: [
            [2, 0, 1, 0, 3],
            [1, 0, 1, 0, 1],
            [0, 0, 0, 0, 0],
            [1, 0, 1, 0, 1],
            [3, 0, 1, 0, 3],
        ],
        filas: 5,
        columnas: 5,
        bot: {
            pos: { fila: 0, columna: 0 },
            direccionInicial: 90
        },
        limiteDeComandos: -1,
        proc1: false,
        limiteDeComandosProc1: -1,
        proc2: false,
        limiteDeComandosProc2: -1
    },

    // NIVEL 11: Esquinas - múltiples giros (CON LÍMITE)
    {
        mapa: [
            [1, 1, 1, 1, 1],
            [1, 0, 2, 0, 1],
            [1, 2, 1, 2, 1],
            [1, 0, 2, 0, 1],
            [1, 1, 1, 1, 1],
        ],
        filas: 5,
        columnas: 5,
        bot: {
            pos: { fila: 3, columna: 2 },
            direccionInicial: 270
        },
        limiteDeComandos: 13,
        proc1: false,
        limiteDeComandosProc1: -1,
        proc2: false,
        limiteDeComandosProc2: -1
    },

    {
        mapa: [
            [1, 2, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 2, 0, 0],
            [1, 0, 1, 1, 0, 1],
            [0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 0],
        ],
        filas: 6,
        columnas: 6,
        bot: {
            pos: { fila: 4, columna: 0 },
            direccionInicial: 90
        },
        limiteDeComandos: 13,
        proc1: false,
        limiteDeComandosProc1: -1,
        proc2: false,
        limiteDeComandosProc2: -1
    },
    {
        mapa: [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 2, 0, 0, 0],
            [1, 2, 1, 1, 0, 1],
            [0, 0, 0, 0, 2, 0],
        ],
        filas: 6,
        columnas: 6,
        bot: {
            pos: { fila: 0, columna: 0 },
            direccionInicial: 90
        },
        limiteDeComandos: 18,
        proc1: false,
        limiteDeComandosProc1: -1,
        proc2: false,
        limiteDeComandosProc2: -1
    },
    {
        mapa: [
            [0, 1, 1, 0, 1, 0],
            [0, 0, 0, 2, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 1, 1, 0, 2, 0],
            [0, 0, 0, 2, 1, 0],
        ],
        filas: 6,
        columnas: 6,
        bot: {
            pos: { fila: 5, columna: 0 },
            direccionInicial: 90
        },
        limiteDeComandos: 17,
        proc1: false,
        limiteDeComandosProc1: -1,
        proc2: false,
        limiteDeComandosProc2: -1
    },

    
];



export const mapas2 = [

    // mapa 2: mapa en forma de C
    {
        mapa: [
            [0, 0, 0, 0, 2],
            [1, 1, 1, 1, 0],
            [1, 1, 1, 1, 0],
            [1, 1, 1, 1, 0],
            [2, 0, 0, 0, 2],
        ],
        filas: 5,
        columnas: 5,
        bot: { pos: { fila: 0, columna: 0 }, direccionInicial: 90 },
        limiteDeComandos: 5,
        proc1: true,
        proc2: false,
        limiteDeComandosProc1: 6,
        limiteDeComandosProc2: -1,
    },
    // mapa 3: mapa en forma de S
    {
        mapa: [
            [2, 0, 0, 0, 2],
            [0, 1, 1, 1, 1],
            [2, 0, 0, 0, 2],
            [1, 1, 1, 1, 0],
            [0, 0, 0, 0, 2],
        ],
        filas: 5,
        columnas: 5,
        bot: { pos: { fila: 4, columna: 0 }, direccionInicial: 90 },
        limiteDeComandos: 10,
        proc1: true,
        proc2: false,
        limiteDeComandosProc1: 5,
        limiteDeComandosProc2: -1,
    },
    // Mapa 4: Escalera simple - patrón repetitivo básico
    {
        mapa: [
            [0, 0, 0, 2, 0],
            [0, 0, 1, 1, 0],
            [0, 2, 1, 0, 0],
            [0, 1, 1, 0, 0],
            [2, 1, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5,
        bot: { pos: { fila: 4, columna: 0 }, direccionInicial: 0 }, // hacia arriba
        limiteDeComandos: 6,
        proc1: true,
        proc2: false,
        limiteDeComandosProc1: 5,
        limiteDeComandosProc2: -1,
    },

    // Mapa 5: Cruz con patrón repetitivo
    {
        mapa: [
            [1, 1, 2, 1, 1],
            [1, 1, 0, 1, 1],
            [2, 0, 0, 0, 2],
            [1, 1, 0, 1, 1],
            [1, 1, 2, 1, 1],
        ],
        filas: 5,
        columnas: 5,
        bot: { pos: { fila: 2, columna: 2 }, direccionInicial: 0 }, // centro, hacia arriba
        limiteDeComandos: 8,
        proc1: true,
        proc2: false,
        limiteDeComandosProc1: 5,
        limiteDeComandosProc2: -1,
    },
    // Mapa 6: Patrón de escalera
    {
        mapa: [
            [1, 1, 1, 0, 2],
            [1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1],
            [0, 0, 1, 1, 1],
            [0, 1, 1, 1, 1],
        ],
        filas: 5,
        columnas: 5,
        bot: { pos: { fila: 4, columna: 0 }, direccionInicial: 0 },
        limiteDeComandos: 12,
        proc1: true,
        proc2: false,
        limiteDeComandosProc1: 8,
        limiteDeComandosProc2: -1,
    },

    // mapa 7: mapa con forma de E
    {
        mapa: [
            [0, 0, 0, 0, 2],
            [0, 1, 1, 1, 1],
            [0, 0, 0, 0, 2],
            [0, 1, 1, 1, 1],
            [0, 0, 0, 0, 2],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 0, columna: 0 }, direccionInicial: 90 },
        limiteDeComandos: 12,
        proc1: true,
        proc2: false,
        limiteDeComandosProc1: 8,
        limiteDeComandosProc2: -1,
    },

    {
        mapa: [
            [1, 0, 0, 2, 0],
            [0, 1, 0, 1, 0],
            [0, 1, 0, 0, 2],
            [0, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5,
        bot: { pos: { fila: 4, columna: 0 }, direccionInicial: 0 },
        limiteDeComandos: 12,
        proc1: true,
        proc2: false,
        limiteDeComandosProc1: 6,
        limiteDeComandosProc2: -1,
    },
    {
        mapa: [
            [1, 1, 0, 0, 0],
            [0, 0, 0, 2, 1],
            [1, 1, 1, 0, 0],
            [0, 0, 0, 1, 0],
            [2, 1, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 4, columna: 2 }, direccionInicial: 0 },
        limiteDeComandos: -1,
        proc1: false,
        proc2: false,
        limiteDeComandosProc1: 6,
        limiteDeComandosProc2: -1,
    },
    {
        mapa: [
            [0, 0, 0, 1, 2],
            [1, 1, 0, 1, 0],
            [0, 0, 0, 0, 0],
            [1, 0, 1, 1, 1],
            [0, 0, 0, 0, 2],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 2, columna: 0 }, direccionInicial: 90 },
        limiteDeComandos: -1,
        proc1: false,
        proc2: false,
        limiteDeComandosProc1: 6,
        limiteDeComandosProc2: -1,
    },
    {
        mapa: [
            [0, 0, 0, 0, 2],
            [0, 1, 1, 1, 1],
            [2, 0, 0, 0, 0],
            [0, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 0, columna: 0 }, direccionInicial: 90 },
        limiteDeComandos: -1,
        proc1: false,
        proc2: false,
        limiteDeComandosProc1: 6,
        limiteDeComandosProc2: -1,
    },
    {
        mapa: [
            [0, 1, 1, 1, 2],
            [0, 0, 0, 1, 0],
            [1, 1, 0, 1, 0],
            [0, 0, 0, 0, 0],
            [2, 1, 1, 1, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 1, columna: 0 }, direccionInicial: 0 },
        limiteDeComandos: -1,
        proc1: false,
        proc2: false,
        limiteDeComandosProc1: 6,
        limiteDeComandosProc2: -1,
    },
    {
        mapa: [
            [0, 0, 2, 1, 0],
            [1, 0, 0, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [2, 0, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 0, columna: 0 }, direccionInicial: 90 },
        limiteDeComandos: -1,
        proc1: false,
        proc2: false,
        limiteDeComandosProc1: 6,
        limiteDeComandosProc2: -1,
    },
    {
        mapa: [
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 0],
            [0, 0, 0, 2, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 2, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 2, columna: 0 }, direccionInicial: 90 },
        limiteDeComandos: -1,
        proc1: false,
        proc2: false,
        limiteDeComandosProc1: 6,
        limiteDeComandosProc2: -1,
    },
    {
        mapa: [
            [0, 1, 2, 1, 0],
            [0, 1, 0, 1, 0],
            [0, 1, 0, 0, 0],
            [0, 1, 1, 1, 2],
            [0, 0, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 4, columna: 0 }, direccionInicial: 0 },
        limiteDeComandos: -1,
        proc1: false,
        proc2: false,
        limiteDeComandosProc1: 6,
        limiteDeComandosProc2: -1,
    },
    {
        mapa: [
            [2, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 2],
            [0, 0, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 0, columna: 1 }, direccionInicial: 90 },
        limiteDeComandos: -1,
        proc1: false,
        proc2: false,
        limiteDeComandosProc1: 6,
        limiteDeComandosProc2: -1,
    },
    // mapa 1: Cuatro esquinas con luz
    {
        mapa: [
            [2, 0, 0, 0, 2],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [2, 0, 0, 0, 2],
        ],
        filas: 5,
        columnas: 5,
        bot: { pos: { fila: 0, columna: 0 }, direccionInicial: 90 },
        limiteDeComandos: 5,
        proc1: true,
        proc2: false,
        limiteDeComandosProc1: 6,
        limiteDeComandosProc2: -1,
    },
];

export const mapas3 = [
    {
        mapa: [
            [0, 2, 2, 2, 2],
            [1, 1, 1, 1, 0],
            [2, 2, 2, 2, 0],
            [0, 1, 1, 1, 1],
            [0, 2, 2, 2, 2],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 0, columna: 0 }, direccionInicial: 90 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 8,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [1, 0, 0, 2, 0],
            [0, 1, 0, 1, 0],
            [0, 1, 0, 0, 2],
            [0, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 4, columna: 0 }, direccionInicial: 0 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [2, 1, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 1, 2, 1, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 0, columna: 4 }, direccionInicial: 180 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [0, 0, 0, 0, 2],
            [1, 1, 1, 1, 0],
            [2, 0, 0, 0, 0],
            [0, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 2, columna: 1 }, direccionInicial: 90 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [0, 2, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 2],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 0, columna: 0 }, direccionInicial: 90 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [2, 1, 0, 2, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 4, columna: 2 }, direccionInicial: 0 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [2, 0, 0, 0, 2],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 0, columna: 2 }, direccionInicial: 180 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [0, 1, 1, 1, 0],
            [2, 0, 0, 0, 2],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 3, columna: 2 }, direccionInicial: 0 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [0, 0, 0, 0, 2],
            [1, 1, 1, 0, 0],
            [2, 0, 0, 0, 1],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 0, columna: 0 }, direccionInicial: 90 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [2, 0, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [1, 1, 2, 1, 1],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 1, columna: 1 }, direccionInicial: 90 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [0, 1, 1, 1, 0],
            [2, 0, 0, 0, 2],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [2, 1, 0, 1, 2],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 3, columna: 2 }, direccionInicial: 90 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [0, 0, 0, 2, 0],
            [0, 1, 1, 1, 0],
            [0, 1, 2, 1, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 4, columna: 0 }, direccionInicial: 0 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [2, 0, 1, 0, 2],
            [0, 1, 0, 1, 0],
            [1, 0, 2, 0, 1],
            [0, 1, 0, 1, 0],
            [2, 0, 1, 0, 2],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 2, columna: 2 }, direccionInicial: 180 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [2, 2, 2, 2, 2],
            [2, 1, 1, 1, 2],
            [2, 1, 0, 1, 2],
            [2, 1, 1, 1, 2],
            [2, 2, 2, 2, 2],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 2, columna: 2 }, direccionInicial: 0 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [0, 0, 2, 0, 0],
            [0, 1, 1, 1, 0],
            [2, 1, 0, 1, 2],
            [0, 1, 1, 1, 0],
            [0, 0, 2, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 0, columna: 0 }, direccionInicial: 90 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    }
];

export const mapas4 = [
    {
        mapa: [
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 2, 2, 2, 2],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 2, columna: 0 }, direccionInicial: 90 },
        limiteDeComandos: 1,
        proc1: true,
        limiteDeComandosProc1: 3,
        proc2: false,
        limiteDeComandosProc2: -1
    },
    {
        mapa: [
            [1, 2, 2, 2, 1],
            [2, 0, 0, 0, 2],
            [2, 0, 1, 0, 2],
            [2, 0, 0, 0, 2],
            [1, 2, 2, 2, 1],
        ],

        bot: { pos: { fila: 4, columna: 1 }, direccionInicial: 90 },

        filas: 5,
        columnas: 5, // Añadido


        limiteDeComandos: 1,
        proc1: true,
        limiteDeComandosProc1: 8,
        proc2: true,
        limiteDeComandosProc2: 8
    },
    {
        mapa: [
            [0, 1, 0, 0, 2, 0, 0],
            [0, 1, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 2, 0],
            [2, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0],
            [0, 2, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ],
        filas: 7,
        columnas: 7,
        bot: {
            pos: { fila: 6, columna: 0 }, // esquina inferior izquierda
            direccionInicial: 90          // hacia la derecha
        },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 8,
        proc2: true,
        limiteDeComandosProc2: 8
    },
    {
        mapa: [
            [0, 0, 0, 0, 2],
            [1, 1, 1, 1, 0],
            [2, 0, 0, 0, 0],
            [0, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 2, columna: 1 }, direccionInicial: 90 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [0, 2, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 2],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 0, columna: 0 }, direccionInicial: 90 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [2, 1, 0, 2, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 4, columna: 2 }, direccionInicial: 0 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [2, 0, 0, 0, 2],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 0, columna: 2 }, direccionInicial: 180 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [0, 1, 1, 1, 0],
            [2, 0, 0, 0, 2],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 3, columna: 2 }, direccionInicial: 0 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [0, 0, 0, 0, 2],
            [1, 1, 1, 0, 0],
            [2, 0, 0, 0, 1],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 0, columna: 0 }, direccionInicial: 90 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [2, 0, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [1, 1, 2, 1, 1],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 1, columna: 1 }, direccionInicial: 90 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [0, 1, 1, 1, 0],
            [2, 0, 0, 0, 2],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [2, 1, 0, 1, 2],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 3, columna: 2 }, direccionInicial: 90 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [0, 0, 0, 2, 0],
            [0, 1, 1, 1, 0],
            [0, 1, 2, 1, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 4, columna: 0 }, direccionInicial: 0 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [2, 0, 1, 0, 2],
            [0, 1, 0, 1, 0],
            [1, 0, 2, 0, 1],
            [0, 1, 0, 1, 0],
            [2, 0, 1, 0, 2],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 2, columna: 2 }, direccionInicial: 180 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [2, 2, 2, 2, 2],
            [2, 1, 1, 1, 2],
            [2, 1, 0, 1, 2],
            [2, 1, 1, 1, 2],
            [2, 2, 2, 2, 2],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 2, columna: 2 }, direccionInicial: 0 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    },
    {
        mapa: [
            [0, 0, 2, 0, 0],
            [0, 1, 1, 1, 0],
            [2, 1, 0, 1, 2],
            [0, 1, 1, 1, 0],
            [0, 0, 2, 0, 0],
        ],
        filas: 5,
        columnas: 5, // Añadido
        bot: { pos: { fila: 0, columna: 0 }, direccionInicial: 90 },
        limiteDeComandos: 12,
        proc1: true,
        limiteDeComandosProc1: 6,
        proc2: true,
        limiteDeComandosProc2: 6
    }
];


