import React from 'react'
import Heading from './Heading'
import SubHeading from './SubHeading'
import Image from './Image'


const ClientCard = ({title,des,icon,className}) => {
  return (
    <div className={`w-[363px] shadow rounded-lg pt-6 pb-[42px] px-14 text-center ${className}`}>
        <Image className='mx-auto' src={icon}/>
        <Heading className='text-[28px] w-[267px] pt-4 pb-2'  text={title}/>
        <SubHeading className='text-sm w-[251px]' text={des}/>
    </div>
  )
}

export default ClientCard