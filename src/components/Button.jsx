import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Button = ({text,className,type}) => {

  
  return (
    <button className={`group text-[#ffffff] text-base font-medium font-inter bg-primary 
      
      py-1.5 px-5 md:py-3.5 md:px-8 rounded border border-transparent hover:bg-transparent hover:text-primary hover:border-primary duration-500 ${className}`}>{text} 
   {
    type &&  <BsArrowRight className='text-white group-hover:text-primary inline-block ml-2.5 duration-500'/>
   }
    </button>
  )
}

export default Button