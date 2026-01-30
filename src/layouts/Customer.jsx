import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Image from '../components/Image'
import CustomerImage from '../assets/customer.png'
import Logo1 from '../assets/clogo1.png'
import Logo2 from '../assets/clogo2.png'
import Logo3 from '../assets/clogo3.png'
import Logo4 from '../assets/clogo4.png'
import Logo5 from '../assets/clogo5.png'
import Logo6 from '../assets/clogo6.png'
import { FaArrowRightLong } from "react-icons/fa6";

const Customer = () => {
  return (
    <section className='py-8 bg-[#F5F7FA]'>
        <Container>
            <Flex className='!block md:!flex'>
                <div className='md:w-4/12'>
                 <Image className='w-[40%] mx-auto md:w-auto' src={CustomerImage}/>
                </div>
                <div className='md:w-8/12 px-3 md:px-0'>
                <SubHeading className='!font-medium md:w-[742px]' text="Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna."/>
                <h3 className='py-4 text-xl text-primary font-semibold font-inter'>Tim Smith</h3>
                <SubHeading className="text-[#89939E] " text="British Dragon Boat Racing Association"/>

               <Flex className=' justify-between items-center mt-8'>
                 <Image className='w-[20px] md:w-auto' src={Logo1}/>
                <Image className='w-[25px] md:w-auto' src={Logo2}/>
                <Image className='w-[25px] md:w-auto' src={Logo3}/>
                <Image className='w-[25px] md:w-auto' src={Logo4}/>
                <Image className='w-[25px] md:w-auto' src={Logo5}/>
                <Image className='w-[25px] md:w-auto' src={Logo6}/>
                 <Flex className='items-center gap-x-2 cursor-pointer'>
                    <h3 className='py-4 text-sm md:text-xl text-primary font-semibold font-inter'>Meet all customers </h3>
                     <FaArrowRightLong className='text-primary' />

                 </Flex>


               </Flex>
                 
                </div>
            </Flex>
        </Container>

    </section>
  )
}

export default Customer