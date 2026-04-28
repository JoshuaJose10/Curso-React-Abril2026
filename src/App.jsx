import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const nombre = 'Omar'

  return (
    <>
      <div>
        <p className='text-5xl font-black'>
          {nombre}
        </p>
      </div>
    </>
  )
}

export default App
