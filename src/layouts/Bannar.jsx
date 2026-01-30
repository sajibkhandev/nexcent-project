import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import BannarImage from '../assets/banner.png'
import Button from '../components/Button'

const Bannar = () => {
  return (
    <section className='py-14 md:py-[96px]  bg-[#F5F7FA]'>
        <Container>
        <Flex className='!block md:!flex items-center '>
        <div className='md:w-8/12 text-center md:text-left px-3 md:px-0'>
           <h1 className='w-auto md:w-[657px] text-[30px] sm:text-[36px] md:text-[64px] text-[#4D4D4D] font-semibold font-inter'>Lessons and insights <span className='text-[#4CAF4F]'>from 8 years</span></h1>
           <p className='text-base text-[#717171] font-normal font-inter pt-4 pb-8'>Where to grow your business as a photographer: site or social media?</p>
           <Button text="Register"/>
        </div>
        <div className='md:w-4/12 mt-10 md:mt-0'>
        <Image className='w-4/6 mx-auto md:w-full ' src={BannarImage}/>
        </div>

        </Flex>
    </Container>
    </section>
  )
}

export default Bannar