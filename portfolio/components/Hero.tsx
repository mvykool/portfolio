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





  return (
    <section id='home' className='md:flex md:justify-between md:items-center md:h-full gap-28 pt-10 md:pt-5 pb-10'>
      
      
      {/* IMAGE SECTION */}
      <div className="basis-2/5 z-10 mt-20 md:-mt-10 flex justify-center md:order-2">
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
          className="h-[25vh] w-[25vw]"
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

      <div className="z-30 basis-3/5 mt-12 md:mt-40">
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
     
         <p className="text-3xl md:text-5xl mt-5 font-semibold z-10 text-center md:text-start">
          Maicol Hernandez
          </p>

          <p className="mt-2 text-app-blue mb-5 font-semibold text-lg md:text-2xl text-center md:text-start">
           Front-end Developer
          </p>

        </motion.div>

         {/* CALL TO ACTIONS */}
         <motion.div
          className="flex mt-10 justify-center space-x-2 md:justify-start"
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
            className="bg-app-green text-white rounded-sm py-2 px-5 font-semibold text-sm
              hover:bg-app-menu hover:text-white transition duration-200 hover:scale-105"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>

          <a href="CV.pdf" target="_blank" rel="noreferrer"  className="border-2 border-app-menu text-app-menu rounded-sm py-2 px-5 font-semibold text-sm
              hover:border-app-green hover:scale-105 duration-200 transition hover:text-white " >Résumé</a>   
        
        </motion.div>

        <motion.div
          className="flex mt-5 mb-5 justify-center md:justify-start"
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