import React from 'react'
import { orderData } from '../helper/Helper'

import Heading from '../common/Heading'
import Card from '../common/Card'

function Order() {
  return (
    <div className='max-w-[1466px] px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto mt-[75px]'>
      <Heading title={"What do you want to order?"}/>
        <div className='flex flex-wrap lg:flex-nowrap justify-around lg:justify-between mt-[76px] gap-5 lg:gap-2'>
            {orderData.map((item,index) => (
                <Card key={index}
                icon={item.icon}
                title={item.title}
                newprice={item.newprice}
                subtitle={item.subtitle}
                oldprice={item.oldprice}
                button={item.button}
                bticon={item.bticon}/>
            ))}
        </div>
    </div>
  )
}

export default Order