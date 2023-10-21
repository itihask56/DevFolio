"use client"
import React from 'react'
import Link from 'next/link'
import {SocialIcon} from "react-social-icons"
import { usePathname } from 'next/navigation'
 
type Props = {}

const Navbar = (props: Props) => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <nav className='sticky top-0 max-w-7xl   p-5 flex items-center justify-between z-20'>

        {/* Brand Logo */}

        <div>
        <Link href={"/"} className="text-2xl font-semibold text-violet-500 hover:text-pink-700">
           Dev.Itihas
        </Link>
            
        </div>

        {/* social Icons */}
        {/* <div className='flext item-center space-x-6'>
            <SocialIcon style={{height:25,width:25}} bgColor='#793FEF' className='hover:scale-125 duration-200' url='https://twitter.com/itihas_verma'/>
            <SocialIcon style={{height:25,width:25}} bgColor='#793FEF' className='hover:scale-125 duration-200' url='https://www.instagram.com/itihasverma/'/>
            <SocialIcon style={{height:25,width:25}} bgColor='#793FEF' className='hover:scale-125 duration-200' url='https://github.com/itihask56'/>
            <SocialIcon style={{height:25,width:25}} bgColor='#793FEF' className='hover:scale-125 duration-200' url='https://www.linkedin.com/in/itihas-verma-71641b266/'/>
        </div> */}
         

        <div className='flex items-center space-x-4 md:space-x-8'>
            {pathname !="/projects" && <Link className='text-violet-500 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base' href={'/projects'}>projects</Link>}
            {pathname !="/posts" &&<Link className='text-violet-500 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base' href={'/posts'}>blog</Link>}
            {pathname !="/" &&<Link className='text-violet-500 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base' href={'/resume'}>resume</Link>}
           
 
        </div>
    </nav>
  )
}

export default Navbar