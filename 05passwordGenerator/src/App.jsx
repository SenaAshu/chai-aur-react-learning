import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length,setLength] = useState(8)
  const [number,numberAllowed] = useState(false)
  const [character,characterAllowed] = useState(false)
  const [password,setPassword] = useState("")

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  
  const generatePassword = useCallback( ()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "0123456789"
    if(character) str += "!@#$%^&*()_+-={}|[]'<>?/"
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,number,character])

  useEffect(()=>{
    generatePassword()
  },[length,number,character,generatePassword])
  
  return (
    <div className='w-screen h-screen flex justify-center max-sm:justify-start items-center' style={{backgroundColor:"#433878"}}>
      <div className='h-1/3 w-1/2 rounded-3xl p-10 max-sm:w-full ' style={{backgroundColor:"#7E60BF"}}>
         <p className='font-bold text-4xl text-center'>PASSWORD GENERATOR</p>
          <div className="my-10 flex space-x-2 items-center">
              <input 
                 type="text" 
                  placeholder="Password" 
                  value={password}
                  readOnly
                  className="w-4/5 h-14 px-4 rounded-md border text-orange-500 font-semibold border-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 transition duration-200 text-2xl"
                  style={{ backgroundColor: 'white' }} 
                  ref={passwordRef}
               />
              <button 
                className="rounded-md w-1/5 h-14 text-white font-semibold bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 cursor-pointer"
                onClick={copyPasswordToClipboard}
                >COPY
               </button>
         </div>
            <div className='flex justify-between max-sm:justify-center max-sm:space-x-5 px-20'>
              <div>
                <input type="range" 
                  min={6} 
                  max={30} 
                  value={length} 
                  onChange={e=>setLength(e.target.value)} 
                  className='my-2 max-sm:my-0 cursor-pointer' 
                /> 
                <label htmlFor="" className='text-2xl'>Length:{length}</label>
              </div>

              <div>
                <input type="checkbox" 
                  className='scale-150 h-4 mx-1 cursor-pointer ' 
                  defaultChecked={number}
                  onChange={()=>{
                    numberAllowed((prev)=>!prev)
                  }}
                /> 
                <label htmlFor="" className='text-2xl'> Numbers</label>
              </div>

              <div>
                <input type="checkbox" 
                  className='scale-150 h-4 mx-1 cursor-pointer'
                  defaultChecked={character}
                  onChange={()=>{
                    characterAllowed((prev)=>!prev)
                  }}
                  /> <label htmlFor="" className='text-2xl'> Characters</label></div>
            </div>
        </div>
   </div>
  )
}

export default App
