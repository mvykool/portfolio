import React from 'react'
import {TbBrandGithub} from "react-icons/tb"

const SideRight = () => {
  return (
    <>
    <div className='fixed bottom-[28%] right-[8%]'>
    <img src="/blob4.svg" alt="" className='h-20 w-20' />
  </div>
  <div className='fixed top-[8%] right-[1%]'>
    <img src="/blob5.svg" alt="" className='h-[30vh] w-[10vw]' />
  </div>

    <div className=' fixed top-[55%] -right-12 '>
      <a href="mailto:maykolandres4@gmail.com = Feedback&body = Message" >
        <p className='text-gray-400 text-sm md:text-xs rotate-90 cursor-pointer hover:scale-110 transition duration-200'>
        maykolandres4@gmail.com
        </p>
      </a>
    </div>
    </>
  )
}

export default SideRight