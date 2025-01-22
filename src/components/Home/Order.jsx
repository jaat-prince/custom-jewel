import React from 'react'
import { orderData } from '../helper/Helper'
import { OrderIcon } from '../helper/Icon'

function Order() {
  return (
    <div className='max-w-[1466px] px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto mt-[75px]'>
        <h1 className='text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal text-[#000] text-center'>What do you want to order?</h1>
        <div className='flex flex-wrap lg:flex-nowrap justify-around lg:justify-between mt-[76px] gap-5 lg:gap-2'>
            {orderData.map((item,index) => (
                 <div key={index} className='w-full max-w-[400px] lg:max-w-[432px] border brder-[#F4F4F4] bg-[#F4F4F4] card transition-all ease-in-out	duration-700'>
                 <img className='w-full' src={item.icon} alt="img" />
                 <div className='py-5 px-[18px]'>
                     <p className='text-lg md:text-xl font-normal text-[#000] flex justify-between'>Lorem ipsum dolor <span className='text-base md:text-lg font-normal text-[#F90]'>€ 5.99</span></p>
                     <p className='text-base font-light text-[#767676] mt-3 flex justify-between'>Praesent volutpat libero vitae sem <span className='text-base md:text-lg font-normal text-[#767676] line-through'>€ 8.99</span></p>
                     <button className='flex items-center text-lg font-normal text-[#BD0004] gap-[18px] border border-[#BD0004] bg-[#fff] mt-[30px] py-3 md:py-[15px] px-4 md:px-5 card-bt transition-all ease-in-out	duration-700'>
                     Complile this one <span className='transition-all ease-in-out	duration-700'><OrderIcon/></span>
                     </button>
                 </div>
             </div>
            ))}
        </div>
    </div>
  )
}

export default Order