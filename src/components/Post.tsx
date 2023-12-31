import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { BlogPost } from '@/app/types/BlogPost'

type Props = {
  // props:BlogPost
}

const Post = (props: Props) => {
  return (
      <Link href={"/posts/slug"} className='flex items-center border-2 border-violet-400 hover:scale-105 duration-500 space-x-4 bg-violet-100 rounded-lg shadow-xl shadow-violet-800 p-3'>
        <div className="w-[40%]">
       
        <Image src={'/images/fourth.jpg'} alt='blog image' height={100} width={100} className='w-full object-cover rounded-lg'></Image>
        </div>
        <div className="w-[60%] flex flex-col items-start">
            <h1 className="font-bold text-xl">Why TypeScript learning is important</h1>
            <div className="flex items-center space-x-1 text-violet-500 text-sm">
                <p>Author:</p>
                <p className='font-bold'>Itihas</p>
            </div>
            <div className="w-full flex items-center justify-between space-x-1 text-violet-500 text-xs">
                <p className='font-bold'>2023/10/10</p>
                <p className='font-bold text-sm'>Click to read more</p>
            </div>
        </div>
      </Link>
  )
}

export default Post