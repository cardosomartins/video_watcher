import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import turtle from './public/turtle.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <img src={turtle} alt="turtle" />
      </div>
      <h1>Turtle Videos</h1>
      <div className="card">
        <button onClick={() => setCount((prevCount) => count + 1)}>
          count is {count} and the previous value was:{count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
