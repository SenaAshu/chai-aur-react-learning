import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h2>
        Hello There! checking going on...
      </h2>
    </div>
  )
}

const trial = (<a href="https://google.com" target='_blank'>Touch me</a>)

const anotherUser = "welcome!!"

const newElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  "Click here to open Google",
  anotherUser
)

const trailMethod = React.createElement(
  'a',
  {href:'https://youtube.com',target:'YouTube'},
  'Click here to visit youtube'
)


createRoot(document.getElementById('root')).render(
  // MyApp()
  // trial
  trailMethod
  // App()
)
