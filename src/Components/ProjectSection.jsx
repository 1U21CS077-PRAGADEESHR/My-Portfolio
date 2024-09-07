import React from 'react'
import ProjectCard from './ProjectCard'
import nostra from '../assets/project/nostra.png'
import blissBazzar from '../assets/project/BlissBazzar.png'
import greenden from '../assets/project/Greenden.png'
import actodo from '../assets/project/actodo.png'
import weatherApp from '../assets/project/weatherApp.png'
import guessthenumber from '../assets/project/GuessTheNumber.png'
import bookvista from '../assets/project/Bookvista.png'
import tripAdvisor from '../assets/project/tripAdvicer.png'
import quiz from '../assets/project/Quiz.png'
import udemy from '../assets/project/Udemy.png'
import quickMail from '../assets/project/QuickMail.png'

const Projects = [
    {
        id:1,
        title:'Bliss Bazzar',
        desc : '| React | Node JS | Express JS | Tailwind | MangoDB',
        image: blissBazzar,
        github:'https://github.com/1U21CS077-PRAGADEESHR/final-project-ecommerce',
        live:'https://final-project-ecommerce.vercel.app'  
    },
    {
        id:2,
        title:'Quick Mail',
        desc : 'MongoDB | Express Js | Node JS | React | Tailwind',
        image: quickMail,
        github:'https://github.com/1U21CS077-PRAGADEESHR/quickMail',
        live:'https://github.com/1U21CS077-PRAGADEESHR/quickMail'  
    },
    {
        id:3,
        title:'Actodo-list',
        desc : 'React | Tailwind',
        image: actodo,
        github:'https://github.com/1U21CS077-PRAGADEESHR/Actodo',
        live:'https://actodo-green.vercel.app/'  
    },    
    {
        id:4,
        title:'Weather App',
        desc : 'React | Tailwind',
        image: weatherApp,
        github:'https://github.com/1U21CS077-PRAGADEESHR/Weather-app',
        live:'https://weather-app-hazel-nu.vercel.app/'  
    },
    {
        id:5,
        title:'Quiz App',
        desc : 'Js | Html | Css',
        image: quiz,
        github:'https://github.com/1U21CS077-PRAGADEESHR/Quiz',
        live:'https://1u21cs077-pragadeeshr.github.io/Quiz/' 
    },    
    {
        id:6,
        title:'GreenDen Flower Seller',
        desc : 'React | Tailwind',
        image: greenden,
        github:'https://github.com/1U21CS077-PRAGADEESHR/Greenden',
        live:'https://1u21cs077-pragadeeshr.github.io/greenden/' 
    },
    {
        id:7,
        title:'Nostra online clothing',
        desc : 'Js | Html | Css',
        image: nostra,
        github:'https://github.com/1U21CS077-PRAGADEESHR/Nostra',
        live:'https://1u21cs077-pragadeeshr.github.io/Nostra/'   
    },
    
   
    {
        id:8,
        title:'Udemy Clone',
        desc : 'Html | Css',
        image: udemy,
        github:'https://github.com/1U21CS077-PRAGADEESHR/udemy-clone1',
        live:'https://github.com/1U21CS077-PRAGADEESHR/udemy-clone1' 
    },
 
    {        
        id:9,
        title:'Guess the Number',
        desc : 'Js | Html | Css',
        image: guessthenumber,
        github:'https://github.com/1U21CS077-PRAGADEESHR/guessing-game-project-master',
        live:'https://1u21cs077-pragadeeshr.github.io/guessing-game-project-master/' 
    },
 
    

    

];
const project2=[
    {
    
            id:1,
            title:'Trip-Advisor Clone',
            desc : 'Html | Css',
            image: tripAdvisor,
            github:'https://github.com/1U21CS077-PRAGADEESHR/tripadvisor',
            live:'https://1u21cs077-pragadeeshr.github.io/tripadvisor/' 
        
    },
    {
        id:2,
        title:'Book vista',
        desc : 'Js | Html | Css',
        image: bookvista,
        github:'https://github.com/1U21CS077-PRAGADEESHR/bookvista2',
        live:'https://1u21cs077-pragadeeshr.github.io/bookvista2/' 
    }, 
]

const ProjectSection = () => {
  return (

    <>
    <div id='projects' className='bg-[#141413] pb-5 xl:pb-20 lg:pb-10 md:p-10 lg:p-0'>
    <h2 className='md:text-center text-4xl font-bold p-10 text-white flex justify-center '>
       <span className='border-b-4 border-gray-500 mb-2'> My Projects</span></h2>
   <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-10 gap-8 md:gap-12 px-10 lg:px-24 xl:px-52'>
    {
        Projects.map((project)=><ProjectCard key={project.id} title={project.title} desc={project.desc} 
        imgUrl={project.image} tags={project} github={project.github} live={project.live} />)
    }
    </div>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-10 gap-8 md:gap-12 px-10  lg:px-24 max-lg:hidden xl:px-52'>
    {
        project2.map((project)=><ProjectCard key={project.id} title={project.title} desc={project.desc} 
        imgUrl={project.image} tags={project} github={project.github} live={project.live} />)
    }
    </div>
   </div>
   </>
    
  )
}

export default ProjectSection