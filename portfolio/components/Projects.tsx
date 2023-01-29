import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

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

          <div>
            <div className="grid-container">
               <img src="/airman1.png" alt="" className="a" />
               <img src="/airman3.png" alt="" className="c" />
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