import React, { useState } from 'react'
import Homepage from './Homepage'
import { useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { fetchProducts,deleteProducts } from '../redux/slice/Product';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

const Carousel = () => {
   
    const [view, setView]= useState(true);

    const state = useSelector((state)=>state.product);
  console.log(state)
    const dispatch = useDispatch();

    const responsive = {
        0: { 
            items: 1
        },
        568: { 
            items: 2
        },
        1024: {
            items: 6, 
            itemsFit: 'contain'
        },
    };
   
 
    // useEffect(() => {
    //     dispatch(fetchProducts());
    //     console.log('hi')
    // }, []);
   
  return (
    <Homepage>
     <button className='bg-[#f8d4bd] rounded-xl px-4 py-2 mt-2  font-semibold text-gray-500 hover' onClick={()=>dispatch(fetchProducts())}>View products</button>
        <div className={view?'pb-6 font-bold text-center pt-4 text-lg uppercase':'hidden'}>Products</div>
        {view?
       <AliceCarousel
        mouseTracking
        items={state.product?.map((ele)=>
            
            <div className="flex-col justify-center text-center rounded-xl pt-4 px-3 mx-4 bg-[#f8d4bd] items-center " >
          <div className='flex justify-between'>
        <ZoomInIcon fontSize='large' style={{color:'gray'}}/>
        <ShoppingCartIcon fontSize='large' style={{color:'gray'}} />
        </div>
        <div className='flex justify-center'>
        <img src={ele.image} alt="" className='h-32 w-24' />
        </div>
       <div>
        <div className='font-semibold py-2 px-2'>{ele.title}</div>
        </div>
        <div className='py-2'>
            {  "$"+ ele.price }
        </div>
        <div className='flex justify-between'>
            <Link  to={`/edit/${ele.id}`}  className='bg-blue-600 rounded-xl text-sm px-2 py-1 my-2 font-medium capitalize text-white '>edit</Link>
            <button onClick={()=>dispatch(deleteProducts(ele.id))} className='bg-red-600 rounded-xl text-sm px-2 py-1 my-2 font-medium capitalize text-white '>delete</button>
        </div>
        </div>
            
             )}
        responsive={responsive}
    />:''
}

    <div className='py-4'>
        <Link to="/additem" className={view?'bg-[#f8d4bd] rounded-xl px-4 py-2  font-semibold text-gray-500 hover:text-white hover:bg-gray-700':'hidden'}>Add item</Link>
    </div>
    </Homepage>
  )
}

export default Carousel
