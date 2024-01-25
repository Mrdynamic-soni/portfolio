import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Home from './components/Home/Home'

const App = () => {
  return (
 <BrowserRouter>
 <NavigationBar/>
  <Routes>
  <Route path="/" element={<Home/>} />
  </Routes>
 </BrowserRouter>
  )
}

export default App