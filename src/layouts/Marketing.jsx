import React from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import MarketingCard from '../components/MarketingCard'
import ImageOne from '../assets/marketing1.png'
import ImageTwo from '../assets/marketing2.png'
import ImageThree from '../assets/marketing3.png'

const Marketing = () => {
  return (
    <section className='pt-12 pb-24'>
        <Container>
            <Heading className='text-center' text="Caring is the new marketing"/>
            <SubHeading className="pt-2 pb-4 w-[628px] mx-auto text-center" text="The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​"/>
           <Flex className='justify-between'>
             <MarketingCard image={ImageOne} text="Creating Streamlined Safeguarding Processes with OneRen"/>
            <MarketingCard image={ImageTwo} text="What are your safeguarding responsibilities and how can you manage them?"/>
            <MarketingCard image={ImageThree} text="Revamping the Membership Model with Triathlon Australia"/>
           </Flex>

        </Container>
    </section>
  )
}

export default Marketing