import React from 'react'

function Heading({title, hclassName}) {
  return (
    <>
      <h1 className={`text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal text-[#000] text-center ${hclassName}`}>{title}

      </h1>
    </>
  )
}

export default Heading