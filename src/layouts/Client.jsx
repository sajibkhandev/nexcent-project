import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Image from '../components/Image'
import Flex from '../components/Flex'

import ImageOne from '../assets/client1.png'
import ImageTwo from '../assets/client2.png'
import ImageThree from '../assets/client3.png'
import ImageFour from '../assets/client4.png'
import ImageFive from '../assets/client5.png'
import ImageSix from '../assets/client6.png'
import ImageSeven from '../assets/client7.png'
import ClientCard from '../components/ClientCard'

import IconOne from '../assets/clientIcon.png'

const Client = () => {
  return (
    <section className='py-10'>
      <Container>
        <Heading className='text-center ' text="Our Clients" />
        <SubHeading className='text-center pt-2 px-3 md:px-0' text="We have been working with some Fortune 500+ clients" />
        <Flex className="justify-between pt-10 pb-[65px] px-2 md:px-0">
          <Image className='w-[30px] md:w-auto' src={ImageOne} alt="Client Image" />
          <Image className='w-[30px] md:w-auto' src={ImageTwo} alt="Client Image" />
          <Image className='w-[30px] md:w-auto' src={ImageThree} alt="Client Image" />
          <Image className='w-[30px] md:w-auto' src={ImageFour} alt="Client Image" />
          <Image className='w-[30px] md:w-auto' src={ImageFive} alt="Client Image" />
          <Image className='w-[30px] md:w-auto' src={ImageSix} alt="Client Image" />
          <Image className='w-[30px] md:w-auto' src={ImageSeven} alt="Client Image" />
        </Flex>

        <Heading className='text-center w-auto md:w-[542px] mx-auto px-3 md:px-0' text="Manage your entire community in a single system" />
        <SubHeading className='text-center pt-2' text="Who is Nextcent suitable for?
" />

     <Flex className='flex-wrap justify-center md:justify-between pt-4 gap-y-6 md:gap-x-0'>
      <ClientCard  title="Membership Organisations" des="Our membership management software provides full automation of membership renewals and payments" icon={IconOne}/>
     <ClientCard  title="National Associations" des="Our membership management software provides full automation of membership renewals and payments" icon={IconOne}/>
     <ClientCard   title="Clubs And Groups" des="Our membership management software provides full automation of membership renewals and payments" icon={IconOne}/>
     </Flex>
     
     

 

      </Container>

    </section>
  )
}

export default Client