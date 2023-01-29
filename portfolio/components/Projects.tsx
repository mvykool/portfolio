import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import {HiOutlineExternalLink} from "react-icons/hi"
import {TbBrandGithub} from "react-icons/tb"

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

const title: string = "<projects>"
const titleEnd: string = "</projects>"



  return (
    <>
        <span className='text-app-green text-sm' >{title}</span>
    <section id="projects" className="py-10">
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
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-app-green">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/**project 1 */}


            <div className="mt-10 border-2 rounded-sm border-app-green p-3">
               <img src="./project1.png" alt="airman" className="object-left object-cover rounded-sm  h-[40vh]" />
               <p className="my-5 flex justify-center font-bold text-2xl">Airman-<span className="text-app-green">23</span> </p>

               <div className="flex flex-col
               my-5 ml-2">
                 <small>-Nextjs</small>
                 <small>-Sanity.io</small>
                 <small>-Tailwind</small>
                 <small>-TypeScript</small>
               </div>

               <p className="text-sm mb-2 text-gray-500 mx-2">Modern eCommerce store built with the <span className="text-app-green font-semibold">latest technology</span>.</p>

              <p className="text-sm mb-2 text-gray-500 mx-2">Fully functional shoppoing cart, <span className="text-app-green font-semibold">payments with Stripe</span>, authentication handled with Fireauth, blog posts, built-in chat, & functional email service.</p>

              <div className="flex justify-center mt-5">
                <a href="https://airman-23.vercel.app/" target="_blank" className="flex items-center m-5 border-2 border-white rounded-sm justify-center py-2 px-3">
                  Live
                 <HiOutlineExternalLink className="mx-2"/>
                </a>
                <a href="https://github.com/mvykool/Airman-23/tree/main/airman-23" target="_blank" className="flex items-center m-5 border-2 border-white rounded-sm justify-center py-2 px-3">
                  Code
                 <TbBrandGithub className="mx-2"/>
                </a>
              </div>
            </div>

        
        </motion.div>
      </div>
    </section>
    <span className='text-app-green text-sm' >{titleEnd}</span>
    </>
  );
};

export default Projects;