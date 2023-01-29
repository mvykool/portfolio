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
      <div className="md:flex md:justify-between md:gap-16 ">
        <motion.div
          className="md:w-1/3 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className=" text-4xl flex justify-center mb-5">
            MY <span className="text-app-green">SKILLS</span>
          </p>
          <p className="mt-10 mb-20">
            Tools, Libraries, & Programming languages that I use:
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap flex-col gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>

            <div className="p-2 h-20  border-2 border-white justify-between  flex items-center">
              HTML 
              <SiHtml5 className="text-orange-600"/>
            </div>
            <div className="p-2 h-20  border-2 border-white justify-between flex items-center">
              CSS
              <SiCss3 className="text-blue-500"/>
            </div>
            <div className="p-2 h-20  border-2 border-white justify-between  flex items-center">
              Javascript
              <SiJavascript className="text-yellow"/>
            </div>
            <div className="p-2 h-20 border-2 border-white justify-between  flex items-center">
              React
              <SiReact className="text-cyan-400"/>
            </div>
            <div className="p-2 h-20  border-2 border-white justify-between flex items-center">
              Typescript 
              <SiTypescript className="text-blue-600"/>
            </div>
            <div className="p-2 h-20  border-2 border-white justify-between  flex items-center">
              Redux
              <SiRedux className="text-purple-500"/>
            </div>
            <div className="p-2 h-20  border-2 border-white justify-between  flex items-center">
              NextJS
              <SiNextdotjs/>
            </div>
            <div className="p-2 h-20 border-2 border-white justify-between  flex items-center">
              TailwindCSS
              <SiTailwindcss className="text-cyan-500"/>
            </div>
            <div className="p-2 h-20  border-2 border-white justify-between flex items-center">
              Firebase 
              <SiFirebase className="text-yellow"/>
            </div>
            <div className="p-2 h-20  border-2 border-white justify-between  flex items-center">
              Git/Github
              <SiGit className="text-orange-400"/>
            </div>
            <div className="p-2 h-20  border-2 border-white justify-between  flex items-center">
              Vite
              <SiVite className="text-purple-400"/>
            </div>
         
        </motion.div>

      </div>
    </section>
    <span className='text-app-green text-sm' >{titleEnd}</span>
    </>
  );
};

export default MySkills;