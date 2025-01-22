import React from 'react'
import Hero2 from './../../asset/png/hero-2.png'
import { SeeIcon } from '../helper/Icon'
function See() {
  return (
    <div  className={`bg-[url('${Hero2}')] bg-cover bg-center	bg-no-repeat pt-[154px] pb-[103px] mt-[70px] md:mt-[100px] lg:mt-[124px]`}>
        <div className='max-w-[1466px] px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto'>
            <div className='flex justify-end'>
<div className='w-full max-w-[578px]'>
    <h1 className='text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[105%] text-[#000]'>Cras gravida lectus <span className='text-[#BD0004]'>nec ligula</span> tincidunt, commodo epretium.</h1>
    <p className='text-lg md:text-xl font-normal text-[#000]/[0.8] mt-[45px]'>Aliquam erat volutpat. Morbi ante nisi, viverra sit amet consequat eget, imperdiet eu ante. Nunc mollis sit amet orci eget consequat.</p>
    <button className='border-2 border-[#000] text-2xl font-normal flex items-center gap-[14px] py-4 px-6 mt-[68px] hover:bg-[#fff] transition-all ease-in-out	duration-700'>See Collections <SeeIcon/></button>
</div></div>
        </div>
    </div>
  )
}

export default See