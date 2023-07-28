import React from 'react'

const Skills = ({id,path}) => {
    return (
        <div className='mt-[10rem] w-full h-auto' key={id}>
            <div className='animate-bounce p-2'>
                <img src= {path} alt="javascript" className='w-[8rem] cursor-pointer' />
            </div>
        </div>
    )
}

export default Skills
