import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SingleProduct from './components/SingleProduct'

function App() {
  return (
    <>
      <Navbar />

      <Footer />
    </>
  )
}

export default App
