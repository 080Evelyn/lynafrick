
import Image from '../../assets/Images/image.png'
import Images from '../../assets/Images/Images.png'
import Filter from '../../assets/Vector (1).svg'
import Filter1 from '../../assets/Vector (2).svg'
import Filter2 from '../../assets/Vector (3).svg'
import { NavLink } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import React, { useState } from 'react';


function product() {

  const products = [
    { id: 1, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 2, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 3, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 4, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 5, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 6, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 7, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 8, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 9, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 10, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 11, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 12, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 13, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 14, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 15, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 16, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 17, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 18, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 19, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 20, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 21, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 22, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 23, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 24, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 25, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 26, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 27, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 28, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 29, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 30, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 31, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 32, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 33, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 34, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 33, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 32, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 33, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 34, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 35, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 36, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 37, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 38, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 39, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 40, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 41, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 42, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 43, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 44, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
    { id: 45, image: Images, name: 'Banga Soup', region: 'South-South', price: 56 },
  ];

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  return (
    <div className='relative w-full'>
      <img src={Image} alt="" className='w-full h-[100px] md:h-[300px]'/>
      <div className='absolute inset-0 z-10 pointer-events-none flex justify-center items-center text-[#FFFFFF] font-medium mb-[1500px] md:mb-[800px] text-[30px] md:text-[40px]'>Shop</div>
      <div className='absolute inset-0 z-10 pointer-events-none  text-[#FFFFFF] flex items-center justify-center mb-[1450px]  md:mb-[800px] md:mt-16 md:space-x-1 text-[12px]  md:text-[15px]'>
        <div className='font-semibold'><NavLink to='/home'>Home</NavLink></div>
        <div className='text-[10px] md:text-[12px]'><FaAngleRight /></div>
        <div><NavLink>Shop</NavLink></div>
      </div>

      <div className='bg-[#C2FFEE] flex items-center justify-between px-2 md:px-7 py-1 md:py-4 h-[35px] md:h-[50px]'>

        <div className=' flex items-center space-x-1  md:space-x-3 md:justify-between'>
          <div className='flex items-center text-[11px] md:text-[20px] space-x-1 md:space-x-4'>
            <div>
              <img src={Filter} alt="" className='w-[12px] md:w-[20px]'/>
            </div>

            <div>
              Filter
            </div>
          </div>

          <NavLink to='/filter-categories' className='flex items-center text-[11px] space-x-1 md:text-[20px] md:space-x-4'>
            <div>
              <img src={Filter1} alt="" className='h-[10px] md:h-[20px]'/>
            </div>

            <span>
              Categories
            </span>
          </NavLink>

          <div className='flex items-center text-[11px] md:text-[20px] space-x-2 md:space-x-4'>
            <div className='flex items-center space-x-2 '>
              <div className='bg-[#9F9F9F] w-[2px] h-[15px] md:h-[34px]'></div>
              <div className='text-[8px] md:text-[13px]'>Showing 1–16 of 32 results</div>
            </div>
          </div>
        </div>

        <div className=' md:py-4'>
          <div className=' rounded-sm bg-[#FFFFFF] w-[120px] md:w-[300px]'>
            <div className='flex items-center px-2 md:px-4 space-x-2 md:py-2'>
              <img src={Filter2} alt="" className='w-2 md:w-[15px]'/>
              <input type="text" placeholder='Search' className='md:flex-1 outline-0 placeholder:text-[12px] md:placeholder:text-[17px]'/>
            </div>
          </div>
        </div>
      </div>


      <div className="px-4 md:px-12 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {currentItems.map((product, index) => (
            <NavLink to={`/product/${product.id}`} key={product.id}>
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative group">
                <img src={product.image} alt={product.name} className="w-full h-[250px] object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  Add to cart
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold">{currentItems.name}</h3>
                <p className="text-xs text-gray-500">{currentItems.region}</p>
                <p className="text-sm font-bold mt-2">${currentItems.price}</p>
              </div>
            </div>
            </NavLink>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-1">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-1 md:px-3 py-1 border rounded ${currentPage === 1 ? 'bg-gray-200' : 'bg-white'}`}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-2 md:px-3 py-1 border rounded ${
                currentPage === index + 1 ? 'bg-[#009688] text-white' : 'bg-white'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-1 md:px-3 py-1 border rounded ${currentPage === totalPages ? 'bg-gray-200' : 'bg-white'}`}
          >
            Next
          </button>
        </div>

      </div>

    </div>
  )
}

export default product;
