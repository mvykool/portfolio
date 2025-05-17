"use client";

import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import { TbBrandGithub } from "react-icons/tb";
import Image from "next/image";
import GoPreviousPage from "@/app/components/ui/GoPreviouspage";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  const title: string = "<projects>";
  const titleEnd: string = "</projects>";

  return (
    <div className="w-6/6 md:w-3/6 pt-20 md:pt-0  mx-auto mt-5 md:mt-0">
      <GoPreviousPage />

      <section id="projects" className="py-5 mx-7">
        {/* HEADINGS */}
        <motion.div
          className="md:w-2/5 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div>
            <p className="font-playfair text-black dark:text-white font-semibold text-4xl flex gap-2">
              <span className="text-app-green">Personal </span>Projects
            </p>
            <div className="flex justify-center mt-5"></div>
          </div>
        </motion.div>

        {/* PROJECTS */}
        <div className="flex justify-center">
          <motion.div
            className="sm:grid sm:grid-cols-2 md:gap-3 "
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/**project 1 */}

            <motion.div
              initial="hidden"
              className="mt-10"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="hover:scale-95 duration-200 transition bg-white dark:bg-dark-card border-[0.5px] border-gray-700 rounded-lg  p-2 relative md:h-[65vh] xl:h-[55vh] cursor-pointer">
                <Image
                  width={700}
                  height={500}
                  src="/landing.png"
                  alt="airman"
                  className="object-left object-cover rounded-sm  h-[40vh] md:h-[20vh] border-black border"
                />
                <div className="flex items-center justify-center gap-3">
                  <p className="my-5 flex justify-center font-bold text-2xl text-black dark:text-white">
                    Neb<span className="text-app-green">u</span>la{" "}
                  </p>
                  <p className="my-5 flex justify-center font-bold text-2xl text-black dark:text-white">
                    landing
                  </p>
                </div>

                <div
                  className="flex gap-2 md:gap-0 flex-row md:space-x-3
              my-5 ml-2 md:text-xs md:justify-center  dark:text-white"
                >
                  <small className="text-white bg-orange-500 rounded-lg px-2 text-sm">
                    Astro
                  </small>
                  <small className="text-sm bg-blue-500 rounded-lg px-2">
                    React
                  </small>
                  <small className="text-sm bg-sky-500 rounded-lg px-2">
                    Tailwind
                  </small>
                </div>

                <p className="text-sm mb-2 text-gray-700 dark:text-gray-300 mx-2">
                  Main landing page for Nebula, built with the{" "}
                  <span className="text-app-green font-semibold">
                    best stack for landing pages
                  </span>
                  .
                </p>

                <p className="text-sm mb-2 text-gray-700 dark:text-gray-300 mx-2">
                  Main entry point to Nebula,{" "}
                  <span className="text-app-green font-semibold">
                    Basic, simple, straight to the point.
                  </span>
                </p>

                <div className="flex justify-center mt-5 md:bottom-0 md:absolute md:w-full">
                  <a
                    href="https://nebula-landing-ivory.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex text-black dark:text-white items-center m-5 border-2 border-black dark:border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition "
                  >
                    Live
                    <HiOutlineExternalLink className="mx-2" />
                  </a>
                  <a
                    href="https://github.com/mvykool/nebula-landing"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center m-5 border-2 text-black dark:text-white border-black dark:border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition"
                  >
                    Code
                    <TbBrandGithub className="mx-2" />
                  </a>
                </div>
              </div>
            </motion.div>
            {/**project 1 */}

            <motion.div
              initial="hidden"
              className="mt-10"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="hover:scale-95 duration-200 transition bg-white dark:bg-dark-card border-[0.5px] border-gray-700 rounded-lg  p-2 relative md:h-[65vh] xl:h-[55vh] cursor-pointer">
                <Image
                  width={700}
                  height={500}
                  src="/nebula.png"
                  alt="airman"
                  className="object-left object-cover rounded-sm  h-[40vh] md:h-[20vh] border-black border"
                />
                <p className="my-5 flex justify-center font-bold text-2xl text-black dark:text-white">
                  Neb<span className="text-app-green">u</span>la{" "}
                </p>

                <div
                  className="flex gap-2 md:gap-0 flex-row md:space-x-3
              my-5 ml-2 md:text-xs md:justify-center  dark:text-white"
                >
                  <small className="text-white bg-blue-500 rounded-lg px-2 text-sm">
                    React
                  </small>
                  <small className="text-sm bg-red rounded-lg px-2">
                    Nestjs
                  </small>
                  <small className="text-sm bg-sky-500 rounded-lg px-2">
                    Tailwind
                  </small>
                  <small className="text-sm bg-gray-500 rounded-lg px-2">
                    Postgres
                  </small>
                </div>

                <p className="text-sm mb-2 text-gray-700 dark:text-gray-300 mx-2">
                  Notion-esque project creation web-
                  <span className="text-app-green font-semibold">
                    app, with full authentication
                  </span>
                  .
                </p>

                <p className="text-sm mb-2 text-gray-700 dark:text-gray-300 mx-2">
                  Allows user to create, customize, and even publish share their
                  projects as static sites,{" "}
                  <span className="text-app-green font-semibold">
                    ideal for documentation, or guidelines
                  </span>
                </p>

                <div className="flex justify-center mt-5 md:bottom-0 md:absolute md:w-full">
                  <a
                    href="https://nebula-client.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex text-black dark:text-white items-center m-5 border-2 border-black dark:border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition "
                  >
                    Live
                    <HiOutlineExternalLink className="mx-2" />
                  </a>
                  <a
                    href="https://github.com/mvykool/nebula"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center m-5 border-2 text-black dark:text-white border-black dark:border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition "
                  >
                    Code
                    <TbBrandGithub className="mx-2" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              className="mt-10 "
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="hover:scale-95 duration-200 transition  rounded-lg bg-white  dark:bg-dark-card border-[0.5px] border-gray-700 p-2 relative md:h-[65vh] xl:h-[55vh] cursor-pointer">
                <Image
                  width={700}
                  height={500}
                  src="/homeomd.png"
                  alt="airman"
                  className=" object-cover rounded-sm object-top h-[40vh] border border-black md:h-[20vh]"
                />
                <p className="my-5 flex justify-center font-bold text-2xl text-black dark:text-white">
                  Oh M<span className="text-app-green">y Dog</span>{" "}
                </p>

                <div
                  className="flex gap-2 md:gap-0 flex-row md:space-x-3
                   dark:text-white
              my-5 ml-2 md:text-xs md:justify-center"
                >
                  <small className="bg-blue-500 px-2 rounded-lg text-sm">
                    React
                  </small>
                  <small className="bg-purple-400 px-2 rounded-lg text-sm">
                    Vite
                  </small>

                  <small className="bg-lime-600 px-2 rounded-lg text-sm">
                    Vitest
                  </small>
                  <small className="bg-sky-500 px-2 rounded-lg text-sm">
                    Tailwind
                  </small>
                </div>

                <p className="text-sm  mb-2 text-gray-700 dark:text-gray-300 mx-2">
                  App that helps users find and match with {""}
                  <span className="text-app-green font-semibold">
                    dogs for adoption.
                  </span>
                </p>

                <p className="text-sm  mb-2 text-gray-700 dark:text-gray-300 mx-2">
                  Users can search, filter, and mark {""}
                  <span className="text-app-green font-semibold">
                    dogs as favorites to find the perfect match.
                  </span>
                </p>

                <div className="flex justify-center mt-5 md:bottom-3 md:absolute md:w-full">
                  <a
                    href="https://fetch-app-eta.vercel.app/login"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center m-5 border-2 text-black dark:text-white border-black dark:border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition "
                  >
                    Live
                    <HiOutlineExternalLink className="mx-2" />
                  </a>
                  <a
                    href="https://github.com/mvykool/Fetch-app"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center m-5 border-2 text-black dark:text-white border-black dark:border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition "
                  >
                    Code
                    <TbBrandGithub className="mx-2" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/**project 4 */}
            <motion.div
              initial="hidden"
              className="mt-10 "
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="hover:scale-95 duration-200 transition  rounded-lg bg-white  dark:bg-dark-card border-[0.5px] border-gray-700 p-2 relative md:h-[65vh] xl:h-[55vh] cursor-pointer">
                <Image
                  width={700}
                  height={500}
                  src="/ambient.png"
                  alt="airman"
                  className=" object-cover rounded-sm object-center h-[40vh] border border-black md:h-[20vh]"
                />
                <p className="my-5 flex justify-center font-bold text-2xl text-black dark:text-white">
                  Amb<span className="text-app-green">ient</span>{" "}
                </p>

                <div
                  className="flex gap-2 md:gap-0 flex-row md:space-x-3
                   dark:text-white
              my-5 ml-2 md:text-xs md:justify-center"
                >
                  <small className="bg-blue-500 px-2 rounded-lg text-sm">
                    React
                  </small>
                  <small className="bg-rose-400 px-2 rounded-lg text-sm">
                    Framer-motion
                  </small>
                  <small className="bg-sky-500 px-2 rounded-lg text-sm">
                    Tailwind
                  </small>
                </div>

                <p className="text-sm  mb-2 text-gray-700 dark:text-gray-300 mx-2">
                  Eco-fiendly themed landing page with {""}
                  <span className="text-app-green font-semibold">
                    beautiful animations
                  </span>
                </p>

                <p className="text-sm  mb-2 text-gray-700 dark:text-gray-300 mx-2">
                  Focused on performance and {""}
                  <span className="text-app-green font-semibold">
                    accessibility
                  </span>
                </p>

                <div className="flex justify-center mt-5 md:bottom-3 md:absolute md:w-full">
                  <a
                    href="https://ambient-iota.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center m-5 border-2 text-black dark:text-white border-black dark:border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition "
                  >
                    Live
                    <HiOutlineExternalLink className="mx-2" />
                  </a>
                  <a
                    href="https://github.com/mvykool/Ambient"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center m-5 border-2 text-black dark:text-white border-black dark:border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition "
                  >
                    Code
                    <TbBrandGithub className="mx-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
