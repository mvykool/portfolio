"use client";

import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";
import { TbMapPin } from "react-icons/tb";
import GoPreviousPage from "@/app/components/ui/GoPreviouspage";

const Experience = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="w-5/6 md:w-3/6 mx-auto">
      <GoPreviousPage />
      <section className="md:flex md:justify-center md:items-center md:h-full gap-8 py-5">
        <div className="z-30 basis-2/5 md:ml-10 mt-12 md:mt-5">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex justify-center space-x-4 mx-auto">
              <p className="text-4xl text-app-green font-playfair z-10 text-center md:text-start">
                Exper<span className="text-black dark:text-white">ience</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/**experience blocks */}

      <div className="w-full h-auto my-5 flex flex-col gap-5">
        <div className="flex flex-col md:flex-row gap-2 relative">
          <div className=" w-full md:w-[50%] relative left-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="bg-white dark:bg-dark-card p-4 h-auto rounded-lg border-[0.5px] border-gray-700 md:h-auto relative"
            >
              <h3 className="text-xl mb-2 ml-2 text-black dark:text-white">
                Waz<span className="text-app-green">oku</span>
              </h3>
              <div className="flex flex-col my-5">
                <small className="mx-3 text-gray-700 dark:text-gray-300">
                  August 2023 - Current
                </small>
                <div className="mx-3 gap-2 flex items-center mt-2 text-gray-900 dark:text-gray-400">
                  <TbMapPin />
                  <small>London - United Kingdom</small>
                </div>
              </div>
              <h3 className="ml-2 my-2 text-app-green font-semibold">
                Software developer - UI
              </h3>
              <p className="mt-4 text-base ml-2 text-black dark:text-white">
                In charge of all the aspects of the UI in the development side
                of things in the Colombian team
              </p>

              <ul className="ml-7 my-5">
                <li className="t list-disc text-sm text-gray-700 dark:text-gray-300 my-2">
                  Collaborated closely with UI/UX designers to develop our user
                  interface.
                </li>
                <li className="t list-disc text-sm text-gray-700 dark:text-gray-300 my-2">
                  Develop re-usable components with Storybook, documentation,
                  enforce UI rules.
                </li>
              </ul>

              <ul className="mt-6 ml-2 flex flex-wrap gap-4">
                <li className="text-sm py-1 px-3 bg-orange-400 rounded-xl">
                  HTML
                </li>
                <li className="text-sm py-1 px-3 bg-pink-400 rounded-xl">
                  SCSS
                </li>
                <li className="text-sm py-1 px-3 bg-rose-700 rounded-xl">
                  Angular
                </li>

                <li className="text-sm py-1 px-3 bg-red rounded-xl">
                  Storybook
                </li>
                <li className="text-sm py-1 px-3 bg-rose-400 rounded-xl">
                  PrimeNG
                </li>

                <li className="text-sm py-1 px-3 bg-purple-700 rounded-xl">
                  Bootstrap
                </li>
                <li className="text-sm py-1 px-3 bg-blue-600 rounded-xl">
                  TypeScript
                </li>
              </ul>
              <a
                href="https://www.wazoku.com/"
                target="_blank"
                rel="noreferrer"
                className="flex  mt-5 items-center gap-2 ml-3 cursor-pointer text-sm text-gray-600 dark:text-gray-400"
              >
                <FaLink />
                Website
              </a>
            </motion.div>
          </div>

          <div className=" w-full md:w-[50%] relative left-0 flex flex-col gap-3 justify-center md:justify-start md:h-auto">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              className="w-full object-cover h-auto md:h-[100%] border-[0.5px] border-gray-700 rounded-lg"
              src="/wazoku-1.png"
            />

            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              className="w-full object-cover h-auto md:h-[100%] border-[0.5px] border-gray-700 rounded-lg"
              src="/wazoku-2.png"
              alt="website"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-2">
          <div className="w-full md:w-[50%] relative left-0 flex flex-col gap-3 justify-center md:justify-start md:h-auto">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              className="w-full object-cover h-auto md:h-[100%] border-[0.5px] border-gray-700 rounded-lg"
              src="/presik-1.png"
            />

            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              className="w-full object-cover h-auto md:h-[100%] border-[0.5px] border-gray-700 rounded-lg"
              src="/presik-2.png"
              alt="website"
            />
          </div>

          <div className=" w-full md:w-[50%] relative left-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="bg-white dark:bg-dark-card border-[0.5px] border-gray-700 rounded-lg p-4 h-auto relative"
            >
              <h2 className="text-2xl mb-2 text-app-green ml-2">
                Pres<span className="text-black dark:text-white">ik SAS</span>
              </h2>
              <div className="flex flex-col my-5">
                <small className="mx-3 text-gray-700 dark:text-gray-300">
                  February 2023 - June 2023
                </small>
                <div className="mx-3 gap-2 flex items-center mt-2 text-gray-900 dark:text-gray-400">
                  <TbMapPin />
                  <small>Bucaramanga - Colombia</small>
                </div>
              </div>

              <h3 className="ml-2 my-2 text-app-green font-semibold">
                Front-end Developer
              </h3>
              <p className="mt-4 text-base ml-2 text-black dark:text-white">
                Developed, maintained and styled web sites for the company, with
                emphasis on accessibility, responsiveness, and UI.
              </p>

              <ul className="ml-7 my-5">
                <li className="t list-disc text-sm text-gray-700 dark:text-gray-300 my-2">
                  Main Frontend Developer accountable for implementing web
                  interfaces using React Bootstrap & Tailwind CSS.
                </li>
                <li className="t list-disc text-sm text-gray-700 dark:text-gray-300 my-2">
                  Presented changes and progress of projects to the client
                  directly, ensured responsivess and optimization.
                </li>
              </ul>
              <ul className="mt-6 ml-2 flex flex-wrap gap-3">
                <li className="text-sm py-1 px-3 bg-sky-700 rounded-xl">
                  React
                </li>
                <li className="text-sm py-1 px-3 bg-violet-600 rounded-xl">
                  CSS
                </li>
                <li className="text-sm py-1 px-3 bg-sky-400 rounded-xl">
                  Tailwind CSS
                </li>

                <li className="text-sm py-1 px-3 bg-app-menu rounded-xl">
                  Bitbucket
                </li>
                <li className="text-sm py-1 px-3 bg-amber-500 rounded-xl">
                  JavaScript
                </li>
              </ul>
              <a
                href="https://www.presik.com"
                target="_blank"
                rel="noreferrer"
                className="flex  mt-5 items-center gap-2 ml-3 cursor-pointer text-sm text-gray-600 dark:text-gray-400"
              >
                <FaLink />
                Website
              </a>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 relative">
          <div className=" w-full md:w-[50%] relative left-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="bg-white dark:bg-dark-card rounded-lg border-[0.5px] border-gray-700 p-4 h-auto md:h-auto relative"
            >
              <h3 className="text-xl mb-2 ml-2 text-black dark:text-white">
                Peac Soft<span className="text-app-green">ware SA</span>
              </h3>
              <div className="flex flex-col my-5">
                <small className="mx-3 text-gray-700 dark:text-gray-300">
                  February 2021 - January 2023
                </small>
                <div className="mx-3 gap-2 flex items-center mt-2 text-gray-900 dark:text-gray-400">
                  <TbMapPin />
                  <small>Queretaro - Mexico</small>
                </div>
              </div>
              <h3 className="ml-2 my-2 text-app-green font-semibold">
                Front-end Developer
              </h3>
              <p className="mt-4 text-base ml-2 text-black dark:text-white">
                Developed responsive websites using React.js and Tailwind CSS,
                ensuring cross-browser compatibility and optimal performance.
              </p>
              <ul className="ml-7 my-5">
                <li className="t list-disc text-sm text-gray-700 dark:text-gray-300 my-2">
                  Collaborated closely with back-end developers to create an
                  accessible and smooth user experience.
                </li>
                <li className="t list-disc text-sm text-gray-700 dark:text-gray-300 my-2">
                  Implemented and maintained frontend architecture, resulting in
                  an efficient and scalable codebase.
                </li>
              </ul>

              <ul className="mt-6 ml-2 flex flex-wrap gap-4">
                <li className="text-sm py-1 px-3 bg-orange-500 rounded-xl">
                  HTML
                </li>
                <li className="text-sm py-1 px-3 bg-violet-500 rounded-xl">
                  CSS
                </li>
                <li className="text-sm py-1 px-3 bg-sky-700 rounded-xl">
                  React
                </li>
                <li className="text-sm py-1 px-3 bg-app-menu rounded-xl">
                  Jira
                </li>
                <li className="text-sm py-1 px-3 bg-sky-400 rounded-xl">
                  Tailwind CSS
                </li>

                <li className="text-sm py-1 px-3 bg-black rounded-xl">Axios</li>
                <li className="text-sm py-1 px-3 bg-amber-500 rounded-xl">
                  JavaScript
                </li>
              </ul>
              <a
                href="https://www.peacsa.com"
                target="_blank"
                rel="noreferrer"
                className="flex  mt-5 items-center gap-2 ml-3 cursor-pointer text-sm text-gray-600 dark:text-gray-400"
              >
                <FaLink />
                Website
              </a>
            </motion.div>
          </div>

          <div className=" w-full md:w-[50%] relative left-0 flex flex-col gap-3 justify-center md:justify-start md:h-auto">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              className="w-full object-cover h-auto md:h-[100%] border-[0.5px] border-gray-700 rounded-lg"
              src="/peac-1.png"
            />

            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              className="w-full object-cover h-auto md:h-[100%] border-[0.5px] border-gray-700 rounded-lg"
              src="/peac-3.png"
              alt="website"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
