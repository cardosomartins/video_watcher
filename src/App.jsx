import { useState } from 'react'
import turtle from './public/turtle.png'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <div>
        <img src={turtle} alt="turtle" />
      </div>
    </>
  )
}

export default App
