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
    <span className='text-app-green text-sm md:text-base' >{title}</span>
    <section id='about' className='md:flex md:justify-between md:items-center md:h-full gap-16 py-5'>
      
 
      
    {/* IMAGE SECTION */}
    <div className="basis-3/5 z-10 mt-5 flex justify-center md:order-2">
      {isAboveLarge ? (
        <div
          className="relative z-0 ml-52 before:absolute before:-top-10 before:-left-10 
          before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-app-green before:z-[-1] "
        >
          <img
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] "
            src="assets/person-3.jpeg"
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
        <p className="text-4xl md:text-5xl font-playfair z-10 text-center md:text-start">
          About
        </p>
        <p className="text-4xl md:text-5xl font-playfair z-10 text-center md:text-start text-app-green">
          Me
        </p>
        </div>

        <p className="mt-10 mb-7 text-sm md:text-base text-center md:text-start">
        Hi there! I'm Maicol, and I'm a highly driven, front-end focused 
         web developer, with emphasis in accessibility, and responsive
         design.
        </p>
        <p className="mt-10 mb-7 text-sm md:text-base text-center md:text-start">
        I enjoy building amazing UIs, working with APIs, learning new things all the time,
         and keeping myself up to date with the new tendencies of web development.
        </p>
      </motion.div>

    </div>
  </section>
   <span className='text-app-green text-sm md:text-base' >{titleEnd}</span>
   </>
  )
}

export default About