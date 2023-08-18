import { useState } from 'react'
import './index.css'
import './stars.css'
import { Main, Footer, Topbar } from "./components"

function App() {

  const [title, setTitle] = useState({
    title: "",
    href: "",
  })

  function handleTitle(title, href) {
    setTitle({title: title, href: href})
  }

  return (
    <>
      <div className="container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Topbar/>
        <Main title={title.title} href={title.href}/>
        <Footer handleTitle={handleTitle}/>
      </div>
    </>
    
  )
}

export default App
