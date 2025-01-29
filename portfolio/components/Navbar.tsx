import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { TiThMenu, TiTimes } from "react-icons/ti";
import { motion } from "framer-motion";
import { strings } from "@/app/constants/links-constants";

import Link from "next/link";
import { Logo } from "@/app/components/ui/Logo";

/**framer motion variants */

const sectionVariant = {
  hidden: { opacity: 0, x: 10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

interface Props {
  selectedPage: any;
  setSelectedPage: any;
  page: any;
  topPage: any;
}

{
  /**pass paramers to links */
}
const Links = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-dark-app" : ""} hover:text-dark-app transition duration-150  md:text-md `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ topPage, setSelectedPage, selectedPage }: Props) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  //lock scrolling when modals are opened

  if (typeof window !== "undefined") {
    let body = window.document.body;

    if (menuToggle === true) {
      body.classList.add("overflowHidden");
      body.classList.add("overflowHidden");
    } else if (menuToggle === false) {
      body.classList.remove("overflowHidden");
      body.classList.remove("overflowHidden");
    }
  }

  return (
    <nav className=" block top-0 h-20 relative w-full">
      <div className="flex items-center justify-between mx-auto mt-3 px-2 md:px-9">
        <Link href={`/`}>
          <Logo />
        </Link>

        {/** desktop view */}

        {isAboveSmallScreens ? (
          <div className="flex text-dark-app bg-white border-[0.5px] border-gray-700 dark:bg-gray-200 px-5 py-3 rounded-lg justify-between gap-10 font-opensans font-semibold">
            <Link href={"/contact"}>{strings.contact}</Link>
          </div>
        ) : (
          <button
            className="rounded-lg bg-green-700"
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <TiThMenu className="h-9 p-2 w-9" />
          </button>
        )}

        {/**mobile menu */}

        {!isAboveSmallScreens && menuToggle && (
          <>
            <div
              className="fixed w-full bg-wrapper z-[20] top-0 left-0 h-screen"
              onClick={() => setMenuToggle(false)}
            />

            <motion.div
              variants={sectionVariant}
              initial="hidden"
              animate="show"
              className="fixed z-[50] right-0 bottom-0 h-full bg-green-700 w-[60vw]"
            >
              {/**close icon */}
              <div className="flex justify-end p-5">
                <button onClick={() => setMenuToggle(!menuToggle)}>
                  <TiTimes className="h-8 w-8" />
                </button>
              </div>
              {/** menu mobile */}
              <div className="flex flex-col gap-5 ml-[30%] text-xl text-white mt-20">
                <div onClick={() => setMenuToggle(!menuToggle)}>
                  <Link href={"/"}>{strings.home}</Link>
                </div>
                <div onClick={() => setMenuToggle(!menuToggle)}>
                  <Link href={"/about"}>{strings.about}</Link>
                </div>
                <div onClick={() => setMenuToggle(!menuToggle)}>
                  <Link href={"/experience"}>{strings.experience}</Link>
                </div>
                <div onClick={() => setMenuToggle(!menuToggle)}>
                  <Link href={"/skills"}>{strings.skills}</Link>
                </div>
                <div onClick={() => setMenuToggle(!menuToggle)}>
                  <Link href={"/projects"}>{strings.projects}</Link>
                </div>
                <div onClick={() => setMenuToggle(!menuToggle)}>
                  <Link href={"/contact"}>{strings.contact}</Link>
                </div>

                <div>
                  <a
                    className=" hover:text-app-green"
                    href="https://github.com/mvykool"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
                <div>
                  <a
                    className=" hover:text-app-green"
                    href="https://www.linkedin.com/in/michaelhernandezz/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
