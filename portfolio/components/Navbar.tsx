import React, { useState } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from '@/hooks/useMediaQuery';
import {TiThMenu, TiTimes} from "react-icons/ti"

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
        className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} hover:text-yellow transition duration-500 `}
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
        <h4 className='font-playfair text-3xl font-bold'>
          MH
        </h4>

         {/** desktop view */}

         {isAboveSmallScreens ? (
            <div className='flex justify-between gap-16 font-opensans font-semibold'>
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
           <button className='rounded-full bg-red p-2'
           onClick={() => setMenuToggle(!menuToggle)}
           >
             <TiThMenu/>
           </button>
         )}

         {/**mobile menu */}

         {!isAboveSmallScreens && menuToggle && (
            <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'>
             {/**close icon */}
             <div className='flex justify-end p-5'>
                <button onClick={() => setMenuToggle(!menuToggle)}>
                <TiTimes className='h-8 w-8'/>
                </button>
             </div>
             {/** menu mobile */}
             <div className='flex flex-col gap-10 ml-[33%] text-xl text-deep-blue mt-20'>
             <Link
                 page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}topPage={undefined}               />
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
            </div>
         )}

        </div>

    </nav>
  )
}

export default Navbar