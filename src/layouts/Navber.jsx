import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import ListItem from '../components/ListItem'
import Button from '../components/Button'
import Logo from '../assets/logo.png'

const Navber = () => {
  return (
   <nav className='bg-[#F5F7FA] py-[22px] '>
       <Container>
        <Flex className="justify-between items-center ">
            <div>
                <Image src={Logo} alt="Logo Image"/>
            </div>
            <div>
                <ul className='flex gap-x-[50px]'>
                    <ListItem text="Home"/>
                    <ListItem text="Service"/>
                    <ListItem text="Feature"/>
                    <ListItem text="Product"/>
                    <ListItem text="Testimonial"/>
                    <ListItem text="FAQ"/>

                </ul>
            </div>
            <div>
                <Button text="Login"/>
                <Button className='ml-3.5' text="Sign up"/>
            </div>
        </Flex>
    </Container>
   </nav>
  )
}

export default Navber