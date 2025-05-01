import React, { useState } from 'react'

import { NavLink, Link } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";

function NavBar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  


  return (
    <div>

      {/* Hamburger Icon */}
      <div className='flex justify-between items-center px-[16px] md:px-[94.5px] bg-gray-200 md:py-[23px]'>
        <div>
          <h1 className='poppins-semibold text-[20px] md:text-[30px] text-[#00D094]'>LYN</h1>
        </div>

        <div>
          
          <ul className='hidden md:flex gap-[20px] items-center text-[#01282F]'>
                  <li><NavLink to="/home" className='hover:font-semibold'>Home</NavLink></li>
                  <li><NavLink to="/product" className='hover:font-semibold'>Product</NavLink></li>
                  <li><NavLink to="/about-us" className='hover:font-semibold'>About Us</NavLink></li>
                  <li><NavLink to="/contact-us" className='hover:font-semibold'>Contact Us</NavLink></li>
                  <li><NavLink to="/blog" className='hover:font-semibold'>Blog</NavLink></li>
          </ul>
        </div>

        <div className='hidden md:flex items-center gap-[7px]'>
          <button className='md:flex text-[#01282F] font-semibold'>Sign Up</button>
          <button className='md:flex bg-[#01282F] text-white font-semibold px-[20px] py-[2px]'>Login</button>
        </div>

        {/* Hamburger Icon */}
        <IoIosMenu className='w-[24px] h-[24px] md:hidden cursor-pointer' onClick={handleClick}/>

      </div>
        {/* Mobile Menu */}
        {click && (
        <div className='left-7 bg-gray-200 shadow-lg w-full md:hidden z-50'>
          <ul className='flex flex-col gap-[10px] items-start pl-3 text-[#01282F] py-[20px]'>
            <li><NavLink to="/home" className='hover:font-semibold' onClick={() => setClick(false)}>Home</NavLink></li>
            <li><NavLink to="/product" className='hover:font-semibold' onClick={() => setClick(false)}>Product</NavLink></li>
            <li><NavLink to="/about-us" className='hover:font-semibold' onClick={() => setClick(false)}>About Us</NavLink></li>
            <li><NavLink to="/contact-us" className='hover:font-semibold' onClick={() => setClick(false)}>Contact Us</NavLink></li>
            <li><NavLink to="/blog" className='hover:font-semibold' onClick={() => setClick(false)}>Blog</NavLink></li>
          </ul>
        </div>
      )}
    </div>
    
  )
}

export default NavBar;
