import React from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
interface Props{
    setSelectedPage: any
}


const About = ({setSelectedPage}: Props) => {


    const isAboveLarge = useMediaQuery("(min-width: 1060px)");

    //**tags */    

const title: string = "<about>"
const titleEnd: string = "</about>"



  return (
    <>
    <span className='text-app-green text-sm' >{title}</span>
    <section id='about' className='md:flex md:justify-between md:items-center md:h-full gap-16 py-5'>
      
 
      
    {/* IMAGE SECTION */}
    <div className="basis-3/5 z-10 mt-5 flex justify-center md:order-2">
      {isAboveLarge ? (
        <div
          className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-20 
          before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
        >
          <img
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/person-1.jpeg"
          />
        </div>
      ) : (
        <img
          alt="profile"
          className="z-10 w-full max-w-[400px] md:max-w-[600px]"
          src="assets/person-3.jpeg"
        />
      )}
    </div>

    <div className="z-30 basis-2/5 mt-12 md:mt-5">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className='flex space-x-4 mx-auto justify-center'>
        <p className="text-5xl font-playfair z-10 text-center md:text-start">
          About
        </p>
        <p className="text-5xl font-playfair z-10 text-center md:text-start text-app-green">
          Me
        </p>
        </div>

        <p className="mt-10 mb-7 text-sm text-center md:text-start">
          Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum
          viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
        </p>
      </motion.div>

    </div>
  </section>
   <span className='text-app-green text-sm' >{titleEnd}</span>
   </>
  )
}

export default About