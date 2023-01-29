import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <main className='bg-deep-blue'>
      <Head>
        <title>Maicol H | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <section>
        
       </section>
     
    </main>
  )
}
