import React from 'react';
import about from '../assets/project/about.gif';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IoArrowForwardCircleOutline } from "react-icons/io5";


const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the component is visible
    triggerOnce: true // Only trigger once
  });

  return (
    <motion.div
      id='about'
      className='bg-[#1C1C1C] text-white w-full min-h-screen  md:pt-5 lg:pt-5 xl:h-screen '
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      ref={ref} >
        
      <div className='flex flex-col justify-center mx-auto max-w-scr h-full w-full px-4 lg:px-24 xl:px-60'>
        <div className='flex flex-col justify-center pt-5 md:mt-0'>
          <motion.h1
            className='text-4xl font-bold  inline mb-5 flex justify-center'
            initial={{ y: -50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 20 }}>
            <span className='border-b-4 border-gray-500 '>About</span>
          </motion.h1>

          <div className='flex justify-center items-center flex-wrap'>
            <motion.p
              className='md:text-xl tracking-wider flex-1 p-10 w-full'
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 20 }}>
                Hi! I’m <span className='text-red-400'>Pragadeesh</span>, a MERN stack developer. I have completed an extensive MERN stack course and have executed impactful projects. My skills were honed during a one-month web development Internship and have been self-learning to enhance my skills further. Let’s connect and bring your project to life!
            </motion.p>
            <p className='flex-2'>
              <motion.img 
                src={about}
                alt="aboutimage"
                className='w-full h-auto'
                initial={{ scale: 0.5, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.5, type: 'spring', stiffness: 300, damping: 20 }}/>
            </p>
          </div>
          <div className=''>
            <motion.button className='text-white flex items-center gap-2 text-xl rounded-md 
            bg-gradient-to-r from-red-400 to-[#F16A6A] w-fit  px-6 py-3 my-4 ml-10 group'
             initial={{x:50,opacity:0}}
             animate={{x:0,opacity:1}}>         
             
             <a href='./certificate.png' target='_blank'>Certificate</a>  <span className='group-hover:rotate-90 text-2xl duration-300'>
              <IoArrowForwardCircleOutline /></span></motion.button>
            </div>
            

        </div>
      </div>
    </motion.div>
  );
};

export default About;
