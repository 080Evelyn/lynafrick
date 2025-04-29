import { useState } from 'react'
import './index.css'
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Components/pages/Home'
import Product from './Components/pages/product'
import AboutUs from './Components/pages/aboutUs'
import ContactUs from './Components/pages/contactUs'
import Blog from './Components/pages/blog'

function App() {

  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    
    </>
  )
}

export default App;
