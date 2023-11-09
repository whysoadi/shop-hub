import React from "react";
import { useState } from "react";
import Homepage from "../pages/Homepage";
import { useDispatch } from "react-redux";
import { createProducts } from "../redux/slice/Product";
import { useNavigate } from "react-router-dom";

const Createproduct = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const getProductData = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Product:", product);
    dispatch(createProducts(product));
    navigate("/");
  };

  return (
    <Homepage>
      <div className="h-screen">
        <div className="flex justify-center items-center py-6 font-bold text-xl text-white">
          Add Product
        </div>
        <div className="flex items-center justify-center font-medium text-lg">
          <form onSubmit={handleSubmit}>
            <div className="py-2 px-2 ">
              <label htmlFor="" className="mx-4 font-bold text-gray-700">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter title"
                name="title"
                className="rounded-lg py-1 px-2 font-normal"
                onChange={getProductData}
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
                onChange={getProductData}
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
                onChange={getProductData}
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
                onChange={getProductData}
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
                onChange={getProductData}
              />
            </div>

            <div className="py-4 flex items-center justify-center">
              <button className=" rounded-xl px-4 py-2   text-white bg-gray-700">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Homepage>
  );
};

export default Createproduct;
