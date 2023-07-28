import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className='flex justify-start border border-solid border-black rounded-full'>
            <MotionLink to={'/'} className='w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-sm font-Montserrat shadow-md' 
            whileHover={{
                backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)","#121212" ],
                transition: {duration:1, repeat:Infinity}
            }}
            >AAdi</MotionLink>
        </div>
    )
}

export default Logo
