import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Product from './components/Product'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='products' element={<Products />}></Route>
        <Route path='products/:id' element={<Product />} />
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
