import Head from 'next/head'
import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import useMediaQuery from '../hooks/useMediaQuery';
import { useEffect } from 'react';
import SideRight from './SideRight';
import SideLeft from './SideLeft';
import LineGradient from './LineGradient';
import MySkills from './MySkills';
import Projects from './Projects';
import Contact from './Conctact';
import About from './About';
import ScrollToTop from './ScrollTop';

interface Props{
    children: any
}


const Layout = ({children}: Props) => {

  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [topPage, setTopPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.screenY === 0)setTopPage(true);
      if(window.screenY !== 0)setTopPage(false);

    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div>
    <Head>
    <title>Maicol Hernandez</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="theme-color" content="#59CE8F" />
    <link rel="icon" href="/logo.png" />
  </Head>

  <Navbar 
  selectedPage={selectedPage} 
  setSelectedPage={setSelectedPage} 
  page={undefined} 
  topPage={topPage}/>

  <div className='w-3/6 mx-auto md:h-full'>
   {isAboveMediumScreens && (
    <div>
      <SideRight/>
      <SideLeft/>
    </div>
     )}
  </div>

  <main className='w-4/6 md:w-3/6 mx-auto md:h-screen'>
  {children}
  </main>


<div className='w-4/6 md:w-3/6  mx-auto mt-20'>
<About setSelectedPage={setSelectedPage}/>
</div>

<div className='w-4/6 md:w-3/6  mx-auto mt-40'>
<MySkills/>
</div>

<div className='w-5/6 md:w-3/6  mx-auto mt-40'>
<Projects/>
</div>


<div className='w-4/6 md:w-3/6  mx-auto  mt-40'>
<Contact/>
</div>

<ScrollToTop/>

  <footer className='mt-16'>
    <Footer/>
  </footer>
</div>
  )
}

export default Layout