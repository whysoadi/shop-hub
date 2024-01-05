import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Navbar from './Navbar'
import Carousel from './pages/Carousel';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Shop from './pages/Shop';
import Createproduct from './redux/Createproduct';
import Updateproduct from './redux/Updateproduct';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
         <Routes>
          <Route  path='/' element={<Carousel/>} />
          {/* <Route  path='/login' element={<Login/>} /> */}
          <Route  path='/additem' element={<Createproduct/>} />
          <Route  path='/edit/:id' element={<Updateproduct/>} />
          {/* <Route  path='/signup' element={<Signup/>} /> */}
          {/* <Route  path='/shop' element={<Shop/>} /> */}
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


