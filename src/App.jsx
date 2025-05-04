import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Cart from './Components/Cart/Cart'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Auth from './Components/Auth/Auth'

const App = () => {
  
  localStorage.clear();

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
      
    </div>
  )
}

export default App