import Head from 'next/head'
import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import useMediaQuery from '../hooks/useMediaQuery';
import { useEffect } from 'react';
import SideRight from './SideRight';
import SideLeft from './SideLeft';
import MySkills from './MySkills';
import Projects from './Projects';
import Contact from './Conctact';
import About from './About';
import Experience from './Experience';
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
    <title>Maicol H | Portfolio</title>
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

  <main className='w-4/6 md:w-3/6 mx-auto mt-2 md:mt-10 h-screen'>
  {children}
  </main>

<div id='about' className='w-4/6 md:w-3/6 pt-10 md:pt-1 mx-auto mt-5'>
<About setSelectedPage={setSelectedPage}/>
</div>

<div id='experience' className='w-5/6 md:w-3/6 pt-10 md:pt-20  mx-auto mt-0 md:mt-10'>
<Experience setSelectedPage={setSelectedPage}/>
</div>

<div className='w-6/6 md:w-3/6 pt-20  mx-auto mt-5 md:mt-20'>
<MySkills/>
</div>

<div className='w-6/6 md:w-3/6 pt-20 mx-auto mt-5 md:mt-20'>
<Projects/>
</div>


<div className='w-6/6 md:w-3/6 pt-20 mx-auto mt-5 md:mt-20'>
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