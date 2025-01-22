import React from 'react'
import { areaData, careData } from '../helper/Helper'
import Logo from './../../asset/png/Logo.png'

function Footer() {
  return (
    <div className='bg-[#F3F3F3] mt-[70px] sm:mt-[90px] lg:mt-[111px]'>
        <div className='max-w-[1466px] px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto pt-[66px]'>
        <div className='flex justify-between gap-2 flex-wrap md:flex-nowrap'>
            <div>
                <a href="#"><img className='w-full max-w-[210px] md:max-w-[288px]' src={Logo} alt="logo" /></a>
                <p className='text-base font-normal text-[#1E1919] mt-7 w-full md:max-w-[420px]'>Nulla sit amet pellentesque mauris. Cras non turpis tempor, cursus ante in, ullamcorper libero. Maecenas sodales nulla a semper suscipit.</p>
            </div>
            <div className='flex gap-[75px] xl:gap-[96px]'>
            <div>
                <h1 className='text-lg text-[#060606] font-normal'>Customer Care</h1>
                {careData.map((item,index) => (
                <ul key={index} className='mt-[19px]'>
                    <li> <a className='mt-[11px] text-base font-normal text-[#000]/[0.8] hover:text-[#BD0004] transition-all ease-in-out duration-700' href="#">{item.title}</a></li>
                </ul>))}
            </div>
            <div>
                <h1 className='text-lg text-[#060606] font-normal'>Legal Area</h1>
                {areaData.map((item,index) => (
                <ul key={index} className='mt-[19px]'>
                    <li> <a className='mt-[11px] text-base font-normal text-[#000]/[0.8] hover:text-[#BD0004] transition-all ease-in-out duration-700' href="#">{item.title}</a></li>
                </ul>))}
            </div></div>
        </div>
    </div></div>
  )
}

export default Footer