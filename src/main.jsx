import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { SideBar } from './components/Sidebar.jsx'
import { SectionContext } from './components/sections/SectionContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SectionContext>
      <App />
    </SectionContext>
  </StrictMode>,
)
