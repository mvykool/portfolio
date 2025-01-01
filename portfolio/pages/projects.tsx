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
  //**tags */

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
              <div className="hover:scale-95 duration-200 transition bg-white dark:bg-dark-card border-[0.5px] border-gray-700 rounded-lg  p-3 relative md:h-[65vh] xl:h-[55vh] cursor-pointer">
                <Image
                  width={700}
                  height={500}
                  src="/project1.png"
                  alt="airman"
                  className="object-left object-cover rounded-sm  h-[40vh] md:h-[20vh] border-black border"
                />
                <p className="my-5 flex justify-center font-bold text-2xl text-black dark:text-white">
                  Airman-<span className="text-app-green">23</span>{" "}
                </p>

                <div
                  className="flex flex-col md:flex-row md:space-x-3
              my-5 ml-2 md:text-xs md:justify-center text-black dark:text-white"
                >
                  <small>-Nextjs</small>
                  <small>-Sanity.io</small>
                  <small>-Tailwind</small>
                  <small>-TypeScript</small>
                </div>

                <p className="text-sm mb-2 text-gray-700 dark:text-gray-300 mx-2">
                  Modern eCommerce store built with the{" "}
                  <span className="text-app-green font-semibold">
                    latest technology
                  </span>
                  .
                </p>

                <p className="text-sm mb-2 text-gray-700 dark:text-gray-300 mx-2">
                  Fully functional shopping cart,{" "}
                  <span className="text-app-green font-semibold">
                    payments with Stripe
                  </span>
                  , authentication, blog posts, chat & email service.
                </p>

                <div className="flex justify-center mt-5 md:bottom-0 md:absolute md:w-full">
                  <a
                    href="https://airman-23.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex text-black dark:text-white items-center m-5 border-2 border-black dark:border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition hover:bg-white hover:text-deep-blue"
                  >
                    Live
                    <HiOutlineExternalLink className="mx-2" />
                  </a>
                  <a
                    href="https://github.com/mvykool/Airman-23/tree/main/airman-23"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center m-5 border-2 text-black dark:text-white border-black dark:border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition hover:bg-white hover:text-deep-blue"
                  >
                    Code
                    <TbBrandGithub className="mx-2" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/**project 2 */}

            <motion.div
              initial="hidden"
              className="mt-10 "
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="hover:scale-95 duration-200 transition bg-white dark:bg-dark-card border-[0.5px] border-gray-700 rounded-lg p-3 relative md:h-[65vh] xl:h-[55vh] cursor-pointer">
                <Image
                  width={700}
                  height={500}
                  src="/project2.png"
                  alt="airman"
                  className=" object-cover rounded-sm border border-black  object-left h-[40vh] md:h-[20vh] md:w-full"
                />
                <p className="my-5 flex justify-center font-bold text-2xl text-black dark:text-white">
                  Lib<span className="text-app-green">ello</span>{" "}
                </p>

                <div
                  className="flex flex-col md:flex-row md:space-x-3 text-black dark:text-white
              my-5 ml-2 md:text-xs md:justify-center"
                >
                  <small>-React</small>
                  <small>-Vite</small>
                  <small>-Firebase</small>
                  <small>-Chakra UI</small>
                </div>

                <p className="text-sm mb-2 text-gray-700 dark:text-gray-300 mx-2">
                  Web app to take notes, with{" "}
                  <span className="text-app-green font-semibold">
                    different themes.
                  </span>{" "}
                </p>

                <p className="text-sm  mb-2 text-gray-700 dark:text-gray-300 mx-2">
                  Totally responsive Web app, with functionaity to create, erase
                  notes. Authentication,{" "}
                  <span className="text-app-green font-semibold">
                    and inlcudes six different themes.
                  </span>
                </p>

                <div className="flex justify-center mt-5 md:bottom-0 md:absolute md:w-full">
                  <a
                    href="https://libello.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center m-5 border-2 text-black dark:text-white border-black dark:border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition hover:bg-white hover:text-deep-blue"
                  >
                    Live
                    <HiOutlineExternalLink className="mx-2" />
                  </a>
                  <a
                    href="https://github.com/mvykool/Libello"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center m-5 border-2 text-black dark:text-white border-black dark:border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition hover:bg-white hover:text-deep-blue"
                  >
                    Code
                    <TbBrandGithub className="mx-2" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/**project 3 */}

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
              <div className="hover:scale-95 duration-200 transition  rounded-lg bg-white  dark:bg-dark-card border-[0.5px] border-gray-700 p-3 relative md:h-[65vh] xl:h-[55vh] cursor-pointer">
                <Image
                  width={700}
                  height={500}
                  src="/project3.png"
                  alt="airman"
                  className=" object-cover rounded-sm object-right h-[40vh] border border-black md:h-[20vh]"
                />
                <p className="my-5 flex justify-center font-bold text-2xl text-black dark:text-white">
                  Oh M<span className="text-app-green">y Dog</span>{" "}
                </p>

                <div
                  className="flex flex-col md:flex-row md:space-x-3 text-black dark:text-white
              my-5 ml-2 md:text-xs md:justify-center"
                >
                  <small>-AstroJS</small>
                  <small>-React</small>
                  <small>-Tailwind</small>
                </div>

                <p className="text-sm  mb-2 text-gray-700 dark:text-gray-300 mx-2">
                  Brochure static website dedicated to{" "}
                  <span className="text-app-green font-semibold">
                    dog&apos;s care.
                  </span>
                </p>

                <p className="text-sm  mb-2 text-gray-700 dark:text-gray-300 mx-2">
                  Responsive Website,{" "}
                  <span className="text-app-green font-semibold">
                    with soft color palette
                  </span>
                  , and smooth animations.
                </p>

                <div className="flex justify-center mt-5 md:bottom-3 md:absolute md:w-full">
                  <a
                    href="https://oh-my-dog.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center m-5 border-2 text-black dark:text-white border-black dark:border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition hover:bg-white hover:text-deep-blue"
                  >
                    Live
                    <HiOutlineExternalLink className="mx-2" />
                  </a>
                  <a
                    href="https://github.com/mvykool/omd/tree/main/oh-my-dog"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center m-5 border-2 text-black dark:text-white border-black dark:border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition hover:bg-white hover:text-deep-blue"
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
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="hover:scale-95 bg-white  duration-200 transition  rounded-lg dark:bg-dark-card border-[0.5px] border-gray-700 p-3 relative md:h-[65vh] xl:h-[55vh]  cursor-pointer">
                <Image
                  width={700}
                  height={500}
                  src="/open-sesamo.png"
                  alt="airman"
                  className=" object-fill rounded-sm  h-[40vh] md:h-[20vh] border border-black"
                />
                <p className="my-5 flex justify-center font-bold text-2xl gap-2 text-black dark:text-white">
                  Open<span className="text-app-green">Sesamo</span>{" "}
                </p>

                <div
                  className="flex flex-col md:flex-row md:space-x-3 text-black dark:text-white
              my-5 ml-2 md:text-xs md:justify-center"
                >
                  <small>-Angular</small>
                  <small>-Firebase</small>
                  <small>-Tailwind</small>
                </div>

                <p className="text-sm mb-2 text-gray-700 dark:text-gray-300 mx-2">
                  Website that allows you{" "}
                  <span className="text-app-green font-semibold">
                    to save usernames and passwords.
                  </span>
                </p>

                <p className="text-sm  mb-2 text-gray-700 dark:text-gray-300 mx-2">
                  Password encyption, login using Fireauth
                  <span className="text-app-green font-semibold">
                    , totally responsive, & secured
                  </span>
                </p>
                <div className="flex justify-center mt-5 md:bottom-3 md:absolute md:w-full">
                  <button className="flex items-center m-5 border-2 border-gray-400 cursor-not-allowed rounded-sm justify-center md:text-sm py-1 px-2  duration-200 transition bg-gray-400">
                    Development
                  </button>
                  <a
                    href="https://github.com/mvykool/open-sesame"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center m-5 border-2 border-black dark:border-white text-black dark:text-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition hover:bg-white hover:text-deep-blue"
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
