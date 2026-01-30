import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import ListItem from '../components/ListItem'
import FooterLogo from '../assets/footerlogo.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { LuSend } from 'react-icons/lu'

const Footer = () => {
    return (
        <footer className='py-16 bg-[#263238]'>
            <Container>
                <Flex className='!block md:!flex px-4 md:px-0'>
                    <div className='md:w-5/12'>
                       <Image src={FooterLogo}/>
                       <p className='text-[#F5F7FA] text-sm font-inter font-normal pt-10 pb-2'>Copyright © 2020 Nexcent ltd.</p>
                       <p className='text-[#F5F7FA] text-sm font-inter font-normal '>All rights reserved</p>

                       <ul className='flex gap-x-4 pt-10'>
                        <li className='w-[30px] h-[30px] bg-[#3C464C] rounded-full flex items-center justify-center'><FaFacebookF className=' text-white'/></li>
                        <li className='w-[30px] h-[30px] bg-[#3C464C] rounded-full flex items-center justify-center'><FaYoutube className=' text-white'/></li>
                        <li className='w-[30px] h-[30px] bg-[#3C464C] rounded-full flex items-center justify-center'><FaTwitter className=' text-white'/></li>
                        <li className='w-[30px] h-[30px] bg-[#3C464C] rounded-full flex items-center justify-center'><FaInstagram className=' text-white'/></li>
                       </ul>
                    </div>
                    <div className='md:w-2/12 '>
                      <strong className='text-xl text-[#F5F7FA] font-inter font-semibold '>Company</strong>
                     <ul className='flex flex-col gap-y-3 mt-6'>
                        <ListItem className='text-[#F5F7FA]' text="About us"/>
                        <ListItem className='text-[#F5F7FA]' text="Blog"/>
                        <ListItem className='text-[#F5F7FA]' text="About us"/>
                        <ListItem className='text-[#F5F7FA]' text="Contact us"/>
                        <ListItem className='text-[#F5F7FA]' text="Testimonials"/>
                        
                     </ul>
                    </div>
                    <div className='md:w-2/12 '>
                      <strong className='text-xl text-[#F5F7FA] font-inter font-semibold '>Support</strong>
                     <ul className='flex flex-col gap-y-3 mt-6'>
                        <ListItem className='text-[#F5F7FA]' text="Help center"/>
                        <ListItem className='text-[#F5F7FA]' text="Blog"/>
                        <ListItem className='text-[#F5F7FA]' text="Legal"/>
                        <ListItem className='text-[#F5F7FA]' text="Privacy policy"/>
                        <ListItem className='text-[#F5F7FA]' text="Status"/>
                        
                     </ul>
                    </div>
                   
                    <div className='md:w-3/12 '>
                     <strong className='text-xl text-[#F5F7FA] font-inter font-semibold '>Stay up to date</strong>
                    <div className=' relative w-[255px]  mt-6'>
                         <input className='text-white w-full bg-[#515B60] rounded-md py-2 px-3' type="text" placeholder='Your email address'/>
                         <LuSend className='text-white absolute top-1/2 -translate-y-1/2 right-5'/>

                    </div>
                    </div>
                </Flex>

            </Container>
        </footer>
    )
}

export default Footer