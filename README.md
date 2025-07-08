# 🧠 CodePilot: Juego de lógica con programación visual

**CodePilot** es un juego educativo estilo LightBot desarrollado con **React** y **Supabase**, diseñado para enseñar conceptos básicos de lógica y programación como movimiento secuencial, orientación y resolución de problemas mediante mapas interactivos.

## 🚀 Características

- 🧩 **15 niveles básicos** para aprender movimiento y dirección.
- 🛣️ **15 desafíos prácticos** para reforzar lo aprendido.
- 🔁 **15 rutinas variadas** con nuevos caminos y posiciones.
- ✍️ **Creador de mapas personalizados** con editor visual.
- 💾 **Autenticación y almacenamiento** con Supabase.
- 🌐 **Responsive**: compatible con computadoras y móviles (editor solo en PC).
- 🍪 **Inicio de sesión con cookies seguras**.

## 🛠️ Tecnologías utilizadas

- ⚛️ **React 19** + Vite
- 🔥 **Supabase** (Auth, DB, Realtime)
- 🎨 CSS personalizado + React Icons
- 📦 Deploy con **Vercel** (frontend) y **Render** (backend)

## 📷 Capturas

### 🧭 Vista del menú
![Vista del menú](./frontend/src/assets/menu.png)

### 🛠️ Editor de mapas
![Editor de mapas](./frontend/src/assets/editor.png)

### 🎮 Ejecución del juego
![Juego en acción](./frontend/src/assets/juego.jpg)


## 🧪 Instalación local

1. Clona este repositorio:

```bash
   git clone https://github.com/SEVERNASTER/CODEPILOT.git
   cd CODEPILOT
```

2. Instala las dependencias, copia y pega estos comandos y correlos de una vez para instalar dependencias tanto en el frontend como en el backend

``` bash
    cd frontend/
    npm install --legacy-peer-deps
    cd ../backend
    npm install --legacy-peer-deps
```

# ⚠️ Nota importante:
Si ocurre algún error relacionado con dependencias (npm ERR!), ejecuta el siguiente comando como alternativa:
``` bash
    npm install --force
```

## 🔐 Variables de entorno

### Dentro de la carpeta `frontend`, crear un archivo `.env` con el siguiente contenido:

```env
# Si vas a usar el backend en local:
VITE_BACKEND_URL=http://localhost:3000

# O si prefieres usar el backend desplegado:
VITE_BACKEND_URL=https://codepilot-backend.onrender.com

```

### 📁 Backend

Dentro de la carpeta `backend`, crea un archivo `.env` con las siguientes variables:

```env
    SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6dndjcmh4cm56Z2RnZWlmdHJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0NDc2MTYsImV4cCI6MjA2NjAyMzYxNn0.JvEGJb6l0tLglPsgbJ08W0Xosku3PDBTVJ8EJ_bJFEQ

    SERVICE_ROLE=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6dndjcmh4cm56Z2RnZWlmdHJ0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDQ0NzYxNiwiZXhwIjoyMDY2MDIzNjE2fQ.5SFe7Ud8bDILXsePfbeu4GOvoAb5zqBZ5Dl-6r82d-Y

    SUPABASE_URL=https://szvwcrhxrnzgdgeiftrt.supabase.co
```

## ▶️ Cómo iniciar el proyecto en local

### 🔹 Frontend

```bash
    cd ./frontend
    npm run dev
```

### Esto iniciará el frontend en modo desarrollo, normalmente en http://localhost:5173.

## 🔹 Backend

```bash
    cd ./backend
    npm start
```

### Esto levantará el servidor backend en http://localhost:3000, si todo está configurado correctamente.

## 📌 Mejoras futuras

Estas son algunas funcionalidades planeadas para futuras versiones del juego:

- 🔁 **Implementación de funciones `PROC1` y `PROC2`** para reutilizar secuencias de comandos.
- 🔄 **Soporte para bucles (LOOP)** al estilo del juego original LightBot.
- 🔀 **Más niveles avanzados** con estructuras más complejas y desafiantes.
- 🎯 **Sistema de logros y puntuaciones** para incentivar el aprendizaje.
- 🧪 **Modo de prueba libre** para experimentar sin restricciones.


## 🚀 Proyecto desplegado

- 🔗 Frontend: [https://codepilot-ten.vercel.app](https://codepilot-ten.vercel.app)
- 🔗 Backend: [https://codepilot-backend.onrender.com](https://codepilot-backend.onrender.com)

> ⚠️ **Nota:** El backend está desplegado en Render (plan gratuito), por lo que puede tardar unos segundos en "despertar" cuando se hace la primera solicitud. Esto es normal en servicios con free trial o tier gratuito.







