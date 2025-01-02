import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("#7C6E7F")

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'style={{backgroundColor:color}}>
      <div className='fixed bottom-12  h-auto w-auto rounded-2xl bg-gray-200 p-4 flex gap-5'>
        <button className='p-4 rounded-full outline-none text-white transform transition-transform duration-200 hover:scale-110 ' style={{backgroundColor:"red"}} onClick={()=>{setcolor("red")}}>Red</button>
        <button className='p-4 rounded-full outline-none text-white transform transition-transform duration-200 hover:scale-110' style={{backgroundColor:"green"}} onClick={()=>{setcolor("green")}}>Green</button>
        <button className='p-4 rounded-full outline-none text-white transform transition-transform duration-200 hover:scale-110' style={{backgroundColor:"blue"}} onClick={()=>{setcolor("blue")}}>Blue</button>
        <button className='p-4 rounded-full outline-none transform transition-transform duration-200 hover:scale-110 ' style={{backgroundColor:"yellow"}} onClick={()=>{setcolor("yellow")}}>Yellow</button>
        <button className='p-4 rounded-full outline-none  text-white transform transition-transform duration-200 hover:scale-110' style={{backgroundColor:"black"}} onClick={()=>{setcolor("black")}}>Black</button>
        <button className='p-4 rounded-full outline-none transform transition-transform duration-200 hover:scale-110' style={{backgroundColor:"white"}} onClick={()=>{setcolor("white")}}>White</button>
        <button className='p-4 rounded-full outline-none transform transition-transform duration-200 hover:scale-110' style={{backgroundColor:"orange"}} onClick={()=>{setcolor("orange")}}>Orange</button>
        <button className='p-4 rounded-full outline-none transform transition-transform duration-200 hover:scale-110' style={{backgroundColor:"pink"}} onClick={()=>{setcolor("pink")}}>Pink</button>
        <button className='p-4 rounded-full outline-none text-white transform transition-transform duration-200 hover:scale-110' style={{backgroundColor:"brown"}} onClick={()=>{setcolor("brown")}}>Brown</button>
        <button className='p-4 rounded-full outline-none text-white transform transition-transform duration-200 hover:scale-110' style={{backgroundColor:"purple"}} onClick={()=>{setcolor("purple")}}>Purple</button>
        <button className='p-4 rounded-full outline-none text-white transform transition-transform duration-200 hover:scale-110' style={{backgroundColor:"gray"}} onClick={()=>{setcolor("gray")}}>Gray</button>
        <button className='p-4 rounded-full outline-none text-white transform transition-transform duration-200 hover:scale-110' style={{backgroundColor:"#28231D"}} onClick={()=>{setcolor("#28231D")}}>Charcoal</button>
        <button className='p-4 rounded-full outline-none text-white transform transition-transform duration-200 hover:scale-110' style={{backgroundColor:"teal"}} onClick={()=>{setcolor("teal")}}>Teal</button>
        <button className='p-4 rounded-full outline-none text-white transform transition-transform duration-200 hover:scale-110' style={{backgroundColor:"#D88863"}} onClick={()=>{setcolor("#D88863")}}>Sand</button>
        <button className='p-4 rounded-full outline-none transform transition-transform duration-200 hover:scale-110' style={{backgroundColor:"#C6E6FB"}} onClick={()=>{setcolor("#C6E6FB")}}>Arctic</button>
        <button className='p-4 rounded-full outline-none text-white transform transition-transform duration-200 hover:scale-110' style={{backgroundColor:"orchid"}} onClick={()=>{setcolor("orchid")}}>Orchid</button>
        
      </div>

    </div>
  )
}

export default App
