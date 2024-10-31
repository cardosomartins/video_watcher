import { useState } from 'react'
import turtle from './public/turtle.png'
import './App.css'
import TitleComponent from './FirstComponent/TitleComponent.jsx'
import SearchDescriptionComponent from './FirstComponent/SearchDescriptionComponent.jsx'
import SearchBarComponent from './FirstComponent/SearchBarComponent.jsx'

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
