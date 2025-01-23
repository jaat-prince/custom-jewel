import React from 'react'

function Card({icon, title, newprice,subtitle,oldprice,button,bticon,btclassName}) {
  return (
    <>  <div className='w-full max-w-[400px] lg:max-w-[432px] border brder-[#F4F4F4] bg-[#F4F4F4] card transition-all ease-in-out	duration-700'>
                     <img className='w-full' src={icon} alt="img" />
                     <div className='py-5 px-[18px]'>
                         <p className='text-lg md:text-xl font-normal text-[#000] flex justify-between'> {title}<span className='text-base md:text-lg font-normal text-[#F90]'>{newprice}</span></p>
                         <p className='text-base font-light text-[#767676] mt-3 flex justify-between'>{subtitle}<span className='text-base md:text-lg font-normal text-[#767676] line-through'>{oldprice}</span></p>
                         <button className={`flex items-center text-lg font-normal text-[#BD0004] gap-[18px] border border-[#BD0004] bg-[#fff] mt-[30px] py-3 md:py-[15px] px-4 md:px-5 card-bt transition-all ease-in-out	duration-700 ${btclassName}`}>
                         {button} <span className='transition-all ease-in-out	duration-700'>{bticon}</span>
                         </button>
                     </div>
                 </div>
    </>
  )
}

export default Card