import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(10)

  const addValue = ()=>{
    setCounter(Math.min(counter+1,20))
  }
  const removeValue = ()=>{
    setCounter(Math.max(counter-1,0))
    
  }

  return (
    <>
    <h1>Counter Project</h1>
    <h2>Click on "Increase" to increase the value and Click on "Decrease" to decrease the value</h2>
    <h2>Value: {counter}</h2>
    <br />
    <button onClick={addValue}>Increase</button>
    <br />
    <br />
    <button onClick={removeValue}>Decrease</button>
    <br />
    <p>Range of the value is 0-20</p>
    </>
  )
}

export default App
