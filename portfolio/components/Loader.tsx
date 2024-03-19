import React from 'react'
import Image from 'next/image';

const Loader = () => {
  return (
    <div className='loader'>
        <div>
        <Image className='h-20 md:h-40'  alt='loader' width={100} height={100} src='/Loader.svg' />
        </div>
    </div>
  )
}

export default Loader