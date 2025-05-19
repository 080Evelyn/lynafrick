import { useState } from 'react'
import '../../../src/index.css'
import NavBar from '../NavBar'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './Home'
import Product from './product'
import AboutUs from './aboutUs'
import ContactUs from './contactUs'
import Blog from './blog'
import Profile from './profile'
import Cart from './shoppingCart'
import Login from '../login/Login'
import Signup from '../signup/Signup'
import Footer from '../Footer'
import FilterCategories from '../FilterCategories'
import DetailPage from './detailPage'
import Products from './product'
import ConfirmCode from './ConfirmCode'

function ContentPage() {
  const location = useLocation()

  // pages where you don't want NavBar and Footer
  const hideLayoutRoutes = ['/login', '/signup']
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname)

  return (
    <div className="min-h-screen flex flex-col">
      {!shouldHideLayout && <NavBar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/filter-categories" element={<FilterCategories />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/product/:id" element={<DetailPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/confirm-code" element={<ConfirmCode />} />
        </Routes>
      </main>

      {!shouldHideLayout && <Footer />}
    </div>
  )
}
export default ContentPage;