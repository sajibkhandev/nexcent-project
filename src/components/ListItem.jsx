import React from 'react'

const ListItem = ({text,className}) => {
  return (
    <li className={`text-base text-[#18191F] font-normal font-inter hover:font-medium duration-500 cursor-pointer ${className}`}>{text}</li>
  )
}

export default ListItem