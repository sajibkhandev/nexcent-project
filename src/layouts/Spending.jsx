import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Button from '../components/Button'
import BannerImage from '../assets/spending.png'

const Spending = () => {
  return (
    <section className='pb-12'>
        <Container>
            <Flex className='!block md:!flex items-center'>
                <div className='md:w-5/12 '>
                 <Image className='w-3/5 mx-auto md:w-auto ' src={BannerImage}/>
                </div>
               <div className='md:w-7/12 text-center md:text-left'>
                 <Heading className='md:w-[580px] px-3 md:px-0 ' text="The unseen of spending three years at Pixelgrade"/>
                 <SubHeading className='md:w-[600px] pt-4 pb-8 px-3 md:px-0 ' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."/>
                 <Button text="Learn More"/>
               </div>
            </Flex>

        </Container>
    </section>
  )
}

export default Spending