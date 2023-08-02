import { useState } from 'react'
import './index.css'
import './stars.css'
import { Image, Player, Topbar } from "./components"

function App() {

  return (
    <>

      <div className="container">
      <div className='star' id="stars"></div>
      <div className='star' id="stars2"></div>
      <div className='star' id="stars3"></div>
        <Topbar/>
        <Image/>
        <Player/>
      </div>
    </>
    
  )
}

export default App
