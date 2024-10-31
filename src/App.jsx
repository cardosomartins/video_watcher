import { useState } from 'react'
import turtle from './public/turtle.png'
import './App.css'
import TitleComponent from './Components/TitleComponent.jsx'
import SearchDescriptionComponent from './Components/SearchDescriptionComponent.jsx'
import SearchBarComponent from './Components/SearchBarComponent.jsx'

function App() {

  return (
    <>
      <TitleComponent/>
      <div>
        <img src={turtle} alt="turtle" />
      </div>
      <SearchDescriptionComponent/>
      <SearchBarComponent/>
    </>
  )
}

export default App
