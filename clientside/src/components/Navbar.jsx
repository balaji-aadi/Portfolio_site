import React, { useEffect, useState } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { SiGmail, SiLeetcode } from 'react-icons/si'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const path = location.pathname;


  useEffect(() => {
    setNav(false);
  },[path])

  const links = [
    {
      id: 1,
      link: 'Home',
      path: '/'
    },
    {
      id: 2,
      link: 'About',
      path: '/about'
    },
    {
      id: 3,
      link: 'Projects',
      path: '/projects'
    }
  ]

  return (
    <nav className='py-8 flex justify-center flex-wrap '>


{/* This styles are applicable for equal to larger 1024 or less than larger screens */}
      <div onClick={() => setNav(!nav)} className='cursor-pointer z-10 text-black 2xl:hidden lg:inline-block absolute left-7 top-6 ' >
        {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
      </div>

{/* This style is apply for the more than larger screens  */}
      <div className='lg:hidden'>
        <ul className='flex px-5 font-semibold'>

          {
            links.map(({ id, link, path }) => (
              <Link to={path}><li key={id} className='px-2 cursor-pointer hover:scale-105  text-black  hover:transition-all' >{link}</li></Link>
            ))
          }
        </ul>
      </div>

{/* This styles are applicable for equal to larger 1024 or less than larger screens */}
      {nav && (
        <div className='min-w-[70vw] h-[70%] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 
               -translate-x-1/2 -translate-y-1/2 bg-black/90 rounded-lg backdrop-blur-md py-32 gap-4 flex-wrap'>
          <ul className='flex px-5 items-center flex-col justify-center gap-5'>

            {
              links.map(({ id, link, path }) => (
                <Link to={path}><li key={id} className='px-2 cursor-pointer hover:scale-105 text-white text-semibold' >{link}</li></Link>
              ))
            }
          </ul>

          <div className='flex gap-7 text-2xl'>
            <Link to={'https://github.com/balaji-aadi'} target={'_blank'} className='bg-white'><AiFillGithub /> </Link>
            <Link to={'https://www.linkedin.com/in/balajiaadi2000/'} target={'_blank'}  className='text-blue-600'><BsLinkedin /></Link>
            <Link to={'mailto:balajiaadi2000@gmail.com'} target={'_blank'}  className='text-red-400'><SiGmail /></Link>
            <Link to={'https://leetcode.com/Aadi2000/'} target={'_blank'}  className='text-yellow-200'><SiLeetcode /></Link>
            <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
          </div>
        </div>
      )
      }

      <div className='relative bottom-4 ml-4'><Logo /></div>

{/* This style is apply for the more than larger screens  */}
      <div className='lg:hidden'>
        <div className='flex gap-5 ml-96 text-2xl'>
          <Link to={'https://github.com/balaji-aadi'} target={'_blank'} ><AiFillGithub /> </Link>
          <Link to={'https://www.linkedin.com/in/balajiaadi2000/'} target={'_blank'}  className='text-blue-600'><BsLinkedin /></Link>
          <Link to={'mailto:balajiaadi2000@gmail.com'} target={'_blank'}  className='text-red-400'><SiGmail /></Link>
          <Link to={'https://leetcode.com/Aadi2000/'} target={'_blank'}  className='text-yellow-200'><SiLeetcode /></Link>
          <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
        </div>
      </div>
    </nav>

  )
}


export default Navbar
