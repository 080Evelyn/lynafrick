import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Lynlogo from '../../../src/assets/LYN.svg'

function Signup() {
        const [code, setCode] = useState("+0")
        const [isClicked, setIsClicked] = useState(false);

        const handleClick = () => {
            setIsClicked(!isClicked);
        };

        const countryCodes = [
        { code: "+234", name: "NGA" },
        { code: "+1", name: "USA" },
        { code: "+44", name: "GBR" },
        { code: "+91", name: "IND" },
        { code: "+1", name: "CAN" },
        { code: "+27", name: "ZAF" },
        { code: "+254", name: "KEN" },
        { code: "+233", name: "GHA" },
        { code: "+49", name: "DEU" },
        { code: "+33", name: "FRA" },
        { code: "+86", name: "CHN" },
        { code: "+81", name: "JPN" },
        { code: "+61", name: "AUS" },
        { code: "+55", name: "BRA" },
        { code: "+7", name: "RUS" },
        { code: "+52", name: "MEX" },
        { code: "+20", name: "EGY" },
        { code: "+82", name: "KOR" },
        { code: "+90", name: "TUR" },
        { code: "+966", name: "SAU" },
        ];

  return (
      
     <div className='flex flex-col items-center justify-center h-screen mx-auto mt-11 md:mt-[200px]'>
        <h1 className='text-[#141B34] font-bold text-[20px] md:text-[40px]'>LYNAFRICK</h1>
        <h3 className='text-[#00D094] font-semibold pt-6 md:pt-12 md:text-[30px]'>Sign Up</h3>
        <p className='text-[#01282F7A] text-center text-[9px] w-[170px] md:w-[400px] pt-1 md:text-[15px]'>Enter your credentials below to create a free account</p>
    
        <form action="" className='w-full max-w-[300px] p-6 space-y-5'>
            
         

            <div className='flex flex-col space-y-1 md:text-[15px]'>
                <label htmlFor="Fname"
                className='font-semibold text-[12px] text-[#00D094] md:text-[15px]'>
                  First Name
                </label>

                <input 
                type="text" 
                name=''
                className='py-2 bg-gray-200 outline-1 rounded text-gray-500 placeholder:text-[12px] placeholder:pl-3' placeholder='@Zeeno'/>
                
            </div>
            

            <div className='flex flex-col space-y-1 md:text-[15px]'>
                <label htmlFor="Lname" 
                className='font-semibold text-[12px] text-[#00D094] md:text-[15px]'>
                  Last Name
                </label>
                <input 
                type="text" 
                name=''
                className='py-2 bg-gray-200 outline-1 rounded text-gray-500 placeholder:text-[12px] placeholder:pl-3' placeholder='@Zeeno'/>
            </div>
            
            <div className='flex flex-col space-y-1 md:text-[15px]'>
                <label htmlFor="Email"
                className='font-semibold text-[12px] text-[#00D094] md:text-[15px]'>Email</label>
                <input 
                type="email" 
                name=''
                className='py-2 bg-gray-200 outline-1 rounded text-gray-500 placeholder:text-[12px] placeholder:pl-3' placeholder='******@gmail.com'/>
            </div>


            <div className='flex flex-col space-y-1 md:text-[15px]'>

                <label htmlFor="Phone"
                    className='font-semibold text-[12px] text-[#00D094] md:text-[15px]'>
                    Phone
                </label>

                <div className='flex space-x-3 md:text-[15px]'>
                    
                    <div 
                        className='bg-gray-200 outline-1 rounded text-[#00D094] flex items-center px-2 gap-x-1'
                        onClick={handleClick}>
                        
                        <span className='flex flex-col'>{code}</span>
                         
                        <IoIosArrowDown className='text-[12px]'/>
                        {isClicked && 
                        (<div>
                            {countryCodes.map((countryCode) => (
                            <div key={countryCode.code} 
                            className='flex flex-col items-center max-h-[150px] overflow-y-auto space-y-2'
                            onClick={() =>{
                                setCode(countryCode.code);
                                setIsClicked(false)}}>
                                <span>{countryCode.code}</span>
                                
                            </div>
                            ))}

                        </div>
                        )}

                    </div>
                    
                    {/* <input  */}
                    {/* type="number"  */}
                    {/* name='' */}
                    {/* className='py-2 bg-gray-200 outline-1 rounded text-gray-500 placeholder:text-[12px] placeholder:pl-3 w-12'/> */}
                
                    <input 
                    type="number" 
                    name=''
                    className='py-2 bg-gray-200 outline-1 rounded text-gray-500 placeholder:text-[12px] placeholder:pl-3 flex-1' placeholder='91**********'/>
                </div>

            </div>

            <button className='flex items-center md:mb-12  bg-gray-400 px-5 py-1 rounded-sm justify-center hover:bg-[#01282F] hover:text-white'>Submit</button>
        </form>
    </div>
  )
}

export default Signup;
