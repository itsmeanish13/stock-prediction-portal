import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/Header' 
import Footer from './components/Footer'
import Body from './components/Body'
import Register from './components/Register'
import Login from './components/Login'
import AuthProvider from './AuthProvider'
import Dashboard from './components/dashboard/Dashboard'

import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthProvider>
        <BrowserRouter >
        <Header />
          <Routes>
            <Route path='/' element={<Body />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        <Footer />
        </BrowserRouter>
      </AuthProvider>
      
      
      
      
      
    </>
  )
}

export default App
