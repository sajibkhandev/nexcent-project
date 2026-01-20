import React from 'react'
import Image from '../components/Image'
import Flex from '../components/Flex'
import ImageOne from '../assets/marketing1.png'
import { FaArrowRightLong } from 'react-icons/fa6'

const MarketingCard = () => {
  return (
    <div className='main relative w-[368px] h-[286px] rounded-lg'>
        <Image className="w-full" src={ImageOne}/>
        <div className='overly absolute left-1/2 -translate-x-1/2 w-[317px] py-4 rounded-lg bg-[#F5F7FA]'>
        <h3 className='text-xl text-gray font-inter font-semibold text-center'>Creating Streamlined Safeguarding Processes with OneRen</h3>
        <Flex className='justify-center items-center gap-x-2 pt-4'>
            <p className='text-xl text-primary font-inter font-semibold text-center '>Readmore  </p>
           <FaArrowRightLong className='text-primary' />
        </Flex>
        </div>
    </div>
  )
}

export default MarketingCard