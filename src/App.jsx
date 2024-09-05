import React, { useState }  from "react"
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer"
import Login from "./pages/Login/Login"
import ExpandableList from "./pages/Report/Report"
import Landing from "./pages/Landing/Landing"
function App() {
  const location = useLocation()
  return (
    <div className='app'>
      {location.pathname !== '/signin' && <Navbar value={location.pathname === '/' ? true : false} />}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/report' element={<ExpandableList/>}/>
      </Routes>
      {location.pathname !== '/signin' && <Footer />}
    </div>
  )
}
export default App
