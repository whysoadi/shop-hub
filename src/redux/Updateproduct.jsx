import React, { useEffect } from "react";
import { useState } from "react";
import Homepage from "../pages/Homepage";
import { useDispatch } from "react-redux";
import { createProducts, updateProducts } from "../redux/slice/Product";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Updateproduct = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  
  const {product, isLoading} = useSelector((state)=>state.product);

  
  const[update, setUpdate]= useState();

  const navigate = useNavigate('');

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateProducts(update));
    navigate("/");
  };

  const newData = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };
 

  useEffect=(()=>{
    if(id){
    const SingleProduct =product.filter((ele)=>ele.id===id);
    setUpdate(SingleProduct[0]);
}
  },[])



  return (
    <div className='h-content w-full bg-[#f8d4bd] py-2 px-6'>
    <div className=' bg-[#fa8907] rounded-2xl  px-12 '>
      <div className="h-content">
        <div className="flex justify-center items-center py-6 font-bold text-xl text-white">
      Update product
        </div>
        <div className="text-center py-1">
            <p>(Note: the updated product shows undefined)</p>
        </div>
        <div className="flex items-center justify-center font-medium text-lg">
          <form onSubmit={handleUpdate}>
            <div className="py-2 px-2 ">
              <label htmlFor="" className="mx-4 font-bold text-gray-700">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter title"
                name="title"
                value={update && update.title}
                className="rounded-lg py-1 px-2 font-normal"
                onChange={newData}
              />
            </div>
            <div className="py-2 px-2 ">
              <label htmlFor="" className="mx-4 font-bold text-gray-700">
                Price
              </label>
              <input
                type="number"
                placeholder="Enter price"
                name="price"
                className="rounded-lg py-1 px-2 font-normal"
                value={update && update.price}
                onChange={newData}
              />
            </div>
            <div className="py-2 px-2 ">
              <label htmlFor="" className="mx-4 font-bold text-gray-700">
                Category
              </label>
              <input
                type="text"
                placeholder="Enter category"
                name="category"
                className="rounded-lg py-1 px-2 font-normal"
                value={update && update.category}
                onChange={newData}
              />
            </div>
            <div className="py-2 px-2 flex">
              <label htmlFor="" className="mx-4 font-bold text-gray-700">
                Description
              </label>
              <textarea
                type="text"
                placeholder="Enter description"
                name="description"
                className="rounded-lg text-sm py-1 px-2 font-normal"
                rows={6}
                cols={30}
                value={update && update.description}
                onChange={newData}
              />
            </div>
            <div className="py-2 px-2 ">
              <label htmlFor="" className="mx-4 font-bold text-gray-700">
                Image URL
              </label>
              <input
                type="text"
                placeholder="image link"
                name="image"
                className="rounded-lg py-1 px-2 font-normal"
                rows={10}
                value={update && update.image}
                onChange={newData}
              />
               
            </div>
            <div>
            <label htmlFor="" className="mx-4 font-bold text-gray-700">
                Enter Product Id
              </label>
            <input
                type="number"
                placeholder="id"
                name="id"
                className="rounded-lg py-1 px-2 font-normal"
                rows={10}
                value={update && update.id}
                onChange={newData}
              />
            </div>
            

            <div className="py-4 flex items-center justify-center">
              <button className=" rounded-xl px-4 py-2   text-white bg-gray-700" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
     </div>
   
  );
};

export default Updateproduct;
