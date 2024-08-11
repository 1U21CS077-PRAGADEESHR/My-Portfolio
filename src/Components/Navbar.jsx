import React, { useState } from "react";
import { FaTimes} from 'react-icons/fa'
import { BiMenuAltRight } from "react-icons/bi";
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const links = [
        {
            id:1,
            name:'Home'
        },
        {
            id:2,
            name:'About'
        },
        {
            id:3,
            name:'Projects'
        },
        {
            id:4,
            name:'Experience'
        },
        {
            id:5,
            name:'Contact'
        }
    ]
    
  return (
    <div className="bg-[#000000] md:bg-[#BFC0C0] text-[#080705] p-5 flex justify-between items-center z-20 
      h-14 w-full lg:h-12 lg:w-4/5 lg:mx-36 lg:my-2 fixed ">
      <div>
        <h1 className="text-2xl md:text-3xl font-signature tracking-[.20em] cursor-pointer text-white md:text-black ">Pragadeesh</h1>
      </div>
        <ul className=" gap-8 hidden md:flex">
          {
            links.map(({id,name})=>(
                <li key={id} className="cursor-pointer hover:text-gray-500 hover:scale-100 duration-200 font-bold text-[#080705]">
                  <Link to={name.toLowerCase()} smooth duration={500}>{name}</Link></li>
            ))
          }         
         </ul>
         <div className="cursor-pointer text-gray-400 z-20 md:hidden" onClick={()=>setNav(!nav)}>
          {
            nav?<FaTimes size={25}/> : <BiMenuAltRight size={30} />
          }
         </div>
         {
            nav &&(
                <ul className="bg-gradient-to-b from-black to-gray-800  text-[#080705] w-full h-screen absolute
                 top-0 left-0 flex flex-col justify-center items-center  ">
                {
                links.map(({id,name})=>(
                    <li key={id} className="cursor-pointer text-white hover:text-gray-400 px-4 py-6">
                      <Link onClick={()=>setNav(!nav)} to={name.toLowerCase()} smooth duration={500}>{name}</Link></li>
                ))
              }   
                </ul>
            )
         }     
    </div>
  );
};

export default Navbar;
