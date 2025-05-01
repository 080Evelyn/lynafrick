import React from 'react'
import Image from '../../assets/Images/image.png'
import Arrowicon from '../../assets/circle.svg'
import Arrowicon2 from '../../assets/circleg.svg'
import Frame from '../../assets/Frame.svg'
import image1 from '../../assets/Images/kimage.png'
import  imageSt from '../../assets/Images/image (2).png'
import imageSo from '../../assets/Images/Soup1.png'
import imageSo1 from '../../assets/Images/Mask Group.png'
import imageGro from '../../assets/Images/Mask Group (1).png'
import imageSo2 from '../../assets/Images/image (3).png'
import imageSo3 from '../../assets/Images/Mask Group (2).png'


function Home() {
  return (

    <div className='bg-gray-200'>

        <div className='relative w-full h-[310px] md:h-[500px] bg-gray-200'>
            <img src={Image} alt="" className='w-full h-[290px] md:h-[445px] object-cover brightness-50'/>

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
                            <img src={Arrowicon} alt="" className='w-[10px] md:w-[20px]'/>
                        </span>
                    </button>

                    <button className='flex items-center border border-[#00D094] p-[5px]'>
                        <span className='flex items-center space-x-2'>
                            <span className='text-[#00D094]'>Learn more</span>
                            <img src={Arrowicon2} alt="" className='w-[10px] md:w-[20px] color-[#00D094]'/>
                        </span>
                    </button>
                </div>

                <div className='flex mx-auto bg-[#FFFFFF] w-[300px] text-[10px] md:text-[20px] h-[41px] mt-3 md:w-[800px] md:h-[50px]'>
                    <div className='flex space-x-2 p-2 md:space-x-4'>
                        <button className=''>
                            <span className='border border-[#000000] text-[#000000] py-[4px] px-[5px] md:py-[1px] md:px-[7px]'>
                                Categories
                            </span>
                        </button>

                        <div className='border border-[#000000] w-[159px] md:w-[531px]'></div>

                        <button className='bg-[#01282F] py-[4px] px-[7px] md:py-[1px] md:px-[10px]'>
                            <span className='text-[#FFFFFF]'>
                                Search
                            </span>
                        </button>
                    </div>
                </div>
        
            </div>

        </div>


        <div className='grid grid-cols-2 px-3  md:px-6 font-montserrat py-2 bg-[#FFFFFF]'>
            <div className='grid gap-y-[6px] md:gap-y-7 md:py-[40px]  leading-[9px] '>
                <span className='text-[#01282F] text-[10px] md:text-[20px]'>
                    Reason You need Us
                </span>

                <h1 className='font-bold text-[#130F26] leading-[15px] md:leading-[48px] md:text-[50px]'>
                    One Platform For 
                    Nigeria Culture
                </h1>

                <p className='text-[10px] md:text-[17px] lg:text-[20px] leading-[10px] md:leading-[20px] text-[#000000]'>
                    Nigerian expatriates and food enthusiasts worldwide can reconnect with the flavors of home. 
                    The platform ensures easy access to traditional ingredients
                </p>

                <span className='flex items-center space-x-2'>
                    <img src={Frame} alt="" className='md:w-[30px]'/> 
                    <p className='font-poppins text-[10px] md:text-[17px] lg:text-[20px]'>
                        Convenience and Accessibility
                    </p>
                </span>

                <span className='flex items-center space-x-2'>
                    <img src={Frame} alt="" className='md:w-[30px]'/> 
                    <p className='font-poppins text-[10px] md:text-[17px] lg:text-[20px]'>
                        Support for Cultural Connections
                    </p>
                </span>

                <span className='flex items-center space-x-2'>
                    <img src={Frame} alt="" className='md:w-[30px]'/> 
                    <p className='font-poppins-regular text-[10px] md:text-[17px] lg:text-[20px]'>
                        Quality Assurance and Trusted Sourcing
                    </p>
                </span>
            </div>

            <div className="relative w-fit max-w-md mx-auto mt-10 left-[10px]">
                {/* Background square (behind image) */}
                <div className="absolute top-[-12px] right-[-3px] md:right-[-25px] lg:right-[-70px] w-[100px] h-[120px] md:h-[220px] bg-[#01282F] z-0 md:w-[300px]"></div>

                {/* Foreground image */}
                <img
                    src={image1}
                    alt="Family cooking"
                    className="relative brightness-50 z-10 w-[160px] md:w-[400px] h-auto object-cover right-[5px] md:right-[-10px] lg:right-[-50px]"
                />
            </div>

        </div>

        <div>
            <div className='flex flex-col items-center justify-center text-center py-4 md:py-10 text-[#01282F]'>
                <h3 className='font-bold font-poppins md:text-[24px]'>Browse from Our Categories</h3>
                <p className='text-[10px] font-poppins md:text-[20px]'>We bring Ingredient from all part of Nigeria</p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-6 px-3 md:px-20 py-6 gap-y-9 text-center'>
                <div>
                    <img src={imageSt} alt="" className='rounded-lg'/>
                    <h3 className='font-poppins font-bold text-[#01282F] text-[15px] md:text-[24px]'>North West Region</h3>
                    <p className='text-[10px] md:text-[20px] leading-[10px] md:leading-[20px] text-gray-600'>Offering You the best fromKano, Kaduna, Katsina, Sokoto, Jigawa, Kebbi, Zamfara</p>
                </div>

                <div>
                    <img src={imageSo} alt="" className='rounded-lg'/>
                    <h3 className='font-poppins font-bold text-[#01282F] text-[15px] md:text-[24px]'>South South Region</h3>
                    <p className='text-[10px] md:text-[17px] leading-[10px] md:leading-[15px] text-gray-600'>Offering You the best from  Rivers, Bayelsa, Cross River, Akwa Ibom, Edo, Delta</p>
                </div>

                <div>
                    <img src={imageSo1} alt="" className='rounded-lg'/>
                    <h3 className='font-poppins font-bold text-[#01282F] text-[15px] md:text-[24px]'>South East Region</h3>
                    <p className='text-[10px] md:text-[17px] leading-[10px] md:leading-[15px] text-gray-600'>Offering You the best from Anambra, Enugu, Imo, Abia, Ebonyi</p>
                </div>
                <div>
                    <img src={imageGro} alt="" className='rounded-lg'/>
                    <h3 className='font-poppins font-bold text-[#01282F] text-[15px] md:text-[24px]'>South West Region</h3>
                    <p className='text-[10px] md:text-[17px] leading-[10px] md:leading-[15px] text-gray-600'>Offering You the best from Lagos, Ogun, Oyo, Osun, Ondo, Ekiti</p>
                </div>

                <div>
                    <img src={imageSo2} alt="" className='rounded-lg'/>
                    <h3 className='font-poppins font-bold text-[#01282F] text-[15px] md:text-[24px]'>North Central Region</h3>
                    <p className='text-[10px] md:text-[17px] leading-[10px] md:leading-[15px] text-gray-600'>Offering You the best from Kogi, Benue, Niger,
                    Kwara, Plateau, Nasarawa, FCT Abuja</p>
                </div>

                <div>
                    <img src={imageSo3} alt="" className='rounded-lg'/>
                    <h3 className='font-poppins font-bold text-[#01282F] text-[15px] md:text-[24px]'>North East Region</h3>
                    <p className='text-[10px] md:text-[17px] leading-[10px] md:leading-[15px] text-gray-600'>Offering You the best from Borno, Yobe, Taraba, Adamawa, Gombe, Bauchi</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;


<div className='relative w-full flex justify-center items-center px-3 md:px-20 mt-6'>

<div className='relative w-full left-2 max-w-[500px] md:left-20 md:max-w-[700px]'>
    <div className='bg-[#01282F] w-[110px] md:w-[300px] h-[100px] md:h-[300px] absolute top-1 md:top-5 left-[60px] md:left-[200px] z-0 '>
        <img src={image1} alt="" className='relative z-10 right-[10px] top-3 w-full md:w-[400px] h-[150px] md:h-[300px]'/>
    </div>
</div>
</div>