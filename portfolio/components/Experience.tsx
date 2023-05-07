import React from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import { motion } from 'framer-motion'
import { FaLink } from 'react-icons/fa';

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

	<div className='w-full h-auto my-5'>
		<div className='relative px-5'> 
			<div className='py-2 w-full md:w-[50%] relative left-0'>
			<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.5 }}
			transition={{ duration: 0.5 }}
			variants={{
			hidden: { opacity: 0, x: -50 },
			visible: { opacity: 1, x: 0 },
			}}
			className='bg-app-gray rounded-sm p-4'>
					<h3 className='text-xl mb-2 ml-2'>Peac Soft<span className='text-app-green'>ware SA</span></h3>
					<small className='mx-3 text-gray-300'>October 2022 - Currently</small>
					<p className='mt-4 text-base ml-2'>Developed responsive websites using React.js
					and Tailwind CSS, ensuring cross-browser
					compatibility and optimal performance.</p>
					<ul className='mt-6 ml-2 flex flex-wrap gap-4'>
						<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>React</li>
						<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>Tailwind CSS</li>
						<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>Jira</li>
						<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>GitLab</li>
						<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>Axios</li>
						<li className='text-sm py-1 px-3 bg-app-menu rounded-xl'>JavaScript</li>
					</ul>
					<a href='https://www.peacsa.com' target="_blank" rel="noreferrer"  className='flex  mt-5 items-center gap-2 ml-3 cursor-pointer text-sm text-gray-400'>
					<FaLink/>
					Website
					</a>
				</motion.div>
			</div>

			<div className='py-2 w-full md:w-[50%] relative  md:left-[50%]'>
				<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
				hidden: { opacity: 0, x: 50 },
				visible: { opacity: 1, x: 0 },
				}}
				className='bg-app-gray rounded-sm p-4'>
				<h3 className='text-xl mb-2 text-app-green ml-2'>Pres<span className='text-white'>ik SAS</span></h3>
					<small className='mx-3 text-gray-300'>February 2023 - May 2023</small>
					<p className='mt-4 text-base ml-2'>Developed, maintained and styled web sites for the company, with emphasis on accessibility, responsiveness, and UI.</p>
					<ul className='mt-6 ml-2 flex flex-wrap gap-4'>
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
	</div>
</>
)
}

export default Experience;