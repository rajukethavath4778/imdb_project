import React from 'react'

function Movies() {
  return (
    <div>
        <div className='text-2xl mb-8 font-bold text-center'> 
            Trending movies
        </div>
        <div className='flex' >
            <div className='w-[160px] h-[40vh] bg-center bg-cover rounded-xl m-4 md:h-[200px] hover:scale-110 duration-300' style={{
              backgroundImage:'url(https://therunngun.com/wp-content/uploads/2023/11/John-Wick-Composite-Low-Rez-768x1152.jpg)'  
            }}> 

            </div>
            <div className='w-[160px] h-[40vh] bg-center bg-cover rounded-xl m-4 md:h-[200px] hover:scale-110 duration-300' style={{
              backgroundImage:'url(https://therunngun.com/wp-content/uploads/2023/11/John-Wick-Composite-Low-Rez-768x1152.jpg)'  
            }}> 

            </div>

            
        </div>
     </div>
  )
}

export default Movies