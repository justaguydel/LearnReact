import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Components/Body/Body'
import Header from './Components/Footer/Footer'
import Body from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div>
    <Header/>
    <Body/>
    <Footer/>
    <p1>Hello</p1>
    
    </div>
  )
}

export default App
