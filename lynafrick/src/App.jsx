// import { useState } from "react";
// // import './index.css'
// import NavBar from "./Components/NavBar";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Home from "./Components/pages/Home";
// import Product from "./Components/pages/product";
// import AboutUs from "./Components/pages/aboutUs";
// import ContactUs from "./Components/pages/contactUs";
// import Blog from "./Components/pages/blog";
// import Profile from "./Components/pages/profile";
// import Cart from "./Components/pages/shoppingCart";
// import Login from "./Components/login/Login";
// import Signup from "./Components/signup/Signup";
// import Footer from "./Components/Footer";
// import FilterCategories from "./Components/FilterCategories";
// import DetailPage from "./Components/pages/detailPage";
// import Products from "./Components/pages/product";
import ContentPage from "./Components/pages/ContentPage";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <div>
        <CartProvider>
          <ContentPage />
        </CartProvider>
      </div>
    </>
  );
}

export default App;
