import React, { useEffect, useRef } from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Lottie from "lottie-react"
import Office from "../public/office2.json";


interface Props{
    setSelectedPage: any
}


const Hero = ({setSelectedPage}: Props) => {

    const isAboveLarge = useMediaQuery("(min-width: 1060px)");


//**tags */    

const title: string = "<title>"
const titleEnd: string = "</title>"


  return (
    <section id='home' className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'>
      
      
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="h-[25vh] w-[25vw] md:-mt-40"
        >
            <Lottie loop={true} animationData={Office}/>
          </motion.div>
            
    

        ) : (
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mt-20"
        >
            <Lottie loop={true} animationData={Office}/>
          </motion.div>
            
        )}
      </div>

      <div className="z-30 basis-2/5 mt-12 md:mt-40">
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
        <span className='text-app-green text-xs my-5' >{title}</span>
         <p className="text-6xl md:mt-8 font-playfair z-10 text-center md:text-start">
          Maicol Hernandez
          </p>

          <p className="mt-2 text-app-blue mb-2 text-4xl text-center md:text-start">
           Front-end Developer.
          </p>
          <span className='text-app-green text-xs'>{titleEnd}</span>
        </motion.div>

         {/* CALL TO ACTIONS */}
         <motion.div
          className="flex mt-10 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-app-green text-white rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-app-green py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-app-blue transition font-semibold duration-500 w-full h-full flex items-center justify-center px-10">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
     
        </motion.div>


      </div>

    </section>
  )
}

export default Hero