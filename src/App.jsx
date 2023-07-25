import { useState } from 'react'
import './index.css'
import { Image, Player, Topbar } from "./components"
function App() {

  return (
    <div className="container">
      <img src="https://www.lofi.cafe/gifs/97e6IX0kayYTK.gif" alt="" className="cover-image" />
      <Topbar/>
      <Image/>
      <Player/>
    </div>
  )
}

export default App
