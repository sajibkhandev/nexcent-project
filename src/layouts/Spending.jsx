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
            <Flex className='items-center'>
                <div className='w-5/12 '>
                 <Image src={BannerImage}/>
                </div>
               <div className='w-7/12 '>
                 <Heading className='w-[580px]' text="The unseen of spending three years at Pixelgrade"/>
                 <SubHeading className='w-[600px] pt-4 pb-8' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."/>
                 <Button text="Learn More"/>
               </div>
            </Flex>

        </Container>
    </section>
  )
}

export default Spending