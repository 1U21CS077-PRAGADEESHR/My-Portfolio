import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import contact from '../assets/project/contact.svg';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaHeart } from "react-icons/fa6";


const Contact = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    const links = [
        {
            id: 1,
            child: <FaWhatsapp size={30} />,
            href: 'https://wa.me/9360350231',
            hoverColor:"hover:text-green-500"
        },
        {
            id: 2,
            child: <HiOutlineMail size={30} />,
            href: 'mailto:pragadeeshraguraman@gmail.com',
            hoverColor:"hover:text-red-900"

        },
        {
            id: 3,
            child: <FaLinkedin size={30} />,
            href: 'https://www.linkedin.com/in/pragadeesh-mernstackdeveloper',
            hoverColor:"hover:text-blue-500"
        },
        {
            id: 4,
            child: <FaGithub   size={30} />,
            href: 'https://github.com/1U21CS077-PRAGADEESHR',
            hoverColor:"hover:text-gray-700"
        },
        {
            id:5,
            child:<FaInstagram   size={30}/>,
            href: "https://www.instagram.com/i_am.pragadeesh/",
            hoverColor:"hover:text-pink-600"
        }
    ];

    return (
        <div id='contact' ref={ref} className='bg-[#1C1C1C] w-full min-h-screen px-8 pt-5 md:pl-10 xl:pl-0 xl:pt-5'>
             
            <div className='max-w-screen-lg h-full w-full flex flex-col p-4 xl:p-4 justify-center mx-auto text-white'>
                <div className='pb-8 flex justify-center'>
             
                    <p className='text-4xl inline border-b-4 border-gray-500'>Contact</p>
                   
                </div>
                <div className='flex justify-center items-center gap-10 flex-wrap lg:pl-20 xl:pl-0 lg:mt-5'>
                    <form className='flex flex-col w-full md:w-2/5 flex-2' action="https://getform.io/f/azylrvzb" method='POST' autoComplete='off'>
                        <motion.input
                            type='text'
                            name='username'
                            required
                            placeholder='Enter your name'
                            className='bg-transparent p-2 border-2 rounded-md text-white outline-none'
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        />
                        <motion.input
                            type='email'
                            name='Email'
                            required
                            placeholder='Enter your Email'
                            className='bg-transparent p-2  border-2 rounded-md text-white outline-none my-6'
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        />
                        <motion.textarea
                            name='message'
                            placeholder='Enter your message'
                            rows={7}
                            required
                            className='bg-transparent  border-2 rounded-md p-5 text-white outline-none'
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        />
                        <motion.button
                            className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center
                             rounded-md hover:scale-110'
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: 0.8 }}>
                            Let's Talk
                        </motion.button>
                    </form>
                    <motion.div
                        className='flex-1'
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <img src={contact} alt="" className='pb-0'/>
                        <ul className='flex justify-evenly gap-5'>
                            {links.map((link) => (
                                <motion.li key={link.id} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                 transition={{ duration: 0.5, delay: 1.2 + link.id * 0.1 }}>
                                    <a className={`hover: ${link.hoverColor}`} href={link.href} target="_blank" rel="noopener noreferrer">{link.child}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
     <div className='text-center p-10'>
        <h1 className='text-white flex justify-center items-center gap-2'> Designed By 
        <span className='text-red-600'><FaHeart/> </span>Pragadeesh</h1>
     </div>
            
        </div>
    );
};

export default Contact;
