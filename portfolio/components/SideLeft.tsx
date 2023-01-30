import React from 'react'
import {TbBrandGithub, TbBrandGmail, TbBrandWhatsapp, TbBrandDiscord} from "react-icons/tb"

const SideRight = () => {
  return (
    <div className='flex flex-col gap-2 fixed top-[50%] left-10 '>
      <a href="https://github.com/mvykool" rel="noreferrer" target="_blank">
      <TbBrandGithub className='text-gray-400 h-10 w-10 cursor-pointer hover:scale-110 transition duration-200' />
      </a>
      <a href='#contact'>
      <TbBrandGmail className='text-gray-400 h-10 w-10 cursor-pointer hover:scale-110 transition duration-200' />
      </a>
      <a target="_blank" rel="noreferrer" href="https://wa.me/573015874874">
      <TbBrandWhatsapp className='text-gray-400 h-10 w-10  text-2xl cursor-pointer hover:scale-110 transition duration-200' />
      </a>
      <a target="_blank" rel="noreferrer" href="https://discordapp.com/users/844721056211927041">
      <TbBrandDiscord className='text-gray-400 h-10 w-10 cursor-pointer hover:scale-110 transition duration-200' />
      </a>
    </div>
  )
} 

export default SideRight

