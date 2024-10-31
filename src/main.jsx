import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SearchDescription from './FirstComponent/SearchDescription.jsx'
import SearchBarComponent from './FirstComponent/SearchBarComponent.jsx'
import TitleComponent from './FirstComponent/TitleComponent.jsx'

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <TitleComponent/>
    <App/>
    <SearchDescription/>
    <SearchBarComponent/>
  </StrictMode>
)
