import React from 'react'

const Homepage = ({children}) => {
  return (
    <div className='h-content w-full bg-[#f8d4bd] py-4 px-6'>
    <div className=' bg-[#fa8907] rounded-2xl  px-12 '>
{children}
     </div>
     </div>
  )
}

export default Homepage
