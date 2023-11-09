import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='bg-[#f8d4bd]'>
      <div className='grid grid-cols-5'>
        {/* for logo */}
        <div className='col-span-1 text-gray-700 flex justify-center items-center'>
          <div className='cursor-pointer py-4 font-bold hover:text-[#fa8907] '>
          <StorefrontIcon fontSize='large' />
              ShopHub
              </div>
        </div>
        {/* for navbar */}
        <div className='col-span-3 items-center justify-around flex text-gray-700  lg:px-24 px-8 font-semibold'>
             <Link to='/' className='cursor-pointer py-4 hover:text-[#fa8907]'>
              Home
             </Link>
             <Link to='/shop' className='cursor-pointer py-2 hover:text-[#fa8907]'>
              Shop
             </Link>
             <Link to='/login' className='cursor-pointer py-2 hover:text-[#fa8907]'>
              Login
             </Link>
             <Link to='signup' className='cursor-pointer py-2 hover:text-[#fa8907]'>
              Signup
             </Link>
        </div>
        {/* for cart */}
        <div className='col-span-1 py-4 flex justify-center items-center text-gray-700 hover:text-[#fa8907]'>
       <ShoppingCartIcon fontSize="large"  />
        </div>
      </div>
    </div>
  )
}

export default Navbar
