import React from 'react'
import {TbBrandGithub} from "react-icons/tb"

const SideRight = () => {
  return (
    <div className=' fixed top-[50%] left-10 '>
      <TbBrandGithub className='text-gray-400 text-2xl cursor-pointer hover:scale-110 transition duration-200' />
    </div>
  )
}

export default SideRight