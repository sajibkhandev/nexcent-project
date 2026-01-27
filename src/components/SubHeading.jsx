import React from 'react'

const SubHeading = ({text,className}) => {
  return (
    <p className={`text-sm md:text-base text-gray font-inter font-normal ${className}`}>{text}</p>
  )
}

export default SubHeading