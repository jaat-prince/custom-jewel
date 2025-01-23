import React from 'react'
import { orderData, shopData } from '../helper/Helper'
import Heading from '../common/Heading'
import Card from '../common/Card'

function Shop() {
  return (
    <div className='max-w-[1466px] px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto mt-[89px]'>
       
        <Heading title={"Shop By Category"}/>
        <div className='flex flex-wrap lg:flex-nowrap justify-around lg:justify-between mt-[64px] gap-5 lg:gap-2'>
            {shopData.map((item,index) => (
             <Card key={index}
             icon={item.icon}
             title={item.title}
             button={item.button}
             btclassName={"mt-[23px]"}
             />
            ))}
        </div>
    </div>
  )
}

export default Shop