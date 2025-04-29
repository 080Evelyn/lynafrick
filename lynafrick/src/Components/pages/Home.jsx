import React from 'react'
import Image from '../../assets/Images/image.png'
import Arrowicon from '../../assets/circle.svg'
import { FaRegArrowAltCircleRight } from "react-icons/fa";


function Home() {
  return (
    <div className='relative w-full h-[310px] md:h-[565px]'>
        <img src={Image} alt="" className='w-full h-[310px] md:h-[565px] object-cover'/>

        <div className='absolute inset-0 flex flex-col text-[#FFFFFF] text-center top-[80px]'>
        
            <h1 className='h-[44px] font-bold text-[20px] md:text-[48px] leading-[22px] md:leading-[50px]'>
                <span className="block">Home Meal Away</span>
                <span className="block">From Home</span>
            </h1>

            <p className='text-[10px] tracking-tight md:text-[24px] pt-2 md:pt-16 text-center md:leading-[26px]'>
                <span className=''>"Enjoy the rich taste of Nigerian cuisine with handpicked </span><br />
                <span className=''>ingredients, ensuring every meal you cook reflects the culture,</span><br />
                <span className=''>heritage, and flavors of home.</span>
            </p>

            <div className='flex justify-center space-x-4 pt-[10px] text-[10px] md:text-[24px] md:pt-[30px]'>
                <button className='flex space-x-4 items-center border-0 p-[5px] bg-[#01282F]'>
                    <span className='flex items-center space-x-2'>
                        <span>Get Started</span>
                        <img src={Arrowicon} alt="" className='text-[10px] md:text-[20px]'/>
                    </span>
                </button>

                <button className='flex items-center border border-[#00D094] p-[5px]'>
                    <span className='flex items-center space-x-2'>
                        <span className='text-[#00D094]'>Learn more</span>
                        <img src={Arrowicon} alt="" className='text-[10px] md:text-[20px] color-[#00D094]'/>
                    </span>
                </button>
            </div>

            <div className='flex bg-[#FFFFFF] w-[380px] h-[41px]'>
                <div className='flex'>
                    <button>
                        Categories
                    </button>

                    <div></div>

                    <button>
                        Search
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;
