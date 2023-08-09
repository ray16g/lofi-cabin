import { useState } from 'react'
import './index.css'
import './stars.css'
import { Main, Footer, Topbar } from "./components"

function App() {

  return (
    <>
      <div className="container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Topbar/>
        <Main/>
        <Footer/>
      </div>
    </>
    
  )
}

export default App
