import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { FaCode } from 'react-icons/fa6';
import { FaEye } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const ProjectCard = ({ imgUrl, title, desc, github, live }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Tilt className="Tilt" options={{ scale: 1.05, max: 30, perspective: 1000 }}>
      <div className="relative">
        <motion.div
          className="h-52 md:h-44 rounded-t-xl relative group "
          style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
          initial={{ opacity: 0, x: -200 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
          transition={{ duration: 1 }}
          ref={ref}
        >
          <div className="overlay bg-[#181818] top-0 left-0 h-full w-full bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 cursor-pointer transition-all duration-500">
            <div className="flex justify-center items-center gap-9 w-full h-full">
              <motion.button
                className="text-white border border-white p-3 rounded-full"
                whileHover={{ scale: 1.1 }}
              >
                <a href={github} target="_blank" rel="noreferrer">
                  <FaCode size={25} />
                </a>
              </motion.button>
              <motion.button
                className="text-white border border-white p-3 rounded-full"
                whileHover={{ scale: 1.1 }}
              >
                <a href={live} target="_blank" rel="noreferrer">
                  <FaEye size={25} />
                </a>
              </motion.button>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="text-white rounded-b-xl bg-[#181818] px-2 md:px-2 py-4"
          initial={{ opacity: 0, y:0 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y:200 }}
          transition={{ duration: 1 }}
          ref={ref}
        >
          <h3 className="text-xl font-semibold ">{title}</h3>
          <p className="text-gray-500">{desc}</p>
        </motion.div>
      </div>
    </Tilt>
  );
};

export default ProjectCard;
