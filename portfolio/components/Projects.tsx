import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import {HiOutlineExternalLink} from "react-icons/hi"
import {TbBrandGithub} from "react-icons/tb"
import Image from "next/image";

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
    <section id="projects" className="py-10 mx-5">
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
          className="sm:grid sm:grid-cols-2 md:gap-3 "
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/**project 1 */}


            <motion.div
        initial="hidden"
        className="mt-10  bg-deep-blue"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}>
              <div className="hover:scale-95 duration-200 transition border-2 rounded-sm border-app-green p-3 relative md:h-[70vh]  cursor-pointer">
              <Image width={700} height={500} src="/project1.png" alt="airman" className="object-left object-cover rounded-sm  h-[40vh] md:h-[20vh]" />
               <p className="my-5 flex justify-center font-bold text-2xl">Airman-<span className="text-app-green">23</span> </p>

               <div className="flex flex-col md:flex-row md:space-x-3
               my-5 ml-2 md:text-xs md:justify-center">
                 <small>-Nextjs</small>
                 <small>-Sanity.io</small>
                 <small>-Tailwind</small>
                 <small>-TypeScript</small>
               </div>

               <p className="text-sm md:text-xs mb-2 text-gray-500 mx-2">Modern eCommerce store built with the <span className="text-app-green font-semibold">latest technology</span>.</p>

              <p className="text-sm md:text-xs mb-2 text-gray-500 mx-2">Fully functional shoppoing cart, <span className="text-app-green font-semibold">payments with Stripe</span>, authentication handled with Fireauth, blog posts, built&rsquo;in chat, & functional email service.</p>

              <div className="flex justify-center mt-5 md:absolute md:bottom-0 md:w-full">
                <a href="https://airman-23.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center m-5 border-2 border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition hover:bg-white hover:text-deep-blue">
                  Live
                 <HiOutlineExternalLink className="mx-2"/>
                </a>
                <a href="https://github.com/mvykool/Airman-23/tree/main/airman-23" target="_blank" rel="noreferrer" className="flex items-center m-5 border-2 border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition hover:bg-white hover:text-deep-blue">
                  Code
                 <TbBrandGithub className="mx-2"/>
                </a>
              </div>
              </div>
            </motion.div>

           {/**project 2 */}


           <motion.div
        initial="hidden"
        className="mt-10 bg-deep-blue"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}>
           <div className="hover:scale-95 duration-200 transition border-2 rounded-sm border-app-green p-3 relative md:h-[70vh]  cursor-pointer">
           <Image width={700} height={500} src="/project2.png" alt="airman" className=" object-cover rounded-sm  object-left h-[40vh] md:h-[20vh] md:w-full" />
               <p className="my-5 flex justify-center font-bold text-2xl">Lib<span className="text-app-green">ello</span> </p>

               <div className="flex flex-col md:flex-row space-x-3
               my-5 ml-2 md:text-xs md:justify-center">
                 <small>-React</small>
                 <small>-Vite</small>
                 <small>-Firebase</small>
                 <small>-Chakra UI</small>
               </div>

               <p className="text-sm md:text-xs mb-2 text-gray-500 mx-2">Web app to take notes, with  <span className="text-app-green font-semibold">different themes.</span> </p>

              <p className="text-sm md:text-xs mb-2 text-gray-500 mx-2">Totally responsive Web app, with functionaity to create, erase notes. Authentication handled with Firebase, <span className="text-app-green font-semibold">and inlcudes six different themes.</span></p>

              <div className="flex justify-center mt-5 md:absolute md:bottom-0 md:w-full">
                <a href="https://libello.netlify.app/" target="_blank" rel="noreferrer" className="flex items-center m-5 border-2 border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition hover:bg-white hover:text-deep-blue">
                  Live
                 <HiOutlineExternalLink className="mx-2"/>
                </a>
                <a href="https://github.com/mvykool/Libello" target="_blank" rel="noreferrer" className="flex items-center m-5 border-2 border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition hover:bg-white hover:text-deep-blue">
                  Code
                 <TbBrandGithub className="mx-2"/>
                </a>
              </div>
           </div>
            </motion.div>

          {/**project 3 */}


          <motion.div
        initial="hidden"
        className="mt-10 bg-deep-blue"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}>
             <div className="hover:scale-95 duration-200 transition border-2 rounded-sm border-app-green p-3 relative md:h-[70vh]  cursor-pointer">
             <Image width={700} height={500} src="/project3.png" alt="airman" className=" object-cover rounded-sm object-right h-[40vh] md:h-[20vh]" />
               <p className="my-5 flex justify-center font-bold text-2xl">Oh M<span className="text-app-green">y Dog</span> </p>

               <div className="flex flex-col md:flex-row space-x-3
               my-5 ml-2 md:text-xs md:justify-center">
                 <small>-AstroJS</small>
                 <small>-React</small>
                 <small>-Tailwind</small>
               </div>

               <p className="text-sm md:text-xs mb-2 text-gray-500 mx-2">Brochure static website dedicated to <span className="text-app-green font-semibold">dog&apos;s care.</span></p>

              <p className="text-sm md:text-xs mb-2 text-gray-500 mx-2">Responsive Website, <span className="text-app-green font-semibold">with soft color palette</span>, and smooth animations.</p>

              <div className="flex justify-center mt-5 md:absolute md:bottom-0 md:w-full">
                <a href="https://oh-my-dog.netlify.app/" target="_blank" rel="noreferrer" className="flex items-center m-5 border-2 border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition hover:bg-white hover:text-deep-blue">
                  Live
                 <HiOutlineExternalLink className="mx-2"/>
                </a>
                <a href="https://github.com/mvykool/omd/tree/main/oh-my-dog" target="_blank" rel="noreferrer" className="flex items-center m-5 border-2 border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition hover:bg-white hover:text-deep-blue">
                  Code
                 <TbBrandGithub className="mx-2"/>
                </a>
              </div>
             </div>
            </motion.div>


          {/**project 4 */}


          <motion.div
        initial="hidden"
        className="mt-10 bg-deep-blue"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}>
             <div className="hover:scale-95 duration-200 transition border-2 rounded-sm border-app-green p-3 relative md:h-[70vh]  cursor-pointer">
             <Image width={700} height={500} src="/project4.png" alt="airman" className=" object-cover rounded-sm  h-[40vh] md:h-[20vh]" />
               <p className="my-5 flex justify-center font-bold text-2xl">For<span className="text-app-green">êt</span> </p>

               <div className="flex md:flex-row space-x-3 flex-col
               my-5 ml-2 md:text-xs md:justify-center">
                 <small>-AstroJS</small>
                 <small>-React</small>
                 <small>-Tailwind</small>
               </div>

               <p className="text-sm md:text-xs mb-2 text-gray-500 mx-2">Static website dedicated to <span className="text-app-green font-semibold">nature & forests</span></p>

              <p className="text-sm md:text-xs mb-2 text-gray-500 mx-2">Responsive Website, that includes<span className="text-app-green font-semibold"> a lot of beautiful pictures, as grid&rsquo;layouts</span>, and smooth animations.</p>

              <div className="flex justify-center mt-5 md:absolute md:bottom-0 md:w-full">
                <a href="https://foret.netlify.app/" target="_blank" rel="noreferrer" className="flex items-center m-5 border-2 border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition hover:bg-white hover:text-deep-blue">
                  Live
                 <HiOutlineExternalLink className="mx-2"/>
                </a>
                <a href="https://github.com/mvykool/foret/tree/main/astro" target="_blank" rel="noreferrer" className="flex items-center m-5 border-2 border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition hover:bg-white hover:text-deep-blue">
                  Code
                 <TbBrandGithub className="mx-2"/>
                </a>
              </div>
             </div>
            </motion.div>


         {/**project 5 */}


          <motion.div
        initial="hidden"
        className="mt-10 bg-deep-blue"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}>
             <div className="hover:scale-95 duration-200 transition border-2 rounded-sm border-app-green p-3 relative md:h-[70vh]  cursor-pointer">
             <Image width={700} height={500} src="/project5.png" alt="airman" className=" object-cover rounded-sm object-left h-[40vh] md:h-[20vh]" />
               <p className="my-5 flex justify-center font-bold text-2xl">Reso<span className="text-app-green">naty</span> </p>

               <div className="flex flex-col md:flex-row space-x-3
               my-5 ml-2 md:text-xs md:justify-center">
                 <small>-React</small>
                 <small>-Redux</small>
                 <small>-Tailwind</small>
                 <small>-RapidApi</small>
               </div>

               <p className="text-sm md:text-xs mb-2 text-gray-500 mx-2">Spotify UI inspired web app, <span className="font-semibold text-app-green">with music player.</span></p>

              <p className="text-sm md:text-xs mb-2 text-gray-500 mx-2">Responsive Web app, inspired from Spotify, <span className="font-semibold text-app-green">I added my own UI to my liking</span>, the app state management is handled <span className="text-app-green font-semibold">with Redux</span></p>

              <div className="flex justify-center mt-5 md:absolute md:bottom-0 md:w-full">
                <a href="https://resonaty.netlify.app/" target="_blank" rel="noreferrer" className="flex items-center m-5 border-2 border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition hover:bg-white hover:text-deep-blue">
                  Live
                 <HiOutlineExternalLink className="mx-2"/>
                </a>
                <a href="https://github.com/mvykool/Resonaty" target="_blank" rel="noreferrer" className="flex items-center m-5 border-2 border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition hover:bg-white hover:text-deep-blue">
                  Code
                 <TbBrandGithub className="mx-2"/>
                </a>
              </div>
             </div>
            </motion.div>


        {/**project 6 */}


                  <motion.div
        initial="hidden"
        className="mt-10 bg-deep-blue"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}>
              <div className="hover:scale-95 duration-200 transition border-2 rounded-sm border-app-green p-3 relative md:h-[70vh]  cursor-pointer">
              <Image width={700} height={500} src="/project6.png" alt="airman" className=" object-cover rounded-sm object-right h-[40vh] md:h-[20vh]" />
               <p className="my-5 flex justify-center font-bold text-2xl">Ze<span className="text-app-green">al</span> </p>

               <div className="flex flex-col
               my-5 ml-2 md:text-xs md:flex-row space-x-3 md:justify-center">
                 <small>-NextJS</small>
                 <small>-Tailwind</small>
                 <small>-Framer-Motion</small>
               </div>

               <p className="text-sm md:text-xs mb-2 text-gray-500 mx-2">Static website, with a <span className="font-semibold text-app-green">beautiful & modern design.</span></p>

              <p className="text-sm md:text-xs mb-2 text-gray-500 mx-2">Responsive Website, with different mordern UI components, <span className="text-app-green font-semibold">including a graphic dashboard</span></p>

              <div className="flex justify-center mt-5 md:absolute md:bottom-0 md:w-full">
                <a href="https://zeal-eight.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center m-5 border-2 border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition hover:bg-white hover:text-deep-blue">
                  Live
                 <HiOutlineExternalLink className="mx-2"/>
                </a>
                <a href="https://github.com/mvykool/Zeal" target="_blank" rel="noreferrer" className="flex items-center m-5 border-2 border-white rounded-sm justify-center md:text-sm py-1 px-2 hover:scale-125 duration-200 transition hover:bg-white hover:text-deep-blue">
                  Code
                 <TbBrandGithub className="mx-2"/>
                </a>
              </div>
             </div>
            </motion.div>
    
        
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Projects;