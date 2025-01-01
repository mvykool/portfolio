"use client";

import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { IconsBE, IconsFE, IconsTools } from "@/app/utils/icons";
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

          <div className="">
            <h3 className="md:mx-5 text-2xl text-black dark:text-white my-2">
              Front-end:
            </h3>
            <motion.div
              className="grid grid-cols-2 md:grid md:grid-cols-4 flex-col gap-2 mx-auto md:mx-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {IconsFE.map(({ Icon, color, name }, index) => (
                <div
                  key={`front-1-${index}`}
                  className="p-2 h-20 bg-white dark:bg-dark-card border-[0.5px] border-gray-700  w-36 md:w-48  justify-between rounded-lg  flex items-center font-bold px-3 md:px-0 hover:scale-110 transition duration-200 text-sm cursor-pointer"
                >
                  <span className="flex ml-0 text-black dark:text-white md:ml-3 gap-2 md:gap-4 items-center font-bold">
                    <Icon
                      className={`${color} h-6 w-6 md:h-8 md:w-8 transition-transform`}
                    />
                    {name}{" "}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="my-8">
            <h3 className="md:mx-5 text-2xl text-black dark:text-white my-2">
              Back-end, and Databases:
            </h3>

            <motion.div
              className="grid grid-cols-2 md:grid md:grid-cols-4 flex-col gap-2 mx-auto md:mx-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {IconsBE.map(({ Icon, color, name }, index) => (
                <div
                  key={`front-1-${index}`}
                  className="p-2 h-20 bg-white dark:bg-dark-card border-[0.5px] border-gray-700  w-36 md:w-48  justify-between rounded-lg  flex items-center font-bold px-3 md:px-0 hover:scale-110 transition duration-200 text-sm cursor-pointer"
                >
                  <span className="flex ml-0 text-black dark:text-white md:ml-3 gap-2 md:gap-4 items-center font-bold">
                    <Icon
                      className={`${color} h-6 w-6 md:h-8 md:w-8 transition-transform`}
                    />
                    {name}{" "}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="my-8">
            <h3 className="md:mx-5 text-2xl text-black dark:text-white my-2">
              Tools, and more:
            </h3>

            <motion.div
              className="grid grid-cols-2 md:grid md:grid-cols-4 flex-col gap-2 mx-auto md:mx-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {IconsTools.map(({ Icon, color, name }, index) => (
                <div
                  key={`front-1-${index}`}
                  className="p-2 h-20 bg-white dark:bg-dark-card border-[0.5px] border-gray-700  w-36 md:w-48  justify-between rounded-lg  flex items-center font-bold px-3 md:px-0 hover:scale-110 transition duration-200 text-sm cursor-pointer"
                >
                  <span className="flex ml-0 text-black dark:text-white md:ml-3 gap-2 md:gap-4 items-center font-bold">
                    <Icon
                      className={`${color} h-6 w-6 md:h-8 md:w-8 transition-transform`}
                    />
                    {name}{" "}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MySkills;
