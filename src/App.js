import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import SocialLinks from './Components/SocialLinks'
import About from './Components/About'
import ProjectSection from './Components/ProjectSection'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import Education from './Components/Education'
import Scroll from './Components/Scroll'



const App = () => {
  return (
    <div >  
       
        <Navbar />
        <Scroll />
        <Home />
        <SocialLinks />
        <About />
        <Education />
        <ProjectSection />    
        <Experience />
        <Contact />      
        
    </div>
  )
}

export default App