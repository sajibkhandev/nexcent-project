import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`text-[#ffffff] text-base font-medium font-inter bg-primary py-3.5 px-8 rounded border border-transparent hover:bg-transparent hover:text-primary hover:border-primary duration-500 ${className}`}>{text}</button>
  )
}

export default Button