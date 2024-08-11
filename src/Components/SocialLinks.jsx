import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {motion} from 'framer-motion'
const SocialLinks = () => {

    const links =[
        {
            id:1,
            child:(
                <>LinkedIn<FaLinkedin size={30}/></>
            ),
            href:'https://www.linkedin.com/in/pragadeesh-mernstackdeveloper',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>Github<FaGithub size={30}/></>
            ),
            href:'https://github.com/1U21CS077-PRAGADEESHR'
        },
        {
            id:3,
            child:(
                <>Mail<HiOutlineMail size={30}/></>
            ),
            href:'mailto:pragadeeshraguraman@gmail.com'
        },
        {
            id:4,
            child:(
                <>Resume<BsFillPersonLinesFill  size={30} /></>
            ),
            href:'./resume.pdf',
            style:'rounded-br-md text-red-400',
            download:true,
        }
    ]
    

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
        <ul>
            {
                links.map(({id,child,href,download,style})=>{
                   return( <motion.li key={id} className={'flex justify-end  bg-[#BFC0C0] w-40 h-12 px-4 p-2  hover:rounded-sm ml-[-100px] hover:ml-[0] hover:duration-300'+ (style ? ` ${style}` : '')}                                   
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.9 }}>
                                     
                     <a href={href} className='flex justify-center items-center  gap-6 text-xl text-[#000000]' download={download} target='_blank' rel='noreferrer'>{child}</a></motion.li>
                )})
            }
          
              
        </ul>
    </div>
  )
}

export default SocialLinks