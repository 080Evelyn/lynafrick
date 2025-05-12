import React, { useState } from 'react'
import Lynlogo from '../../../src/assets/LYN.svg'

function Signup() {

  return (
      
     <div className='flex items-center justify-center h-screen mx-auto'>
    
        <form action="" className='w-full max-w-[300px] p-6 space-y-5'>
            
            <div className='flex space-x-2 align-center justify-center items-center'>
                <div className='font-bold text-2xl'>Sign Up</div>
                <div><img src={Lynlogo} alt="" /></div>
            </div>
            <div className='underline'></div>
            

            <div className='flex md:space-x-[55px]'>
                <label htmlFor="Name"
                className='font-semibold'>
                  Name:
                </label>

                <input 
                type="text" 
                name=''
                className='bg-gray-200 outline-1 rounded-sm text-gray-500'/>
            </div>
            

            <div className='flex md:space-x-14'>
                <label htmlFor="Email" 
                className='text-black font-semibold'>Email:</label>
                <input 
                type="email" 
                name=''
                className='bg-gray-200 outline-1 rounded-sm text-gray-500'/>
            </div>
            
            <div className='flex md:space-x-8'>
                <label htmlFor="Password"
                className='font-semibold'>Password:</label>
                <input 
                type="password" 
                name=''
                className='bg-gray-200 outline-1 rounded-sm text-gray-500'/>
            </div>

            <button className='flex items-center  bg-gray-400 px-5 py-1 rounded-sm justify-center hover:bg-[#01282F] hover:text-white'>Submit</button>
        </form>
    </div>
  )
}

export default Signup;
