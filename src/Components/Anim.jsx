import React from 'react'
import Lottie from 'lottie-react'
import AI from '../assets/AI.json'

const Anim= () => {
  return (
      <div className='flex justify-center'>
     
      <Lottie  animationData={AI} loop={true} autoplay={true} className='w-1/3 h-1/3 -mt-20 md:mt-0 md:w-1/4 md:h-1/5'/>
      </div>
  )
}

export default Anim