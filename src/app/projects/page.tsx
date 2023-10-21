import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'

type Props = {}

const ProjectsPage = (props: Props) => {
  return (
     <section className='w-full bg-[#F1f6F9] '>
        <Navbar/> 
        <div className='max-w-7xl min-h-screen mx-auto p-5'>
            <div className="w-full p-5 my-4 md:my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <ProjectCard/> 
                <ProjectCard/> 
                <ProjectCard/> 
                <ProjectCard/> 
                  
                
                
            </div>

        </div>
        <Footer/> 

     </section>
  )
}

export default ProjectsPage