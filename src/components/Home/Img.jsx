import React from 'react'
import Img1 from './../../asset/png/poster.png'
import Img2 from './../../asset/png/poster-1.png'
function Img() {
  return (
    <div className='mt-[70px] md:mt-[100px] lg:mt-[124px] max-w-[1466px] px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto'>
        <div className='flex flex-wrap lg:flex-nowrap gap-9 justify-center'>
            <div><img className='w-full' src={Img1} alt="img" /></div>
            <div><img className='w-full' src={Img2} alt="img" /></div>
        </div>
    </div>
  )
}

export default Img