import React from 'react'
import { BrowserRouter, Link, Routes } from 'react-router-dom'
import NavigationBar from './components/NavigationBar/NavigationBar'

const App = () => {
  return (
 <BrowserRouter>
 <NavigationBar/>
  <Routes>
  </Routes>
 </BrowserRouter>
  )
}

export default App