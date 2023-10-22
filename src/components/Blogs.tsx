import React from "react";
import BlogCard from "./BlogCard";
import Motion from "./Motion";
import Link from "next/link";
type Props = {};

const Blogs = (props: Props) => {
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
      
      <Link href={'/posts'}> <p className="text-center text-xs text-violet-500 cursor-pointer">
        see more...
      </p>
      </Link>
    </section>
  );
};

export default Blogs;
