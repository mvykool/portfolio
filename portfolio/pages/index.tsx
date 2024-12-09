import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Hero from "@/app/components/Hero";
import LineGradient from "@/app/components/LineGradient";

const inter = { subsets: ["latin"] };

export default function Home() {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <main>
      <Head>
        <title>Maicol H | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      {/**landing/ hero */}

      <Hero setSelectedPage={setSelectedPage} />
    </main>
  );
}
