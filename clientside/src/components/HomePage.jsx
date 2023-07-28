import React from 'react'
import { Link } from 'react-router-dom'
import HireMe from './HireMe'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import TransitionEffect from './TransitionEffect'

const HomePage = () => {

  return (
    <div className='h-screen w-full'>
      <TransitionEffect/>

      <div className='w-full h-full  '>

        <div className='flex h-auto w-full flex-row md:flex-col md:h-full'>
          <div className='w-full lg:hidden md:inline-block md:w-[1/2]'>
            <img src="/bg.png" alt="loading..." />
          </div>




          <div className='w-[70rem] mt-10 px-10 text-black md:mt-0 md:w-auto lg:mt-[40rem]'>
            <h1 className='text-6xl font-bold w-18 py-4 md:text-2xl'>Turning Vision Into  Reality With Code And Design.</h1>
            <p className='text-md font-semibold md:text-sm'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>



            <div className='flex items-center py-4 gap-3 lg:mx-40 md:mx-0'>

              <Link to={'/CV_Resume.pdf'} target={"_blank"} className='flex items-center bg-black text-white p-2.5 px-6 
          rounded-lg text-lg font-semibold hover:bg-white hover:text-black border 
          border-solid border-transparent hover:border-black' download={true}>Resume <AiOutlineCloudDownload className='w-6 ml-1' /></Link>


              <Link to={"mailto:balajiaadi2000@gmail.com"} target={'_blank'}
                className='text-lg font-medium text-black underline'>Contact</Link>
            </div>
          </div>
        </div>



      </div>


        <HireMe/>


      <div className='absolute right-0 bottom-5 lg:bottom-12 inline-block w-24 md:hidden lg:inline-block'>
        <img src="/tubelight.png" alt="" className='w-auto h-full' />
      </div>


    </div>
  )
}

export default HomePage
