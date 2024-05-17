import React from 'react'

function Banner() {
  return (
    <div className='h-[30vh] md:h-[50vh]   flex items-end'
    style={{
        backgroundImage : `url(https://therunngun.com/wp-content/uploads/2023/11/John-Wick-Chapter-2-Cinematic-Movie-Poster-721x1024.jpg)`
    }}>
      < div className='text-xl md:text-3xl bg-red-900 bg-opacity-60 p-4 text-white text-center w-full'> 
        john wick
      </div>


        
       


    </div>
  )
}

export default Banner