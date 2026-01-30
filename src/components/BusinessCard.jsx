import React from 'react'
import Image from '../components/Image'
import Flex from '../components/Flex'


const BusinessCard = ({image,headingtext,normaltext}) => {
  return (
     <>
     <Flex className='items-center gap-x-4'>
        <Image src={image}/>
        <div>
            <h2 className='text-xl md:text-[28px] text-secondary font-semibold font-inter'>{headingtext}</h2>
            <p className='text-sm md:text-base text-gray font-normal font-inter'>{normaltext}</p>
        </div>
     </Flex>
     </>
  )
}

export default BusinessCard