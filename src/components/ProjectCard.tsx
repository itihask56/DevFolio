import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectType } from '@/app/types/Project'

type Props = {
  props:ProjectType
}

const ProjectCard = ({props}: Props) => {
  return (
    <Link href={'/projects/'+props._id} className="relative h-[200px]  rounded-lg group cursor-pointer shadow-2xl shadow-violet-800 hover:scale-105 duration-300 ">
          <Image
            src={props.image}
            // src={"/images/fourth.jpg"}
            alt="project"
            width={200}
            height={150}
            className="h-full w-full rounded-lg "
          />
          <div className="bg-violet-500  absolute top-0 left-0 h-full w-full flex justify-center items-center  text-white p-5  text-xs text-center rounded-lg opacity-0 group-hover:opacity-100 transition-all ease-in duration-300">
             {props.description}
             {/* lorem ipsum */}
          </div>
      </Link>
  )
}

export default ProjectCard