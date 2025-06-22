const gradientes = [
    { color1: "#ff00ff", color2: "#0000ff" },
    { color1: "#00ff00", color2: "#0000ff" },
    { color1: "#00ff00", color2: "#ff00ff" },
    { color1: "#ff8000", color2: "#ff00ff" },
    { color1: "#ff00ff", color2: "#ff8000" },
    { color1: "#ff8000", color2: "#ff00ff" },
    { color1: "#00ff00", color2: "#ff8000" },
    { color1: "#00ff00", color2: "#ff00ff" },
    { color1: "#ff00ff", color2: "#ff8000" },
    { color1: "#ff8000", color2: "#00ff00" },
    { color1: "#00ff00", color2: "#ff00ff" },
    { color1: "#ff00ff", color2: "#ff8000" },
    { color1: "#ff8000", color2: "#ff00ff" },
    { color1: "#ff00ff", color2: "#00ff00" },
    { color1: "#00ff00", color2: "#ff00ff" },
    { color1: "#ff00ff", color2: "#ff8000" }
];

export default function getColores() {
    const indice = Math.floor(Math.random() * gradientes.length);
    return gradientes[indice];
}

