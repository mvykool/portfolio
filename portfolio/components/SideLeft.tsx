import React from 'react'
import {TbBrandGithub, TbBrandGmail, TbBrandWhatsapp, TbBrandDiscord} from "react-icons/tb"

const SideRight = () => {
  return (
  <>
  <div className='fixed top-[40%] left-14'>
    <img src="/blob.svg" alt="" className='h-10 w-10' />
  </div>
  <div className='fixed top-[12%] left-[15%]'>
    <img src="/blob2.svg" alt="" className='h-20 w-20' />
  </div>
  <div className='fixed bottom-[17%] left-[6%]'>
    <img src="/blob3.svg" alt="" className='h-14 w-14' />
  </div>
    <div className='flex flex-col gap-2 fixed top-[50%] left-10 '>
      <a href="https://github.com/mvykool" rel="noreferrer" target="_blank">
      <TbBrandGithub className='text-gray-400 h-5 w-5 cursor-pointer hover:scale-110 transition duration-200' />
      </a>
      <a href='#contact'>
      <TbBrandGmail className='text-gray-400 h-5 w-5 cursor-pointer hover:scale-110 transition duration-200' />
      </a>
      <a target="_blank" rel="noreferrer" href="https://wa.me/573015874874">
      <TbBrandWhatsapp className='text-gray-400 h-5 w-5  text-2xl cursor-pointer hover:scale-110 transition duration-200' />
      </a>
      <a target="_blank" rel="noreferrer" href="https://discordapp.com/users/844721056211927041">
      <TbBrandDiscord className='text-gray-400 h-5 w-5 cursor-pointer hover:scale-110 transition duration-200' />
      </a>
    </div>
    </>  
  )
} 

export default SideRight

