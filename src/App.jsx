import { useState, useEffect } from 'react'

import './App.css'
import Rick from './components/Rick'

function App() {

 
  return (
    <div className="App">
      <header className='header'><img className='logo' src='https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png'/></header>

     <Rick />
   

    </div>
  )
}

export default App
