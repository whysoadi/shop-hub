import React, { useState } from 'react'
import Homepage from '../pages/Homepage'
import { createUser } from '../redux/slice/Auth'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const state = useSelector((state)=>state.user);
  console.log("state",state)
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const [email, setEmail]= useState("")

    const navigate= useNavigate(); 

    const dispatch = useDispatch();

    const handleRegister =()=>{
        console.log({username,email,password})
        dispatch(createUser({username,email,password}))
        navigate('/');
    }
  
  return (
    <Homepage>
    <div>
      <div className="h-fit">
        <div className="flex justify-center items-center py-6 font-bold text-xl text-white">
          Sign Up
        </div>
        <div className='text-center py-2'>
          <p>(Since there is no database, user cannot login with the new user credentials)</p>
        </div>
        <div className="flex items-center justify-center font-medium text-lg">
          <form onSubmit={handleRegister} >
            <div className="py-2 px-2 ">
              <label htmlFor="" className="mx-4 font-bold text-gray-700">
                Username
              </label>
              <input
                type="text"
                placeholder="Select username"
               value={username}
                className="rounded-lg py-1 px-2 font-normal"
               onChange={(e)=>setUsername(e.target.value)}
              />
            </div>
           
          
           
            <div className="py-2 px-2 ">
              <label htmlFor="" className="mx-4 font-bold text-gray-700">
              E-mail
              </label>
              <input
                type="email"
                placeholder="email"
              value={email}
                className="rounded-lg py-1 px-2 font-normal"
                rows={10}
              onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="py-2 px-2 ">
              <label htmlFor="" className="mx-4 font-bold text-gray-700">
            Password
              </label>
              <input
                type="password"
                placeholder="enter password"
               value={password}
                className="rounded-lg py-1 px-2 font-normal"
                rows={10}
                 onChange={(e)=>setPassword(e.target.value)}
             
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
    </div>
    </Homepage>
  )
}

export default Signup
