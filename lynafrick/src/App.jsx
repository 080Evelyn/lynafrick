import { useState } from 'react'
import './index.css'
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Components/pages/Home'
import Product from './Components/pages/product'
import AboutUs from './Components/pages/aboutUs'
import ContactUs from './Components/pages/contactUs'
import Blog from './Components/pages/blog'
import Profile from './Components/pages/profile'
import Cart from './Components/pages/shoppingCart'
import Login from './Components/login/Login'
import Signup from './Components/signup/Signup'

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    
    </>
  )
}

export default App;
