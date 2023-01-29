import React, { useState } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from '@/hooks/useMediaQuery';

interface Props {
    selectedPage: any
    setSelectedPage: any
    page: any
}


{/**pass paramers to links */}
const Link = ({ page, selectedPage, setSelectedPage}: Props) => {
    const lowerCasePage = page.toLowerCase();

    return(
        <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} hover:text-yellow transition duration-500 `}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}


const Navbar = ({setSelectedPage, selectedPage}: Props) => {


    const [menuToggle, setMenuToggle] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");


  return (
    <nav className={` z-40 w-full top-0 py-6`}>
        <div className='flex items-center justify-between mx-auto w-5/6'>
        <h4 className='font-playfair text-3xl font-bold'>
          MH
        </h4>

         {/** desktop view */}

         {isAboveSmallScreens ? (
            <div className='flex justify-between gap-16 font-opensans font-semibold'>
               <Link
               page="Home"
               selectedPage={selectedPage}
               setSelectedPage={setSelectedPage}
               />
            </div>
         ) : (
            <div>

            </div>
         )}

        </div>

    </nav>
  )
}

export default Navbar