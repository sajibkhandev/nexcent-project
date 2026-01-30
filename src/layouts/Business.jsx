import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import BusinessCard from '../components/BusinessCard'
import IconOne from '../assets/businessIcon.png'
import IconTwo from '../assets/businessIcon2.png'

const Business = () => {
  return (
    <section className='bg-[#F5F7FA] py-[84px]'>
        <Container>
        <Flex className='!block md:!flex items-center px-3 md:px-0'>
            <div className='md:w-1/2 text-center md:text-left'>
            <Heading  text="Helping a local"/>
            <span className=' !inline-block pt-2 text-3xl md:text-4xl text-primary font-inter font-semibold'>business reinvent itself</span>
            <SubHeading className='pt-2' text="We reached here with our hard work and dedication"/>
            </div>
            <div className='md:w-1/2'>

           <Flex className='justify-center md:justify-start flex-wrap  gap-x-[30px] gap-y-10 pt-10 md:pt-0'>
             <BusinessCard image={IconOne} headingtext="2,245,341" normaltext="Members"/>
             <BusinessCard image={IconOne} headingtext="2,245,341" normaltext="Members"/>
             <BusinessCard image={IconTwo} headingtext="828,867" normaltext="Event Bookings"/>
             <BusinessCard image={IconOne} headingtext="2,245,341" normaltext="Members"/>
           </Flex>
            
            </div>
        </Flex>

    </Container>
    </section>
  )
}

export default Business