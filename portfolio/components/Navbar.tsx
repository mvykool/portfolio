import React, { useState } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from '@/hooks/useMediaQuery';
import {TiThMenu, TiTimes} from "react-icons/ti"
import { motion} from 'framer-motion';
import {TbBrandGithub, TbBrandGmail, TbBrandWhatsapp, TbBrandDiscord} from "react-icons/tb"

import Link from 'next/link';

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
const Links = ({ page, selectedPage, setSelectedPage}: Props) => {
    const lowerCasePage = page.toLowerCase();

    return(
        <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-app-green" : ""} hover:text-app-green transition duration-150 md:text-xs `}
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




  //lock scrolling when modals are opened 


if (typeof window !== "undefined") {
  let body = window.document.body;

  if (menuToggle === true) {
    body.classList.add("overflowHidden");
    body.classList.add("overflowHidden")
} else if (menuToggle === false) {
   body.classList.remove("overflowHidden");
   body.classList.remove("overflowHidden");
}

}
  


  return (
    <nav className="bg-deep-blue fixed  z-40 w-full top-0 py-2">
        <div className='flex items-center justify-between mx-auto px-9'>
        <Link href={`/`} >
        <img src="/logo.png" alt="logo" className='h-20 md:h-16 md:w-16 w-20' />
        </Link>

         {/** desktop view */}

         {isAboveSmallScreens ? (
            <div className='flex text-app-blue justify-between gap-10 font-opensans font-semibold'>
               <Links
                page="Home"
                selectedPage={selectedPage}
                 setSelectedPage={setSelectedPage} topPage={undefined}               />
               <Links
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} topPage={undefined}               />
               <Links
                 page="Skills"
                selectedPage={selectedPage}
                 setSelectedPage={setSelectedPage} topPage={undefined}               />
               <Links
                page="Projects"
                 selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} topPage={undefined}               />
               <Links
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
             <Links
                 page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}topPage={undefined} />
             </div>
              <div onClick={() => setMenuToggle(!menuToggle)}>
             <Links
                 page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}topPage={undefined} />
             </div>
             <div onClick={() => setMenuToggle(!menuToggle)}>
             <Links
                 page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}topPage={undefined} />
             </div>
             <div onClick={() => setMenuToggle(!menuToggle)}>
             <Links
                 page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}topPage={undefined} />
             </div>
             <div onClick={() => setMenuToggle(!menuToggle)}>
             <Links
                 page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}topPage={undefined} />
             </div>

             <div>
             <a  href="https://github.com/mvykool" rel="noreferrer" target="_blank">
              Github</a>
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