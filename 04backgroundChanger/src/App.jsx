import { useState } from "react"

function App() {
  const [color,setColor] = useState("black")
  return (
    <div className="h-screen w-full" style={{backgroundColor:color}}>
      <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-300 px-3 py-2 rounded-3xl">
          <button onClick={()=>setColor("red")} className="bg-red-500 text-white px-3 py-2 rounded-3xl">Red</button>
          <button onClick={()=>setColor("green")} className="bg-green-500 text-white px-3 py-2 rounded-3xl">Green</button>
          <button onClick={()=>setColor("blue")} className="bg-blue-500 text-white px-3 py-2 rounded-3xl">Blue</button>
          <button onClick={()=>setColor("yellow")} className="bg-yellow-300 text-white px-3 py-2 rounded-3xl">Yellow</button>
          <button onClick={()=>setColor("purple")} className="bg-purple-500 text-white px-3 py-2 rounded-3xl">Purple</button>
          <button onClick={()=>setColor("orange")} className="bg-orange-500 text-white px-3 py-2 rounded-3xl">Orange</button>
          <button onClick={()=>setColor("white")} className="bg-white text-black px-3 py-2 rounded-3xl">White</button>
          <button onClick={()=>setColor("black")} className="bg-black text-white px-3 py-2 rounded-3xl">Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
