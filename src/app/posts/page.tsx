import React from 'react'
import Post from '@/components/Post'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Motion from '@/components/Motion'
import { getSocials } from '@/utils/sanity-utils'
// import {BlogPost} from '../types/BlogPost'
import Link from 'next/link'
// import { getBlogPosts } from '@/utils/sanity-utils'
// import BlogCard from '@/components/BlogCard'
type Props = {}

const PostsPage = async (props: Props) => {
   const socialData=await getSocials()
   // const blogData:BlogPost[]=await getBlogPosts()
  return (
     <section className='w-full  bg-black'>
        <Navbar props={socialData}/>
        <div className='max-w-7xl min-h-screen mx-auto p-5'>
         <Motion delay={1} direction={"up"}>
           <Link href="/posts/"> <div className="w-full p-5 my-4 md:my-16 grid grid-cols-1 md:grid-cols-2  gap-12  ">
                 <Post/> 
                 <Post/> 
                 <Post/> 
                 <Post/>   

                 {/* {
                  blogData.map((b:BlogPost,index:number)=>(
                     <Post key={index} props={b}/> 
                  ))} */}

           

            </div>
            </Link>
            </Motion>

        </div>
        <Footer/> 
        

     </section>
  )
}

export default PostsPage