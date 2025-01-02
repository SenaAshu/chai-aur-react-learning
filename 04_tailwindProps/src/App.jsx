import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 p-4 rounded-lg mb-2'>Tailwind</h1>
    <Card name="Henry Classen" work="Software tester, California" img="https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    <Card name="Tony Stark" work="Staff Engineer, Algolia" img="https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=600"/>
    </>
  )
}

export default App
