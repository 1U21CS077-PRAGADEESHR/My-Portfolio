import React from "react";
import { MdOutlineSchool } from "react-icons/md";
import { FaSchoolFlag } from "react-icons/fa6";
import { TbBellSchool } from "react-icons/tb";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {

    const educationList = [
        {
            title: "RVS College of Arts and Science,Sulur (Autonomous)",
            date: "Jun 2021 - Apr 2024",
            description: "Bachelor of Science in Computer Science",
            icon: <MdOutlineSchool />,
        },
        
        {
            title: "Rajalakshmi Genguswamy Matriculation Higher Secondary School,Pethappampatti",
            date: "Jun 2019 - Apr 2021",
            description: "High school",
            icon: <FaSchoolFlag />,
        },
        {
            title: "Rajalakshmi Genguswamy Matriculation Higher Secondary School,Pethappampatti",
            date: "Jun 2019 - Apr 2019",
            description: "Middle School",
            icon: <TbBellSchool />,
        },
    ]

  return (
    <div className="bg-[#000000] w-full h-full  md:pt-5 lg:pt-5 lg:px-14 xl:min-h-full text-white">
      <div className="max-w-screen-lg w-full md:h-full mx-auto">
        <div className="flex justify-center items-center flex-col p-10">
          <h2 className="text-white text-4xl font-bold mb-5 border-b-4 border-gray-500"> Education</h2>

          <VerticalTimeline className="mt-5">
            {
                educationList.map((education,index)=>(
                
                     
            <VerticalTimelineElement 
              key={index}
              className="vertical-timeline-element"
              contentClassName="bg-white text-black"
              contentArrowClassName="border-white"
              dateClassName="text-white text-lg " 
              date={education.date}
              iconClassName="bg-white text-black border-4 border-orange-400"
              icon={education.icon} 
            >
              <h2 className="text-xl font-bold mb-2">{education.title}</h2>
              <p className="text-lg text-gray-500 mb-4">{education.description}</p>
              <p className="text-lg text-gray-500 mb-4">{education.date}</p>
             
            </VerticalTimelineElement>
             ))}
        </VerticalTimeline>                  
            
        </div>
      </div>
    </div>
  );
};

export default Education;
