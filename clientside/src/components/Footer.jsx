import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-black font-medium text-lg md:mt-52'>
      <div className='py-8 flex items-center justify-between md:py-20 lg:flex-col md:text-sm '>
      <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      <div className='flex items-center sm:text-xs'>
      Build With <span className='text-pink-600 text-2xl px-1 md:text-green-500 lg:text-blue-600'>&#9825;</span> by &nbsp;<Link to={'/'} className='underline underline-offset-2'> balajiaadi2000@gmail.com</Link>
      </div>
      <Link to={'/'} target={"_blank"} className='underline'>Bolo Namasta</Link>
      </div>
    </footer>
  )
}

export default Footer
