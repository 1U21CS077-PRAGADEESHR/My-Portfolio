import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import profile from '../assets/project/1000156181-transformed.png'
import './Style.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import {motion} from 'framer-motion'

const Home = () => {

  const [text] = useTypewriter({
    words:['Pragadeesh','Mern Stack Developer','Full Stack Developer'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40
  })

  return (
    <motion.div id='home' className='bg-[#080705] min-h-screen md:h-screen w-full '>
        <motion.div  className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 lg:px-24  xl:px-4 md:flex-row'
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{ duration:2 }}>

        <motion.div className='flex flex-col justify-center order-2 md:order-1 h-full p-5'
         initial={{x:-100,opacity:0}}
         animate={{x:0,opacity:1}}
         exit={{opacity:0}}
         transition={{ type: 'spring', stiffness: 300, damping: 20,duration:2}} >

        <motion.h1 className='text-4xl md:text-4xl text-[#66FCF1] font-bold mt-5'
        initial={{y:-50,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{ delay:1, type: 'spring', stiffness: 300, damping: 20, duration: 1,ease: "easeInOut" }}>Hello 🖐️</motion.h1>

       <motion.h1 className='text-2xl md:text-3xl text-white font-bold mt-5 '
       initial={{ x:50, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ delay:1.5, type: 'spring', stiffness: 300, damping: 20, duration: 2 }}> I'm 
       <span className='text-[#c63c5f]'> {text}</span>
       <Cursor cursorColor='red' /></motion.h1>

       <motion.p className='text-base md:text-lg py-5 text-gray-500'
        initial={{y:-50,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{delay:0.5}}
        >As a skilled developer, I specialize in MERN stack development. I focus on utilizing React js to construct dynamic interfaces, supported by expertise in Node js, Express js, and MongoDB. My main objective is to create smooth and user-friendly experiences.</motion.p>


          <div className=''>
            <motion.button className='text-white flex items-center gap-2 text-xl rounded-md 
            bg-gradient-to-r from-red-400 to-[#F16A6A] w-fit  px-6 py-3 my-2 group'
             initial={{x:50,opacity:0}}
             animate={{x:0,opacity:1}}>         
             
             <a href='./resume.pdf' target='_blank'>Resume</a>  <span className='group-hover:rotate-90 text-2xl duration-300'>
              <IoArrowForwardCircleOutline /></span></motion.button>
            </div>
            
        </motion.div>

          <motion.div className='order-1 md:order-2'>
          
            <motion.img src={profile} alt="profile"  className='rounded-image rounded-md mx-auto w-2/3 md:w-4/5 lg:w-11/12 mt-32 md:mt-0'
            initial={{y:-100,opacity:0}}
            animate={{y:0,opacity:1}} />
                      
          </motion.div>

      </motion.div>
    </motion.div>

  )
}

export default Home