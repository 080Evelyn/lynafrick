import React from 'react'
import { NavLink } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";

function NavBar() {
  return (
    <div className='flex justify-between items-center px-[16px] md:px-[94.5px] bg-white md:py-[23px]'>
      <div>
        <h1 className='poppins-semibold text-[20px] md:text-[30px] text-[#00D094]'>LYN</h1>
      </div>

      <div>
        <IoIosMenu className='w-[24px] h-[24px] md:hidden'/>
        <ul className='hidden md:flex gap-[20px] items-center text-[#01282F]'>
                <li><NavLink to="/home" className='hover:font-semibold'>Home</NavLink></li>
                <li><NavLink to="/product" className='hover:font-semibold'>Product</NavLink></li>
                <li><NavLink to="/about-us" className='hover:font-semibold'>About Us</NavLink></li>
                <li><NavLink to="/contact-us" className='hover:font-semibold'>Contact Us</NavLink></li>
                <li><NavLink to="/blog" className='hover:font-semibold'>Blog</NavLink></li>
        </ul>
      </div>

      <div className='hidden md:flex items-center gap-[7px]'>
        <button className='hidden md:flex text-[#01282F] font-semibold'>Sign Up</button>
        <button className='hidden md:flex bg-[#01282F] text-white font-semibold px-[20px] py-[2px]'>Login</button>
      </div>
    </div>
  )
}

export default NavBar;
