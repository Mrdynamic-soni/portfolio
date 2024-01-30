import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Home from './components/Home/Home';
import About from './components/About/About'
import Careere from './components/Career/Careere';
import Work from "./components/Work/Work";
import HireMe from './components/HireMe/HireMe'

const App = () => {
  return (
 <BrowserRouter>
 <NavigationBar/>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element ={<About/>}/>
  <Route path="/career" element ={<Careere/>}/>
  <Route path="/work" element ={<Work/>}/>
  <Route path="/hire" element ={<HireMe/>}/>
  </Routes>
 </BrowserRouter>
  )
}

export default App