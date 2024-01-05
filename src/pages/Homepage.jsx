import React from 'react'
import { fetchProducts,deleteProducts } from '../redux/slice/Product';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

const Homepage = ({children}) => {

  const state = useSelector((state)=>state.product);
  console.log(state)
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
}, []);

const responsive = {
  0: { 
      items: 1
  },
  568: { 
      items: 1
  },
  1024: {
      items: 1, 
      itemsFit: 'contain'
  },
};


  return (
    <div className='h-full w-full bg-[#dab8e8] py-8 z-0'>
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 sm:py-16 py-8'>
<div className='flex-col justify-center '>
    <div className='text-center uppercase font-bold lg:text-5xl md:text-4xl text-2xl text-[#6445ba] '>
      welcome to shophub
    </div>
    <div  className='text-center font-medium lg:text-xl text-md text-[#6445ba] py-1'>
      Browse your favouite clothings here!
    </div>
    <div className='text-center sm:text-sm text-xs text-white py-4 px-12'>
   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
    </div>
    <div className='flex justify-center'>
    <div className="px-5 cursor-pointer my-8 py-2.5 animate-bounce relative rounded group overflow-hidden  font-medium bg-purple-50 text-purple-600 inline-block"
            >
              <span className="absolute top-0 left-0 flex w-0 h-full  transition-all duration-200 ease-out transform translate-x-0 bg-purple-600 group-hover:w-full opacity-90"></span>
              <span className="relative group-hover:text-white">
                Browse Clothings!
              </span>
            </div>{" "}
</div>
</div>
<div className='flex m-4'>
<AliceCarousel
        mouseTracking
       autoPlay
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
        autoPlayInterval={1000}
        items={state.product?.map((ele)=>
            
            <div className="flex-col justify-center text-center rounded-xl pt-4 px-3 mx-4 bg-[#ffff] items-center " >
        <div className='flex justify-center items-center'>
        <img src={ele.image} alt="" className='h-90 w-64 ' width="90"/>
        </div>
        </div>
            
             )}
       
    />
</div>
    </div>
{children}
    
     </div>
  )
}

export default Homepage
