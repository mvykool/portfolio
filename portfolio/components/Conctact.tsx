import React, { useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
import { motion} from 'framer-motion'

/**framer motion variants */

const sectionVariant = {
  hidden : { opacity: 0},
  show: { opacity: 1,
  transition: { duration: 1, delay: 0.2}
  }
}

 
const Contact = () => {


 
  //email js

  const [result, setResult] = useState(false)

  const form = useRef<HTMLFormElement>(null);



  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  
    if (form.current) {
      emailjs.sendForm('service_li998zs', 'template_owr2bld', form.current, 'YznX3U0AWopqVewR_')
        .then((result: any) => {
            console.log(result.text);
        }, (error: any) => {
            console.log(error.text);
        });
    }

      form.current!.reset(); // Reset the form
      setResult(true)
};

//hide result

setTimeout(() => {
   setResult(false)
}, 4500);

 
 

  return (
    <>
    <section id="contact" className="contact pt-5 ">


   <div className='md:flex md:justify-center'>
   <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-center w-full"
      >
        <div>
          <p className="font-playfair mb-5 font-semibold text-4xl">
            <span className="text-app-green">Contact</span> Me
          </p>

        </div>
      </motion.div>
   </div>


    <div className='flex flex-col mx-auto justify-center md:flex md:justify-center'>  
    <div>
      {result ? 
      <div className='absolute bg-wrapper z-40 w-full h-full top-0 left-0 flex justify-center items-center'>
        <div className='mx-4 md:w-[30vw]  md:py-20 top-40 flex flex-col bg-deep-blue rounded-sm border-2 border-app-green p-8 fixed text-green-500 font-semibold'>
         <p className='md:flex md:justify-center text-sm'>Your message has been successfully sent.</p> 
         <hr className='w-full my-4'/>
        <h3 className='md:flex md:justify-center text-sm' >I will be reaching you back within 24-48</h3>

        </div>
      </div> 
      : null}
    </div> 

      <motion.div
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
      className='md:flex md:justify-center md:py-5 rounded-sm md:mx-20 px-1 md:px-5 bg-app-gray '>
      <form ref={form} className='flex flex-col justify-center p-3 my-2 md:w-[30vw] relative' onSubmit={sendEmail}>
        <div className='flex flex-col md:flex-row md:m-3 justify-center'>
        <label className=' w-20 font-semibold rounded-md flex justify-center p-1 my-1  text-white'></label>
          <input
          type="text"
          name='name'
          id='name'
          placeholder='Your Name'
          className='p-2  pl-3 bg-deep-blue md:w-[14vw] md:text-sm rounded-sm outline-none'/>
          <label className=' w-20 font-semibold rounded-md flex justify-center p-1 my-1 text-white'></label>
          <input
          type="text"
         
          name='email'
          id='email'
          placeholder='Email Address'
          className='p-2  pl-3 bg-deep-blue md:w-[14vw] md:text-sm rounded-sm outline-none'/>
          <label className=' w-20 font-semibold rounded-md flex justify-center p-1 my-1 text-white'></label>
        </div>
          <input
          type="text"
          name='message'
          id='message'
          placeholder='Message' 
          className='px-3 pt-2 bg-deep-blue pb-20 md:text-sm text-black rounded-sm outline-none'/>
          <button className='my-5 py-2 rounded-sm cursor-pointer border-app-green border-2 text-white font-bold p-1 hover:bg-gray-800 hover:scale-105 duration-300' type='submit'  value='send'>Submit</button>
    </form>
      </motion.div>

   </div> 
</section>
</>
  )
}

export default Contact