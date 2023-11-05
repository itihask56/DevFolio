import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSocials } from "@/utils/sanity-utils";
// import { BlogPost } from "@/app/types/BlogPost";
// import {PortableText} from '@portabletext/react';
// import { Category } from "@/app/types/Category";
// import  {getBlogPost} from '@/utils/sanity-utils'

type Props = {
  // params:{slug:string}
};

const PostPage = async (params: Props) => {
  // const slug=params.slug
  // const postData:BlogPost=await getBlogPost(slug)
  const socialData = await getSocials();
  return (
    <section className="w-full bg-black">
      <Navbar props={socialData} />
      <div className="min-h-screen flex flex-col max-w-7xl mx-auto my-4 md:my-8 p-8 space-y-4 text-left">
        <h1 className="font-extrabold text-3xl text-violet-200">
          Why TypeScript Learning is Important
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-violet-500">
            <p>Author::</p>
            <p className="font-bold">Itihas Verma</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-violet-500">
            <p>Created at:</p>
            <p className="font-bold">2023/10/12</p>
          </div>
        </div>
        <Image
          // src={postData.mainImage}
          src={"/images/fourth.jpg"}
          height={500}
          width={500}
          alt="not available"
          className="w-full rounded-2xl border-2 border-violet-500"
        />
        {/* <PortableText value={postData.body}/>
        <div className='flex items-center space-x-4 text-violet-500'>
            <h3>Category:</h3>
            <div className='flex items-center space-x-2 text-sm font-bold'>
               {postData.categories.map((c:Category,index:number)=>(
                <p key={index} className='bg-violet-200 rounded-lg p-1'>{c.title}</p> 
               ))}
            </div>
        </div> */}
        <p className="text-xl text-violet-100">
          In the fast-paced realm of software development, TypeScript has
          emerged as a pivotal technology, making it imperative for developers
          to embrace this powerful tool. Learning TypeScript offers a plethora
          of advantages that enhance the development process and code quality.
          With its static typing, TypeScript helps identify errors during
          development, resulting in more robust and error-free code,
          significantly reducing debugging time. This, in turn, leads to
          enhanced productivity and improved code organization, as data types
          for variables, functions, and objects are explicitly defined. What's
          more, TypeScript enjoys extensive support from various Integrated
          Development Environments (IDEs), such as Visual Studio Code, and
          provides features like autocompletion and real-time error checking,
          ultimately boosting development efficiency. TypeScript's seamless
          integration with JavaScript allows developers to introduce it
          gradually into existing projects, improving code quality without a
          complete overhaul. Its strong ecosystem, community, and continuous
          development ensure alignment with the latest JavaScript standards. For
          larger projects, TypeScript proves invaluable in terms of scalability
          and maintainability, as its type system facilitates code management
          and extension. It's a versatile choice for cross-platform development,
          targeting web browsers, Node.js, and even native mobile apps. As a
          required or preferred skill in many job postings, TypeScript's demand
          in the job market continues to rise, making it a valuable asset for
          career advancement. In essence, learning TypeScript is not just
          important; it's essential for modern software development, offering a
          wide array of benefits and career opportunities. So, don't hesitate to
          invest in your TypeScript skills—the rewards are well worth the
          effort.
        </p>
        <div className="flex items-center space-x-4 text-violet-500">
          <h3>Tech Used</h3>
          <div className="flex items-center space-x-2 text-sm font-bold">
            <p className="bg-violet-100 rounded-lg p-1">NEXT 13</p>
            <p className="bg-violet-100 rounded-lg p-1">TypeScript</p>
            <p className="bg-violet-100 rounded-lg p-1">Web Development</p>
            <p className="bg-violet-100 rounded-lg p-1">Sanity</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PostPage;
