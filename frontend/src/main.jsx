import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import Main from './pages/Main';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import CodePilot from './CodePilot';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CodePilot />
    </BrowserRouter>
  </StrictMode>,
)
