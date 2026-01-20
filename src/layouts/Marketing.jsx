import React from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import MarketingCard from '../components/MarketingCard'

const Marketing = () => {
  return (
    <section className='pt-12 pb-24'>
        <Container>
            <Heading className='text-center' text="Caring is the new marketing"/>
            <SubHeading className="pt-2 pb-4 w-[628px] mx-auto text-center" text="The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​"/>
           <Flex className='justify-between'>
             <MarketingCard/>
            <MarketingCard/>
            <MarketingCard/>
           </Flex>

        </Container>
    </section>
  )
}

export default Marketing