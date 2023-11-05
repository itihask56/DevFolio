import React from "react";
import BlogCard from "./BlogCard";
 
import Link from "next/link";
// import { getBlogPosts } from "@/utils/sanity-utils";
// import { BlogPost } from "@/app/types/BlogPost";
type Props = {};

const Blogs = async (props: Props) => {
 
  return (
    <section className="h-screen p-5 mx-auto max-w-7xl flex flex-col items-center justify-center space-y-24 ">
      <h1 className="text-2xl uppercase tracking-[20px] text-violet-500">
        Blogs
      </h1>
     
      <div className="flex flex-col items-start space-y-3 w-full">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
         

      </div>
      
      <Link href={'/posts'}> <p className="text-center text-xs text-violet-300 cursor-pointer">
        see more...
      </p>
      </Link>
    </section>
  );
};

export default Blogs;



// type Props = {};

// const Blogs = async (props: Props) => {
 
//   const blogData:BlogPost[]=await getBlogPosts()

//   return (
//     <section className="h-screen p-5 mx-auto max-w-7xl flex flex-col items-center justify-center space-y-24 ">
//       <h1 className="text-2xl uppercase tracking-[20px] text-violet-500">
//         Blogs
//       </h1>
     
//       <div className="flex flex-col items-start space-y-3 w-full">
//         {/* <BlogCard />
//         <BlogCard />
//         <BlogCard />
//         <BlogCard /> */}
//          {blogData.map((b:BlogPost,index:number)=>(
//               <BlogCard key={index} props={b}/>
//             ))}

//       </div>
      
//       <Link href={'/posts'}> <p className="text-center text-xs text-violet-300 cursor-pointer">
//         see more...
//       </p>
//       </Link>
//     </section>
//   );
// };

// export default Blogs;
