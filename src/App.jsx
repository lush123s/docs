import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './Background'
import Foreground from './Foreground'

function App() {

  return (
    <>
    <div className="container relative w-full h-screen bg-zinc-800 text-zinc-900">
     <Background/>
    <Foreground/>
     </div>
    </>
  )
}

export default App
