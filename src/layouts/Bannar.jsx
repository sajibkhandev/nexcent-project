import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import BannarImage from '../assets/banner.png'
import Button from '../components/Button'

const Bannar = () => {
  return (
    <section className='py-[96px] bg-[#F5F7FA]'>
        <Container>
        <Flex className='items-center'>
        <div className='w-8/12'>
           <h1 className='w-[657px] text-[64px] text-[#4D4D4D] font-semibold font-inter'>Lessons and insights <span className='text-[#4CAF4F]'>from 8 years</span></h1>
           <p className='text-base text-[#717171] font-normal font-inter pt-4 pb-8'>Where to grow your business as a photographer: site or social media?</p>
           <Button text="Register"/>
        </div>
        <div className='w-4/12'>
        <Image src={BannarImage}/>
        </div>

        </Flex>
    </Container>
    </section>
  )
}

export default Bannar