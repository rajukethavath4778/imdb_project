import React from 'react'
import logo from '../MovieLogo copy.png'
function NavBar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4' >
    <img src= {logo} className='w-[50px]'/>
   <h3 className='text-blue-400'>Movie</h3>
   <h3 className='text-blue-400'>Watchlist</h3>
  </div>
  );

}

export default NavBar