import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const ProjectCard = (props: Props) => {
  return (
    <Link href={'/projects/12'} className="relative h-[200px]  rounded-lg group cursor-pointer shadow-lg shadow-gray-400 hover:scale-105 duration-300">
          <Image
            src={"/images/fourth.jpg"}
            alt="project"
            width={200}
            height={150}
            className="h-full w-full rounded-lg "
          />
          <div className="bg-violet-500  absolute top-0 left-0 h-full w-full flex justify-center items-center  text-white p-4 text-center rounded-lg opacity-0 group-hover:opacity-80 transition-all ease-in duration-300 ">
            Lorem ipsum do
          </div>
        </Link>
  )
}

export default ProjectCard