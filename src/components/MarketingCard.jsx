import React from 'react'
import Image from '../components/Image'
import Flex from '../components/Flex'
import { FaArrowRightLong } from 'react-icons/fa6'

const MarketingCard = ({image,text}) => {
  return (
    <div className='main relative w-[368px] h-[286px] rounded-lg'>
        <Image className="w-full" src={image}/>
        <div className='overly absolute left-1/2 -translate-x-1/2 w-[317px] py-4 px-12 md:px-5 rounded-lg bg-[#F5F7FA]'>
        <h3 className='text-base md:text-xl text-gray font-inter font-semibold text-center'>{text}</h3>
        <Flex className='justify-center items-center gap-x-2 pt-4'>
            <p className='text-base md:text-xl text-primary font-inter font-semibold text-center '>Readmore  </p>
           <FaArrowRightLong className='text-primary' />
        </Flex>
        </div>
    </div>
  )
}

export default MarketingCard