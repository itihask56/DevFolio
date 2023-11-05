import React from 'react'
import Motion from './Motion'
// import { BlogPost } from '@/app/types/BlogPost'
import Link from 'next/link'
type Props = {
 
}

const BlogCard = (props: Props) => {
  return (
 
    <Link href={"/posts/12"} className='flex justify-between items-center w-full'>
    <Motion delay={1} direction={'left'}>
     
    <p className='text-violet-200 cursor-pointer hover:text-pink-500'>
        Why you should learn type script
   
    </p>
 
    <p className='text-center text-sm text-violet-500 hidden md:block'>2023/10/12</p>

 
</Motion>
</Link>
  )
}

export default BlogCard

// type Props = {
//   props:BlogPost
// }

// const BlogCard = ({props}: Props) => {
//   return (
//     <Link href={"/posts/"+props.slug.current} className='flex justify-between items-center w-full'>
//         <Motion delay={1} direction={'left'}>
//         <p className='text-violet-800 cursor-pointer hover:text-pink-600'>
//         {props.title}
//         </p>
//         </Motion>
//         <Motion delay={1} direction={'right'}>
//         <p className='text-sm text-violet-500 hidden md:block'>{props.publishedAt?.toString().slice(0,10)}</p>
//         </Motion>
//     </Link>
//   )
// }

// export default BlogCard