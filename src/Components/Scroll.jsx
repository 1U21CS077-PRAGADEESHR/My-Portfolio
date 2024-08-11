import React, { useEffect, useState } from 'react'
import { RxDoubleArrowUp } from "react-icons/rx";

const Scroll = () => {
    const [showButton,setShowbutton] = useState(false)

    const handleButton = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    const handleScroll = ()=>{
        if(window.scrollY > 500)
        {
            setShowbutton(true)
        }
        else
        {
            setShowbutton(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return()=>{
            window.removeEventListener('scroll',handleScroll)

        }

    },[])

  return (
    <div>
        <button className={`fixed right-7 bottom-4 text-black text-2xl md:text-4xl lg:text-3xl p-2 bg-[#FD725E] animate-bounce z-50  rounded-full
         ${showButton?'visible':'invisible'}`} >
            <RxDoubleArrowUp onClick={handleButton} /></button>
    </div>
  )
}

export default Scroll