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
    <title>Maicol H | Porfolio</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="theme-color" content="#2CBCE9" />
    <link rel="icon" href="/logo.png" />
  </Head>

  <Navbar 
  selectedPage={selectedPage} 
  setSelectedPage={setSelectedPage} 
  page={undefined} 
  topPage={topPage}/>

  <div className='w-5/6 mx-auto md:h-full'>
   {isAboveMediumScreens && (
    <div>
      <SideRight/>
      <SideLeft/>
    </div>
     )}
  </div>

  <main className='w-3/6 mx-auto md:h-screen'>
  {children}
  </main>
  <LineGradient/>

<div className='w-5/6 mx-auto md:h-screen'>
<About setSelectedPage={setSelectedPage}/>
</div>

<div className='w-5/6 mx-auto md:h-screen'>
<MySkills/>
</div>
<LineGradient/>
<div className='w-5/6 mx-auto md:h-screen'>
<Projects/>
</div>


<div className='w-5/6 mx-auto md:h-screen'>
<Contact/>
</div>

<ScrollToTop/>

  <footer>
    <Footer/>
  </footer>
</div>
  )
}

export default Layout