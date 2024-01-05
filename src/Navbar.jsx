import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineClose,  AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav=()=>{
    setNav(!nav)
  }
  return (
    <div className='bg-[#A06CD5] z-20'>
      <div className='grid md:grid-cols-5 grid-cols-2'>
        {/* for logo */}
        <div className='col-span-1 text-white flex justify-center items-center'>
          <div className='cursor-pointer py-4 font-bold hover:text-[#6445ba] '>
          <StorefrontIcon fontSize='large' />
              ShopHub
              </div>
        </div>
        {/* for navbar */}
        <div className='col-span-3 items-center justify-around md:flex text-white lg:px-24 px-8 font-semibold hidden md:visible'>
             <Link to='/' className='cursor-pointer py-4 hover:text-[#6445ba]'>
              Home
             </Link>
             <Link  className='cursor-pointer py-2 hover:text-[#6445ba]'>
              Shop
             </Link>
             <Link to='/login' className='cursor-pointer py-2 hover:text-[#6445ba]'>
              Login
             </Link>
             <Link to='signup' className='cursor-pointer py-2 hover:text-[#6445ba]'>
              Signup
             </Link>
             {/* <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose  />
              </div> */}
        </div>
        <div className='flex justify-end px-8 text-white items-center'>
        <div  onClick={handleNav} className='md:hidden justify-center items-center'>
        <AiOutlineMenu size={25}/>
      </div>
      </div>
      <div className={nav? 'fixed right-0 top-0 w-full h-screen z-20 bg-black/70':" "}>
         <div className={nav? ' fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[30%] h-screen bg-[#ffffff] p-10 ease-in duration-500':
        'fixed right-[-100%] top-0  p-10 ease-in duration-500 ' }>
          <div>
            <div className='flex w-full items-center justify-end'>
            
              
              <div onClick={handleNav} className='rounded-full text-white bg-[#6445ba] py-2 px-2 cursor-pointer'>
                <AiOutlineClose  />
              </div>
            </div>
           
          </div>

          <div className='py-4 flex flex-col '>
            <ul className='uppercase'>
              <Link href='/#home'>
              <li className='py-4 text-sm font-bold  hover: ease-in duration-150 text-[#6445ba]'>Home</li>
              </Link>
              <Link href='/#about'>
              <li className='py-4 text-sm font-bold    hover: ease-in duration-150 text-[#6445ba]'>Shop</li>
              </Link>
              <Link href='/#experience'>
              <li className='py-4 text-sm font-bold   hover:ease-in duration-150 text-[#6445ba]'>Login</li>
              </Link>
              <Link href='/#skills'>
              <li className='py-4 text-sm  font-bold   hover:ease-in duration-150 text-[#6445ba]'>Sign Up</li>
              </Link>
              
            </ul>
             
             
          </div>

</div>
         </div>
      </div>
    </div>
  )
}

export default Navbar
