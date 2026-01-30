import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Button from '../components/Button'
import BannerImage from '../assets/design.png'
const Design = () => {
  return (
    <section className='pb-12 pt-12'>
        <Container>
            <Flex className='!block md:!flex items-center'>
                <div className='md:w-5/12 '>
                 <Image className='w-3/5 mx-auto md:w-auto' src={BannerImage}/>
                </div>
               <div className='md:w-7/12 px-3 md:px-0 pt-10 md:pt-0'>
                 <Heading  className='md:w-[580px]' text="How to design your site footer like we did"/>
                 <SubHeading className='md:w-[600px] pt-4 pb-8' text="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."/>
                 <Button text="Learn More"/>
               </div>
            </Flex>

        </Container>
    </section>
  )
}

export default Design