import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MenuInicio from './layouts/MenuInicio.jsx';
import Main from './layouts/Main.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Main />
  </StrictMode>,
)
