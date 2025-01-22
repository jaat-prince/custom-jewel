import React from 'react'
import { orderData, shopData } from '../helper/Helper'

function Shop() {
  return (
    <div className='max-w-[1466px] px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto mt-[89px]'>
        <h1 className='text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal text-[#000] text-center'>Shop By Category</h1>
        <div className='flex flex-wrap lg:flex-nowrap justify-around lg:justify-between mt-[64px] gap-5 lg:gap-2'>
            {shopData.map((item,index) => (
                 <div key={index} className='w-full max-w-[400px] lg:max-w-[432px] border brder-[#F4F4F4] bg-[#F4F4F4] card'>
                 <img className='w-full' src={item.icon} alt="img" />
                 <div className='px-[22px] py-[18px]'>
                     <p className='text-lg md:text-xl font-normal text-[#000] flex justify-between'>Lorem ipsum dolor</p>
                     <button className='flex items-center text-lg font-normal text-[#BD0004] gap-[18px] border border-[#BD0004] bg-[#fff] mt-[30px] py-3 md:py-[15px] px-6 md:px-7 card-bt transition-all ease-in-out	duration-700'>
                     SHOP NOW
                     </button>
                 </div>
             </div>
            ))}
        </div>
    </div>
  )
}

export default Shop