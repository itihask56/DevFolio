import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import Motion from '@/components/Motion'
import { getSocials,getProjects } from '@/utils/sanity-utils'
import { ProjectType } from '../types/Project'

 

type Props = {}

const ProjectsPage = async (props: Props) => {
  const socialData = await getSocials()
  const projectData:ProjectType[]=await getProjects()
  return (
     <section className='w-full bg-[#F1f6F9] '>
        <Navbar props={socialData}/> 
        <div className='max-w-7xl min-h-screen mx-auto p-5'>
          <Motion delay={1} direction='up'>
            <div className="w-full p-5 my-4 md:my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* <ProjectCard/> 
                <ProjectCard/> 
                <ProjectCard/> 
                <ProjectCard/>  */}

          {projectData.map((p:ProjectType,index:number)=>(
            <ProjectCard key={index} props={p}/>
           ))}
                  
                
                
            </div>
            </Motion>

        </div>
        <Footer/> 

     </section>
  )
}

export default ProjectsPage