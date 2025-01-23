import React from 'react'
import { serviceData } from '../helper/Helper'
import Heading from '../common/Heading'

function Service() {
  return (
    <div className='max-w-[1466px] px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto mt-[70px] sm:mt-[80px] md:mt-[110px] lg:mt-[137px]'>
        <Heading title={"Our Exclusive Services"}/>
        <div className='flex flex-wrap lg-flex-nowrap gap-[30px] mt-[50px] justify-center mx-auto'>
            {serviceData.map((item,index) => (
<div key={index} className='w-full max-w-[208px] border border-[rgba(0,0,0,0.10)] px-6 hover:bg-[#fff] hover:shadow-[0px_4px_30px_0px_rgba(0,0,0,0.15)] hover:!text-[#000] hover:!opacity-100 transition-all ease-in-out duration-700'>
<div className='pt-[65px] mx-auto flex justify-center'>
    <img className='w-full max-w-[50px]' src={item.icon} alt="img" /></div>
    <p className='pt-[37px] text-[#000]/[0.6] text-xl font-normal text-center pb-10 hover:!opacity-100	'>{item.title}</p>
</div>))}
        </div>
    </div>
  )
}

export default Service