import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'

const Demo = () => {
  return (
    <section className='py-8 bg-[#F5F7FA]'>
      <Container>
           <h1 className='px-3 md:px-0 md:w-[840px] mx-auto text-center leading-[50px] md:leading-[76px] text-4xl md:text-[64px] text-[#263238] font-inter font-semibold pb-8'>Pellentesque suscipit fringilla libero eu.</h1>
           <div className='text-center'>
              <Button type={true} text="Get a Demo"/>
           </div>
      </Container>
    </section>
  )
}

export default Demo