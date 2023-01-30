import React, { useState } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from '@/hooks/useMediaQuery';
import {TiThMenu, TiTimes} from "react-icons/ti"
import { motion} from 'framer-motion'

/**framer motion variants */
 
const sectionVariant = {
  hidden : { opacity: 0, x: 10},
  show: { opacity: 1, x:0,
  transition: { duration: 0.5, delay: 0.1}
  }
} 


interface Props {
    selectedPage: any
    setSelectedPage: any
    page: any
    topPage: any
}


{/**pass paramers to links */}
const Link = ({ page, selectedPage, setSelectedPage}: Props) => {
    const lowerCasePage = page.toLowerCase();

    return(
        <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-app-green" : ""} hover:text-app-green transition duration-150 `}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}


const Navbar = ({topPage, setSelectedPage, selectedPage}: Props) => {


    const [menuToggle, setMenuToggle] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  


  return (
    <nav className="bg-deep-blue fixed  z-40 w-full top-0 py-6">
        <div className='flex items-center justify-between mx-auto w-5/6'>
        <a href="/">
        <img src="/logo.png" alt="logo" className='h-10 w-10 ' />
        </a>

         {/** desktop view */}

         {isAboveSmallScreens ? (
            <div className='flex text-app-blue justify-between gap-10 font-opensans font-semibold'>
               <Link
                page="Home"
                selectedPage={selectedPage}
                 setSelectedPage={setSelectedPage} topPage={undefined}               />
               <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} topPage={undefined}               />
               <Link
                 page="Skills"
                selectedPage={selectedPage}
                 setSelectedPage={setSelectedPage} topPage={undefined}               />
               <Link
                page="Projects"
                 selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} topPage={undefined}               />
               <Link
                 page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} topPage={undefined}               />

                        
            </div>
         ) : (
           <button className='rounded-lg bg-app-menu p-2'
           onClick={() => setMenuToggle(!menuToggle)}
           >
             <TiThMenu/>
           </button>
         )}

         {/**mobile menu */}

         {!isAboveSmallScreens && menuToggle && (
          <>
        <div className='fixed w-full bg-wrapper z-[20] top-0 left-0 h-screen' onClick={() => setMenuToggle(false)} /> 


            <motion.div 
        variants={sectionVariant}
       initial="hidden"
       animate='show'
            
            className='fixed z-[50] right-0 bottom-0 h-full bg-app-menu w-[55vw]'>
             {/**close icon */}
             <div className='flex justify-end p-5'>
                <button onClick={() => setMenuToggle(!menuToggle)}>
                <TiTimes className='h-8 w-8'/>
                </button>
             </div>
             {/** menu mobile */}
             <div className='flex flex-col gap-5 ml-[33%] text-xl text-deep-blue mt-40'>

             <div onClick={() => setMenuToggle(!menuToggle)}>
             <Link
                 page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}topPage={undefined} />
             </div>
              <div onClick={() => setMenuToggle(!menuToggle)}>
             <Link
                 page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}topPage={undefined} />
             </div>
             <div onClick={() => setMenuToggle(!menuToggle)}>
             <Link
                 page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}topPage={undefined} />
             </div>
             <div onClick={() => setMenuToggle(!menuToggle)}>
             <Link
                 page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}topPage={undefined} />
             </div>
             <div onClick={() => setMenuToggle(!menuToggle)}>
             <Link
                 page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}topPage={undefined} />
             </div>
             </div>
            </motion.div>
            </>
         )}
          
        </div>

    </nav>
  )
}

export default Navbar