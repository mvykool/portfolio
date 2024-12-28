import Head from "next/head";
import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect } from "react";
import ScrollToTop from "./ScrollTop";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [topPage, setTopPage] = useState(true);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // On mount, read the theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY === 0) setTopPage(true);
      if (window.screenY !== 0) setTopPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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
        topPage={topPage}
      />

      <div>
        <main className="w-11/12 md:w-full mx-auto mt-2 md:mt-0 h-auto overflow-x-hidden">
          {children}
        </main>
      </div>

      <ScrollToTop />

      <footer className="">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
