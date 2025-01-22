import React from 'react'
import Hero from './../../asset/png/Hero_Image.png'
function Home() {
  return (
    <div className={`bg-[url('${Hero}')] bg-cover bg-center	bg-no-repeat py-[240px]`}>
<div className='max-w-[1466px] px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto'>
    <div className='w-full max-w-[660px]'>
    <h1 className='text-[32px] sm:text-[44px] md:text-[60px] lg:text-[72px] font-bold text-[#000] leading-[105%]'>Vehicula <span className='text-[#BD0004]'>tellus ipsums</span> arcu viverra </h1>
    <p className='text-xl md:text-2xl font-normal mt-[50px] leading-[105%] text-[#000]/[0.8]'>Feugiat quis et platea nunc. Enim, a donec odio ullamcorper mauris penatibus et.</p>
    <div className='mt-[65px] flex items-center gap-[15px] sm:gap-[30px]'>
        <button className='py-4 px-4 sm:px-6 bg-[#BD0004] flex items-center gap-3 text-lg sm:text-xl font-normal text-[#fff]'>Shop Now <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
  <path d="M1 6.99997L19 6.99997" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.75 1.74997L19 6.99997L13.75 12.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></button>
<a href="#" className='text-lg sm:text-xl font-normal text-[#000]/[0.6]'>See Collections</a>
    </div>
    </div>
</div>
    </div>
  )
}

export default Home