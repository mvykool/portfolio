"use client";

import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRedux,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiVite,
  SiGit,
  SiFirebase,
  SiTypescript,
  SiMongodb,
  SiAstro,
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiAngular,
  SiSass,
  SiStorybook,
  SiNestjs,
  SiFigma,
  SiLinux,
  SiPostman,
  SiGnubash,
} from "react-icons/si";
import GoPreviousPage from "@/app/components/ui/GoPreviouspage";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="w-6/6 md:w-3/6 pt-20 md:pt-0  mx-auto mt-5 md:mt-0">
      <GoPreviousPage />

      <section id="skills" className="pt-5 pb-5 px-5 md:px-0">
        {/* HEADER AND IMAGE SECTION */}
        <div>
          <motion.div
            className="flex justify-center flex-col "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className=" text-4xl md:text-4xl text-black dark:text-white  flex justify-center">
              My <span className="text-app-green md:text-4xl mx-2">Skills</span>
            </p>
            <p className="mt-5 text-center mb-10 md:text-sm md:flex text-black dark:text-white justify-center">
              Tools, Libraries, & Programming languages that I use:
            </p>
          </motion.div>

          <div className="my-8">
            <h3 className="md:mx-5 my-2">Front-end:</h3>
            <motion.div
              className="grid grid-cols-2 md:grid md:grid-cols-3 flex-col gap-5 md:mx-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm  flex items-center font-bold px-2 md:px-4 hover:scale-110 transition duration-200 text-sm cursor-pointer">
                HTML
                <SiHtml5 className="text-orange-600 h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm text-sm flex items-center font-bold px-2 md:px-4  hover:scale-110 transition duration-200 cursor-pointer">
                CSS
                <SiCss3 className="text-blue-500 h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm text-sm flex items-center font-bold px-2 md:px-4  hover:scale-110 transition duration-200 cursor-pointer">
                Javascript
                <SiJavascript className="text-yellow h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm text-sm flex items-center font-bold px-2 md:px-4   hover:scale-110 transition duration-200 cursor-pointer">
                React
                <SiReact className="text-cyan-400 h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm  flex items-center font-bold px-2 md:px-4  text-sm hover:scale-110 transition duration-200 cursor-pointer">
                Typescript
                <SiTypescript className="text-blue-600 h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm text-sm flex items-center font-bold px-2 md:px-4   hover:scale-110 transition duration-200 cursor-pointer">
                Angular
                <SiAngular className="text-rose-600 h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="p-2 h-20  bg-app-gray justify-between rounded-sm  flex items-center  font-bold px-2 md:px-4 text-sm hover:scale-110 transition duration-200 cursor-pointer">
                NextJS
                <SiNextdotjs className="h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm  flex items-center font-bold px-2 md:px-4 text-sm hover:scale-110 transition duration-200 cursor-pointer">
                Tailwind
                <SiTailwindcss className="text-cyan-500 h-7 w-7 md:h-8 md:w-8" />
              </div>

              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm  flex items-center font-bold px-2 md:px-4 text-sm hover:scale-110 transition duration-200 cursor-pointer">
                SCSS
                <SiSass className="text-pink-400 h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm  flex items-center  font-bold px-2 md:px-4  text-sm hover:scale-110 transition duration-200 cursor-pointer">
                Vite
                <SiVite className="text-purple-400 h-7 w-7 md:h-8 md:w-8" />
              </div>

              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm  flex items-center  font-bold px-2 md:px-4 text-sm hover:scale-110 transition duration-200 cursor-pointer">
                Astro JS
                <SiAstro className="text-orange-400 h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm  flex items-center  font-bold px-2 md:px-4  text-sm hover:scale-110 transition duration-200 cursor-pointer">
                Redux
                <SiRedux className="text-purple-500 h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm  flex items-center  font-bold px-2 md:px-4  text-sm hover:scale-110 transition duration-200 cursor-pointer">
                Storybook
                <SiStorybook className="text-rose-500 h-7 w-7 md:h-8 md:w-8" />
              </div>
            </motion.div>
          </div>

          <div className="my-8">
            <h3 className="md:mx-5 my-2">Back-end:</h3>

            <motion.div
              className="grid grid-cols-2 md:grid md:grid-cols-3 flex-col gap-5 md:mx-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm  flex items-center  font-bold px-2 md:px-4  text-sm hover:scale-110 transition duration-200 cursor-pointer">
                Firebase
                <SiFirebase className="text-yellow h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm  flex items-center  font-bold px-2 md:px-4 text-sm hover:scale-110 transition duration-200 cursor-pointer">
                MongoDB
                <SiMongodb className=" text-green-300 h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm  flex items-center  font-bold px-2 md:px-4 text-sm hover:scale-110 transition duration-200 cursor-pointer">
                Node JS
                <SiNodedotjs className=" text-green-600 h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm  flex items-center  font-bold px-2 md:px-4 text-sm hover:scale-110 transition duration-200 cursor-pointer">
                Express JS
                <SiExpress className=" text-black bg-white p-1 rounded-full h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm  flex items-center  font-bold px-2 md:px-4 text-sm hover:scale-110 transition duration-200 cursor-pointer">
                Nest JS
                <SiNestjs className="text-rose-600 h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm  flex items-center  font-bold px-2 md:px-4  text-sm hover:scale-110 transition duration-200 cursor-pointer">
                MySQL
                <SiMysql className="text-orange-300 h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm  flex items-center  font-bold px-2 md:px-4  text-sm hover:scale-110 transition duration-200 cursor-pointer">
                Docker
                <SiDocker className="t text-blue-700 h-7 w-7 md:h-8 md:w-8" />
              </div>
            </motion.div>
          </div>

          <div className="my-8">
            <h3 className="md:mx-5 my-2">Tools, & More:</h3>

            <motion.div
              className="grid grid-cols-2 md:grid md:grid-cols-3 flex-col gap-5 md:mx-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm  flex items-center  font-bold px-2 md:px-4  text-sm hover:scale-110 transition duration-200 cursor-pointer">
                Git
                <SiGit className="text-orange-500 h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm  flex items-center  font-bold px-2 md:px-4  text-sm hover:scale-110 transition duration-200 cursor-pointer">
                Figma
                <SiFigma className="text-pink-500 h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm  flex items-center  font-bold px-2 md:px-4  text-sm hover:scale-110 transition duration-200 cursor-pointer">
                Linux
                <SiLinux className="text-black h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm  flex items-center  font-bold px-2 md:px-4  text-sm hover:scale-110 transition duration-200 cursor-pointer">
                Postman
                <SiPostman className="text-orange-800 h-7 w-7 md:h-8 md:w-8" />
              </div>
              <div className="p-2 h-20 bg-app-gray justify-between rounded-sm  flex items-center  font-bold px-2 md:px-4  text-sm hover:scale-110 transition duration-200 cursor-pointer">
                Bash
                <SiGnubash className="text-white h-7 w-7 md:h-8 md:w-8" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MySkills;
