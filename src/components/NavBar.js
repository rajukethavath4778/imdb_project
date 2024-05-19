import React from 'react'
import logo from '../MovieLogo copy.png'
import {Link} from "react-router-dom";
function NavBar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4' >
    <img src= {logo} className='w-[50px]'/>
   <Link to= "/" className='text-blue-400'>Movie</Link>
   <Link to= "/WatchList"className='text-blue-400'>Watchlist</Link>
  </div>
  );

}

export default NavBar