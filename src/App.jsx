import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';

import Landing from './pages/Landing'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  )
}

export default App
