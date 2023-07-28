import React from 'react'
import ProjectLayout from './ProjectLayout'
import TransitionEffect from './TransitionEffect'
import { project } from './projectList'
// import {Link} from 'react-router-dom'
// import { AiFillGithub } from 'react-icons/ai'


const ProjectsPage = () => {
  return (
    <main className='w-full mb-16 flex flex-col items-center justify-center'>
      <TransitionEffect/>
      <h1 className='w-full text-center text-8xl font-bold sm:text-6xl xs:text-4xl'>Imagination Trumps Knowledge! </h1>
       <div className='mt-16'>
       {project.map(item=> (
        <ProjectLayout
            id = {item.id}
            majorTitle = {item.majorProjectTitle}
            majorImg = {item.majorProjectImg}
            majorDesc = {item.majorProjectDesc}
            minorTitle1 = {item.minorProjectTitle1}
            minorImg1 = {item.minorProjectImg1}
            minorTitle2 = {item.minorProjectTitle2}
            minorImg2 = {item.minorProjectImg2}
            gitLinkMajor = {item.githubLinkMajor}
            gitLinkMinor1 = {item.githubLinkMinor1}
            gitLinkMinor2 = {item.githubLinkMinor2}
            majorProjectLiveLink1 ={item.majorProjectLiveLink1}
            majorProjectLiveLink2 ={item.majorProjectLiveLink2}
            minorProjectLiveLink1 ={item.minorProjectLiveLink1}
            minorProjectLiveLink2 ={item.minorProjectLiveLink2}
            minorProjectLiveLink3 ={item.minorProjectLiveLink3}
            minorProjectLiveLink4 ={item.minorProjectLiveLink4}
        />
       )) }
       </div>
    </main>
  )
}

export default ProjectsPage
