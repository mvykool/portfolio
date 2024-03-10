import React from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import { motion } from 'framer-motion'
import { FaLink } from 'react-icons/fa'
import { TbMapPin } from "react-icons/tb";

interface Props{
    setSelectedPage: any
}

const Experience = ({setSelectedPage}: Props) => {

    const isAboveLarge = useMediaQuery("(min-width: 1060px)");

return (
    <>
    <section className='md:flex md:justify-center md:items-center md:h-full gap-8 py-5'>
    

	<div className="z-30 basis-2/5 md:ml-10 mt-12 md:mt-5">
	{/* HEADINGS */}
	<motion.div
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.5 }}
		transition={{ duration: 0.5 }}
		variants={{
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0 },
		}}
	>
		<div className='flex justify-center space-x-4 mx-auto'>
		<p className="text-4xl text-app-green font-playfair z-10 text-center md:text-start">
		Exper<span className='text-white'>ience</span>
		</p>
		</div>
	</motion.div>

	</div>
</section>

	{/**experience blocks */}

	<div className='w-full h-auto my-5 flex flex-col gap-5'>

	<div className='flex flex-col md:flex-row gap-2 relative'>

<div className=' w-full md:w-[50%] relative left-0'>
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.5 }}
transition={{ duration: 0.5 }}
variants={{
hidden: { opacity: 0, x: -50 },
visible: { opacity: 1, x: 0 },
}}
className='bg-app-gray rounded-sm p-4 h-auto md:h-auto relative'>
		<h3 className='text-xl mb-2 ml-2'>Waz<span className='text-app-green'>oku</span></h3>
		<div className='flex flex-col my-5'>
		<small className='mx-3 text-gray-300'>August 2023 - Current</small>
	<div className='mx-3 gap-2 flex items-center mt-2 text-gray-400'>
	<TbMapPin />
	<small>London - United Kingdom</small>
	</div>
		</div>
		<h3 className='ml-2 my-2 text-app-green font-semibold'>UI/Front-end Developer</h3>
		<p className='mt-4 text-base ml-2'>In charge of all the aspects of the UI in the development side of things in the Colombian team</p>

		
		<ul className='ml-7 my-5'>
			<li className='t list-disc text-sm text-gray-300 my-2'>
			Collaborated closely with UI/UX designers to develop our user interface.
			</li>
			<li className='t list-disc text-sm text-gray-300 my-2' >
			Develop re-usable components with Storybook, documentation, enforce UI rules.
			</li>
		</ul>

		<ul className='mt-6 ml-2 flex flex-wrap gap-4'>
			<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>HTML/SCSS</li>
			<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>Angular</li>
			<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>Storybook</li>
			<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>PrimeNG</li>
		
			<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>Bootstrap</li>
			<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>TypeScript</li>
		</ul>
		<a href='https://www.wazoku.com/' target="_blank" rel="noreferrer"  className='flex  mt-5 items-center gap-2 ml-3 cursor-pointer text-sm text-gray-400'>
		<FaLink/>
		Website
		</a>
	</motion.div>
</div>

<div className=' w-full md:w-[50%] relative left-0 flex flex-col gap-3 justify-center md:justify-start md:h-auto'>
<motion.img
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.5 }}
transition={{ duration: 0.5, delay: 1 }}
variants={{
hidden: { opacity: 0, x: -30 },
visible: { opacity: 1, x: 0 },
}}
className='w-full object-cover h-auto md:h-[100%]'
src="/wazoku-1.png" />


<motion.img
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.5 }}
transition={{ duration: 0.5, delay: 1 }}
variants={{
hidden: { opacity: 0, x: -30 },
visible: { opacity: 1, x: 0 },
}}
className=' object-cover w-full h-auto md:h-[100%]'
src="/wazoku-2.png"
alt="website" />

</div>

</div>

	<div className='flex flex-col-reverse md:flex-row gap-2'>

	<div className='w-full md:w-[50%] relative left-0 flex flex-col gap-3 justify-center md:justify-start md:h-auto'>
	<motion.img
	initial="hidden"
	whileInView="visible"
	viewport={{ once: true, amount: 0.5 }}
	transition={{ duration: 0.5, delay: 1 }}
	variants={{
	hidden: { opacity: 0, x: 30 },
	visible: { opacity: 1, x: 0 },
	}}
	className=' object-cover h-auto md:h-[100%] w-full relative'
	src="/presik-1.png" />

<motion.img
	initial="hidden"
	whileInView="visible"
	viewport={{ once: true, amount: 0.5 }}
	transition={{ duration: 0.5, delay: 1 }}
	variants={{
	hidden: { opacity: 0, x: 30 },
	visible: { opacity: 1, x: 0 },
	}}
	className=' object-cover h-auto md:h-[100%] w-full relative'
	src="/presik-2.png"
	alt="website" />

	</div>

			<div className=' w-full md:w-[50%] relative left-0'>
				<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
				hidden: { opacity: 0, x: 50 },
				visible: { opacity: 1, x: 0 },
				}}
				className='bg-app-gray rounded-sm p-4 h-auto relative'>
				<h2 className='text-2xl mb-2 text-app-green ml-2'>Pres<span className='text-white'>ik SAS</span></h2>
				<div className='flex flex-col my-5'>
		<small className='mx-3 text-gray-300'>February 2023 - June 2023</small>
	<div className='mx-3 gap-2 flex items-center mt-2 text-gray-400'>
	<TbMapPin />
	<small>Bucaramanga - Colombia</small>
	</div>
		</div>

					<h3 className='ml-2 my-2 text-app-green font-semibold'>Front-end Developer</h3>
					<p className='mt-4 text-base ml-2'>Developed, maintained and styled web sites for the company, with emphasis on accessibility, responsiveness, and UI.</p>

					<ul className='ml-7 my-5'>
						<li className='t list-disc text-sm text-gray-300 my-2'>Main Frontend Developer accountable for  implementing web interfaces using React Bootstrap & Tailwind CSS.</li>
						<li className='t list-disc text-sm text-gray-300 my-2' >
						Presented changes and progress of projects to the client directly, ensured responsivess and optimization.
						</li>
					</ul>
					<ul className='mt-6 ml-2 flex flex-wrap gap-3'>
						<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>React</li>
						<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>CSS</li>
						<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>Tailwind CSS</li>
						
						<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>Bitbucket</li>
						<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>JavaScript</li>
					</ul>
					<a href='https://www.presik.com' target="_blank" rel="noreferrer"  className='flex  mt-5 items-center gap-2 ml-3 cursor-pointer text-sm text-gray-400'>
					<FaLink/>
					Website
					</a>
				</motion.div>
			</div>
	</div>

		

	<div className='flex flex-col md:flex-row gap-2 relative'>

			<div className=' w-full md:w-[50%] relative left-0'>
			<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.5 }}
			transition={{ duration: 0.5 }}
			variants={{
			hidden: { opacity: 0, x: -50 },
			visible: { opacity: 1, x: 0 },
			}}
			className='bg-app-gray rounded-sm p-4 h-auto md:h-auto relative'>
					<h3 className='text-xl mb-2 ml-2'>Peac Soft<span className='text-app-green'>ware SA</span></h3>
					<div className='flex flex-col my-5'>
		<small className='mx-3 text-gray-300'>February 2021 - January 2023</small>
	<div className='mx-3 gap-2 flex items-center mt-2 text-gray-400'>
	<TbMapPin />
	<small>Queretaro - Mexico</small>
	</div>
		</div>
					<h3 className='ml-2 my-2 text-app-green font-semibold'>Front-end Developer</h3>
					<p className='mt-4 text-base ml-2'>Developed responsive websites using React.js
					and Tailwind CSS, ensuring cross-browser
					compatibility and optimal performance.</p>
					<ul className='ml-7 my-5'>
						<li className='t list-disc text-sm text-gray-300 my-2'>
						Collaborated closely with back-end developers to create an accessible and smooth user experience.
						</li>
						<li className='t list-disc text-sm text-gray-300 my-2' >
						Implemented and maintained frontend architecture, resulting in an efficient and scalable codebase.
						</li>
					</ul>

					<ul className='mt-6 ml-2 flex flex-wrap gap-4'>
						<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>HTML/CSS</li>
						<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>React</li>
						<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>Jira</li>
						<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>Tailwind CSS</li>
					
						<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>Axios</li>
						<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>JavaScript</li>
					</ul>
					<a href='https://www.peacsa.com' target="_blank" rel="noreferrer"  className='flex  mt-5 items-center gap-2 ml-3 cursor-pointer text-sm text-gray-400'>
					<FaLink/>
					Website
					</a>
				</motion.div>
			</div>

			<div className=' w-full md:w-[50%] relative left-0 flex flex-col gap-3 justify-center md:justify-start md:h-auto'>
	<motion.img
	initial="hidden"
	whileInView="visible"
	viewport={{ once: true, amount: 0.5 }}
	transition={{ duration: 0.5, delay: 1 }}
	variants={{
	hidden: { opacity: 0, x: -30 },
	visible: { opacity: 1, x: 0 },
	}}
	className='w-full object-cover h-auto md:h-[100%]'
	src="/peac-1.png" />

	
<motion.img
	initial="hidden"
	whileInView="visible"
	viewport={{ once: true, amount: 0.5 }}
	transition={{ duration: 0.5, delay: 1 }}
	variants={{
	hidden: { opacity: 0, x: -30 },
	visible: { opacity: 1, x: 0 },
	}}
	className=' object-cover w-full h-auto md:h-[100%]'
	src="/peac-3.png"
	alt="website" />

	</div>

	</div>

	</div>
</>
)
}

export default Experience;