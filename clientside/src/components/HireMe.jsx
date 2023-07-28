import React from 'react'
import { Link } from 'react-router-dom'

const HireMe = () => {
    return (
        <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute'>
            <div className="w-36 h-auto flex items-center justify-center md:w-24">
                <img src="/rotatebg.png" alt="" className='fill-black animate-spin-slow' />
                <Link to={'mailto:balajiaadi2000@gmail.com'} className='flex items-center justify-center absolute  bg-black rounded-full text-white 
           shadow-md border border-solid border-black w-16 h-16 md:w-12 md:h-12 md:text-[8px] text-sm hover:bg-white hover:text-black'>Hire Me</Link>
        </div>
      
    </div >
  )
}

export default HireMe
