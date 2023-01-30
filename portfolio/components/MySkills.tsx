import LineGradient from "../components/LineGradient";
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

  } from "react-icons/si"
  import {FaUserAstronaut, FaCcStripe} from "react-icons/fa"

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

      //**tags */    

const title: string = "<skills>"
const titleEnd: string = "</skills>"



  return (
    <>
     <span className='text-app-green text-sm ' >{title}</span>
    <section id="skills" className="pt-10 pb-10">
      {/* HEADER AND IMAGE SECTION */}
      <div className=" ">
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
          <p className=" text-4xl md:text-4xl  flex justify-center mb-5">
            My <span className="text-app-green md:text-4xl mx-2">Skills</span>
          </p>
          <p className="mt-10 mb-20 md:flex justify-center">
            Tools, Libraries, & Programming languages that I use:
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap md:grid md:grid-cols-3 flex-col gap-5 md:mx-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>

            <div className="p-2 h-20  border-2 border-white justify-between rounded-sm  flex items-center md:font-bold md:px-8 hover:scale-110 transition duration-200 cursor-pointer">
              HTML 
              <SiHtml5 className="text-orange-600  md:h-8 md:w-8"/>
            </div>
            <div className="p-2 h-20  border-2 border-white justify-between rounded-sm  flex items-center md:font-bold md:px-8 hover:scale-110 transition duration-200 cursor-pointer">
              CSS
              <SiCss3 className="text-blue-500 md:h-8 md:w-8"/>
            </div>
            <div className="p-2 h-20  border-2 border-white justify-between rounded-sm  flex items-center  md:font-bold md:px-8 hover:scale-110 transition duration-200 cursor-pointer">
              Javascript
              <SiJavascript className="text-yellow md:h-8 md:w-8"/>
            </div>
            <div className="p-2 h-20  border-2 border-white justify-between rounded-sm  flex items-center  md:font-bold md:px-8 hover:scale-110 transition duration-200 cursor-pointer">
              React
              <SiReact className="text-cyan-400 md:h-8 md:w-8"/>
            </div>
            <div className="p-2 h-20  border-2 border-white justify-between rounded-sm  flex items-center  md:font-bold md:px-8 hover:scale-110 transition duration-200 cursor-pointer">
              Typescript 
              <SiTypescript className="text-blue-600 md:h-8 md:w-8"/>
            </div>
            <div className="p-2 h-20  border-2 border-white justify-between rounded-sm  flex items-center  md:font-bold md:px-8 hover:scale-110 transition duration-200 cursor-pointer">
              Redux
              <SiRedux className="text-purple-500 md:h-8 md:w-8"/>
            </div>
            <div className="p-2 h-20  border-2 border-white justify-between rounded-sm  flex items-center  md:font-bold md:px-8 hover:scale-110 transition duration-200 cursor-pointer">
              NextJS
              <SiNextdotjs className="md:h-8 md:w-8 "/>
            </div>
            <div className="p-2 h-20  border-2 border-white justify-between rounded-sm  flex items-center  md:font-bold md:px-8 hover:scale-110 transition duration-200 cursor-pointer">
              TailwindCSS
              <SiTailwindcss className="text-cyan-500 md:h-8 md:w-8"/>
            </div>
            <div className="p-2 h-20  border-2 border-white justify-between rounded-sm  flex items-center  md:font-bold md:px-8 hover:scale-110 transition duration-200 cursor-pointer">
              Firebase 
              <SiFirebase className="text-yellow md:h-8 md:w-8"/>
            </div>
            <div className="p-2 h-20  border-2 border-white justify-between rounded-sm  flex items-center  md:font-bold md:px-8 hover:scale-110 transition duration-200 cursor-pointer">
              Git/Github
              <SiGit className="text-orange-400 md:h-8 md:w-8"/>
            </div>
            <div className="p-2 h-20  border-2 border-white justify-between rounded-sm  flex items-center  md:font-bold md:px-8 hover:scale-110 transition duration-200 cursor-pointer">
              Vite
              <SiVite className="text-purple-400 md:h-8 md:w-8"/>
            </div>
            <div className="p-2 h-20  border-2 border-white justify-between rounded-sm  flex items-center  md:font-bold md:px-8 hover:scale-110 transition duration-200 cursor-pointer">
              Astro JS
              <FaUserAstronaut className="text-orange-400 md:h-8 md:w-8"/>
            </div>
         
         
        </motion.div>

      </div>
    </section>
    <span className='text-app-green text-sm' >{titleEnd}</span>
    </>
  );
};

export default MySkills;